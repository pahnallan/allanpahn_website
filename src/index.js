import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter, Switch, Route, Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiThemebtn = getMuiTheme()  

ReactDOM.render(<MuiThemeProvider muiTheme={muiThemebtn}><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
