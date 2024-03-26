// =======================================================================
//                       DAILY CHALLENGE 1



// Instructions
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.

var sentence = "Hollow Knight is not too bad!"
// For example, “The movie is not that bad, I like it”.

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
var indexStart = sentence.indexOf("not");
console.log(indexStart)

var indexEnd = sentence.indexOf("!");
console.log(indexEnd)

let notTooBad = sentence.substring(indexStart, indexEnd)

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
var wordBad = sentence.indexOf("bad");
// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
if (indexStart < wordBad){
    var good = "good"
   sentence =  sentence.replace("not too bad", good);
   console.log(sentence);
} else {console.log(sentence)}


// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.

//==========================================================================
//                          DAILY CHALLENGE 2

// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

//1st time
let star = ["*"]

for (i = 0; i <= 5; i++) {
    console.log(star)
    star.push("*");
    
} 

//2nd time

for (let i= 1; i <= 6; i++){
    console.log('*'.repeat(i))}
    let shootingStar = ""
    for (let j = 0; j<i; j++){
        ShootingStar += '*';
    } console.log(shootingStar);


