
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
//  funcOne()


                

// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?

        //1- A WILL BE 3 BECAUSE IT'S WITHIN THE FUNCTION TO CHANGE TO 3. 

        //1.2-YOU WON'T BE ABLE TO REASSIGN THE VALUE WITHIN THE FUNCTION


//=========================================================================
// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?


// funcThree() returns an alert that says inside the funcThree function 0
//funcTwo returns a=5
//i think there will be an alert that says inside the funcThree function 5 since we ran the funcTwo function which will change the value stored in memory for variable a. 
//if variable is defined with const  you can reassign it. so you'll get an error. 



//=========================================================================

// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // // #3.1 - run in the console:
// funcFour()
// funcFive()


//funcFour() creates a global variable a with the value of "hello"
//funcFive should return an alert that says inside funcFive function hello



//=========================================================================

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?


//should return an alert inside the funcSix function test
//if you use const instead of let you'll get an error because you cannot reassign values to a const. 


//=========================================================================

// //#5
// let  a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?


//you'll get an alert in the if block 5 because the function is already defined as true. if you try to declare with const instead of let you will get an error. 
//=========================================================================


// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.

let winBattle = (winBattle) => {
    return true;
}
// Create a variable called experiencePoints.

// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
let experiencePoints = (winBattle === true) ? 10: 1;

// Console.log the experiencePoints variable.

console.log(experiencePoints);

//=========================================================================



// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
let isString = (value)=> typeof value === 'string';

// Check out the example below to see the expected output
// Example:

 console.log(isString('hello')); 
// //true
console.log(isString([1, 2, 4, 0]));
// //false


//=========================================================================



// 🌟 Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
//
const sum = (num1, num2) => {
    console.log(num1+num2);
}

sum(5,3);
//=========================================================================



// 🌟 Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)


// First, use function declaration and invoke it.
// var grams = nums* 1000;
function kgToGrams(nums){
    var grams= nums*1000;
    console.log(grams);
} kgToGrams(50);
// Then, use function expression and invoke it.
const toGrams = function(nums){
    var grams=nums*1000;
    console.log(grams);
}
toGrams(50);
// Write in a one line comment, the difference between function declaration and function expression.

// WHEN YOU DECLARE A FUNCTION YOU WRITE THE WHOLE FUNCTION OUT WITH THE WORD FUNCTION. WHEN YOU EXPRESS A FUNCTION YOU ASSIGN IT TO A VARIABLE AND STORE IT WITHIN THAT VARIABLE. 

// Finally, use a one line arrow function and invoke it.
const weightConvert=(num)=> console.log(num*1000);
weightConvert(50);
//=========================================================================



// 🌟 Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
let numOfChildren = 3;
let partnerName =  `Judah`;
let city = `Jerusalem`;
let job = `Full Stack Developer`;
console.log("look here");
(function future (numOfChildren, partnerName, city, job){
    let sentence = `You will be a ${job} in ${city}, and married to ${partnerName} with ${numOfChildren} kids.`;
    let outputElement = document.getElementById("output");

    if (!outputElement){
        outputElement = document.createElement("div");
        outputElement.id = "output";
        document.body.appendChild(outputElement);
    }
    outputElement.textContent = sentence;

})(numOfChildren, partnerName, city,  job);





// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
let outputElement = document.createElement("div");
outputElement.id = "output";
document.body.appendChild(outputElement);
//=========================================================================

// 🌟 Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

//need help on this. lost on how to approach.

//=========================================================================

// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
document.addEventListener("DOMContentLoaded", function(){
function makeJuice(size){
    let ingredients = [];
    function addIngredients(in1, in2, in3){
        ingredients.push(in1, in2, in3);
        const sentence = `The client wants a ${size} juice containing ${in1}, ${in2}, ${in3}.`;
        const sentenceDiv = document.createElement("div");
        sentenceDiv.textContent = sentence;
        document.body.appendChild(sentenceDiv);
        console.log(sentence); //remove before pushing
    }
    function displayJuice(){
        const sentence = `The client wants a ${size} juice containing ${in1}, ${in2}, ${in3}.`;
        const sentenceDiv = document.createElement("div");
        sentenceDiv.textContent = sentence;
        document.body.appendChild(sentenceDiv);
    }

    addIngredients("kiwi", "banana", "strawberry");
    addIngredients(`Mango`, `Coconut`, `Papaya`);

    displayJuice();
} makeJuice("large");});
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.