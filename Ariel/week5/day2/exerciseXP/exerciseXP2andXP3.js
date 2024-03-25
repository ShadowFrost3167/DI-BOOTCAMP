// 🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
const colors = ["jade", "charcoal", "plum"," purple"," green"];
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
let rank;

let suffixes = ["st", "nd", "rd", "th", "th"];

for(i=0; i < colors.length; i ++){
    rank = (i+1).toString();
    console.log("My # " + rank + " choice is " + colors[i]);
}
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

for (i = 0; i < suffixes.length; i ++){
    rank = (i+1).toString();
    console.log("My " + rank + suffixes[i]+ " choice is " + colors[i]);
}


// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
let numberGuess = prompt("Give me a number! Any number!");

let numberIdentity = parseInt(numberGuess);
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
while (numberIdentity < 10){
    let youLose = prompt("Too low! Guess Again!!");
    let rematch = parseInt(youLose);
    
    if (rematch ===10){
        console.log("test passed");
        break;
    }  numberIdentity = rematch;
} 
// Tip : Which while loop is more relevant for this situation? while if?