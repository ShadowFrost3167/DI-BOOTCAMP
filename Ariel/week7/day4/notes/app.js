const {getUsers} = require(`./users.js`);

// getUsers("https://jsonplaceholder.typicode.com/users")
// .then((users)=>{
//     console.log(users)
// });

async function users(){
    let users = await getUsers("https://jsonplaceholder.typicode.com/users");
    console.log(users);
}users();


