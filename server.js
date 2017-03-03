#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs      = require('fs');
var io      = require('socket.io');
var http    = require('http');
var mysql      = require('mysql');

var socketHandler = function (socket) {
    var unique_id = Math.round(10000*Math.random());
    var room = 'main';
    socket.join(room);
    socket.emit("message", "lols", "aye", "");

    socket.on('message', function(msg){
        console.log(msg);
        socket.emit("message", msg, msg, "");//socket.to(room).emit('message', msg, msg, "");
    });
}

var Initialize = function() {

    //  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8000;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };


    /**
     *  Populate the cache.
     */
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = { 'index.html': '' };
        }

        //  Local cache for static content.
        self.zcache['index.html'] = fs.readFileSync('./index.html');
        self.zcache['package.json'] = fs.readFileSync('./package.json');
    };


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function(key) { return self.zcache[key]; };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };


    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Create the routing table entries + handlers for the application.
     */
    self.createRoutes = function() {
        self.routes = { };

        self.routes['/asciimo'] = function(req, res) {
            var link = "http://i.imgur.com/kmbjB.png";
            res.send("<html><body><img src='" + link + "'></body></html>");
        };

        self.routes['/'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(fs.readFileSync('./index.html') );
            self.app.use(express.static(__dirname));
        };
    };


    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function() {
        self.app = express();
        self.http = http.Server(self.app)
        self.io = io(self.http);
        self.io.on('connection', function(socket){
            new socketHandler(socket);
        });


        self.createRoutes();

        //  Add handlers for the app (from the routes).
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
    };


    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };


    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {
        //  Start the app on the specific interface (and port).
        self.http.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });
    };

};   /*  Sample Application.  */

var databaseClass = function ()
{
    var self = this;
    console.log("Database starting....")

    self.connection = mysql.createPool({
        host    : process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
        user    : process.env.OPENSHIFT_MYSQL_DB_USERNAME || 'adminkkFDn4c',
        password: process.env.OPENSHIFT_MYSQL_DB_PASSWORD || 'VFls-ydw9-sf',
        database: 'allplaynowork',
        port: '3306'
    });

    self.connection.getConnection(function(err, connect) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
          }
          console.log("Successfully Connected!");
        connect.query('SELECT * FROM `message_table`', function(err, rows) {
            // And done with the connection.
            console.log(rows);
            console.log(err);
            connect.release();

            // Don't use the connection here, it has been returned to the pool.
        });
    });

    self.query = function() {
        console.log("Performing Query....");
        self.connection.query("SELECT * FROM 'message_table'", function (error, results, fields) {
          // error will be an Error if one occurred during the query
          // results will contain the results of the query
          // fields will contain information about the returned results fields (if any)
            console.log(results);
        });
    };

};

/**
 *  main():  Main code.
 */
var main = new Initialize();
//var db = new databaseClass();
//db.query();
main.initialize();
main.start();


