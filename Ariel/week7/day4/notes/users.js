const getUsers = async (`https://jsonplaceholder.typicode.com/users`) => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json();
        return data;
    }
    catch(error){
    console.log(error)  
     }
};


//how to make it a module
module.exports = {getUsers};