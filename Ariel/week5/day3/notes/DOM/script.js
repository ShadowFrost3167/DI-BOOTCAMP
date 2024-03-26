console.log("domClass")

//getting elements

let title = document.body.firstElementChild; //   retrieved h1 by using
                                             //   body tag

console.log(title) //returns h1

//gets click button
let buttonClick = document.body.children[1];

let userName = prompt("Please type your name to sign in below and hit enter:"); 

while(userName === null){
    userName = `Stranger, I don't know you... Please click below to sign in!`;
} 


title.textContent = `Welcome ${userName}`

buttonClick.addEventListener('click', function(){
    let userName = prompt("Please type your name to sign in below and hit enter:");
    title.textContent = `Welcome ${userName}`
})

// QUESTION 1 is dom like pgadmin but in a browser format in terms of function?

let mainDiv = document.getElementById("main")
console.log(main);


let bodyChildren = document.body.children
console.log(bodyChildren[1])


                                //  ABOVE ARE TWO WAYS TO GET THE DIV 
                                //ELEMENT SELECTED AND ASSIGNED TO VARIABLES


title.style.color = "grey";   
                        //changes css of page within dom from JS 



let divUsers = document.body.children[0]

let divusers2 = document.body.firstElementChild


                        //2 ways of getting the first child of the body

let uList = document.body.lastElementChild;

                                        //returns the ul because it's 
                                        //the last child of the body tree

let ulList = divUsers.nextElementSibling; 

                                        //returns ul because it's the next 
                                        //sibling of the div in the body treeMa




//===================CREATING NEW ELEMENTS===============
let divMain = document.getElementById('main'); //select

let newP = document.createElement('p') //create

let pContent = document.createTextNode(`is alost lunchbreak, yep i know`)











