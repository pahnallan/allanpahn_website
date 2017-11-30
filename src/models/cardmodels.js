// Skill Models

const web_card = {
      title: "HTML/CSS/Javascript",
      description: "4+ years experience",
      logo : WebLogo,
}
const nodejs_card = {
  title : "Node.js",
  description : "2+ years experience",
  logo : NodeLogo,
};
const react_card = {
  title : "React",
  description: "1+ years experience",
  logo : ReactLogo,
};
const net_card = {
  title : ".NET",
  description : "3+ years experience",
  logo : NetLogo,
};
const csharp_card = {
  title : "C#",
  description : "3+ years experience",
  logo : CSharpLogo,
};
const cplusplus_card = {
  title : "C++",
  description : "2+ years experience",
  logo : CPlusPlusLogo,
};
const python_card = {
  title : "Python",
  description : "5+ years experience",
  logo : PythonLogo,
};
const sqlite_card = {
  title : "SQLite",
  description : "2+ years experience",
  logo : SQLiteLogo,
};
const mongo_card = {
  title : "MongoDB",
  description : "1+ years experience",
  logo : MongoDBLogo,
}

// Project Models

const connect4_card = {
  title : "Connect 4",
  description : "Built using React. Connect 4 is part of the SquadMingo application and involves users playing over the internet.",
  logo : C4Logo,
};
const sequence_card = {
  title : "Sequence",
  description : "Built using React. Sequence is an online multiplayer game where a user attempts to get 5 in a row. This is a part of the SquadMingo game application",
  logo : SequenceLogo,
}
const squadmingo_card = {
  title : "SquadMingo",
  description : "Built using React and NodeJS, SquadMingo is an online multiplayer game room where users can play and chat with friends over Socket.io",
  logo : MongoDBLogo,
}

// Contact Models

const email_card = {
  title : "Email",
  description : "pahnallan@gmail.com",
  icon : (<Email color={'#70B2C1'} style={{width: '140', height : '140', }} />),
};
const mobile_card = {
  title : "Mobile",
  description : "(916) 803-5274",
  icon : (<ContactPhone color={'#70B2C1'} style={{width: '140', height : '140', }} />),
}
const github_card = {
  title : "GitHub",
  description : "https://github.com/pahnallan",
  icon : (<AccountCircle color={'#70B2C1'} style={{width: '140', height : '140', }} />),
}

// Assign cards to a list to be iterated through

const skillsCardList = [web_card, nodejs_card, react_card, net_card, csharp_card, cplusplus_card, python_card, sqlite_card, mongo_card];
const projectsCardList = [connect4_card, sequence_card, squadmingo_card];
const contactsCardList = [email_card, mobile_card, github_card];