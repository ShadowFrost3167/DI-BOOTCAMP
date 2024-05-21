const {getUsers} = require ('./users.js');

getUsers().then((users)=> console.log(users));