// const {EventEmitter} = require('events');
// const eventEmitter = new EventEmitter();

// //              requires event emitter ↑↑↑↑↑↑


// eventEmitter.on(`lunch`, ()=>{
//     console.log(`yummy steamy`);
// });

// //              sets up event emitter ↑↑↑↑↑↑

// //              triggers event to run ↓↓↓↓↓↓
// eventEmitter.emit(`lunch`);

const {readFile, readFileSync} = require('fs');

// // sets up the require ↑↑↑↑↑↑

// //slow and causes the readFile to take longers ↓↓↓↓ the file is read before the console.log
// const txt = readFileSync('./hello.txt', 'utf8');

// console.log(txt);

// console.log('do this ASAP');

// //faster and asynchronous the console.log is run before the file
// readFile('./goodbye.txt', 'utf8', (err, txt)=>{
//     console.log(txt)
// });

// console.log(`do this ASAP`);

//promises are asynchronous and non blocking, another way to read a file with node.js

// const {readFile} = require('fs').promises;

// async function hello(){
// const file = await readFile('./promise.txt','utf-8');
// }

// // console.log('the promises');

// //create variable for module

// const modulator = require('./my-module');

// //console log the file
// console.log(modulator);


//require npm packages after running npm init -y in terminal 
const express = require('express');


//express app creates different urls and endpoints for user to navigate to in browser
const app = express();

app.get('/', (request, response)=>{
    // console.log('error');

    readFile('home.html', 'utf-8', (err, html)=>{

        if (err){
           return response.status(500).send(`please hold. technical difficulties...`)
        // }console.log("b4 html")
        response.send(html);
    })

});

//define a port so app listens to certain requests
app.listen(process.env.PORT || 3000, ()=> console.log(`app available on http://localhost:3000`))