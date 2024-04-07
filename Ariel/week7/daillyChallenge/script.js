//============================================================

// Instructions

// 1rst Daily Challenge


// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
let hamlet = [`words`, `wordss`, `WORDS`];
let DiZ = [5432, `garble garble`, `123#@!#!`];


// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.

const makeAllCaps = (arr) => {
    return new Promise((resolve, reject)=>{
        const stringCheese = arr.every((word)=> typeof word === "string");
        if (!stringCheese){
            // else, reject the promise with a reason.
            reject (`Objection! This isn't stringy enough! Theres a character here who does not belong.`);
        } else {
            const superMushroom = arr.map((word)=>{
                return word.toUpperCase();
            });
            resolve(superMushroom);
        }
    });
};

makeAllCaps(hamlet)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });

makeAllCaps(DiZ)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });



// The second function called sortWords(), takes an array of words uppercased as an argument

let mageDonald = [`ARE`, `YOU`, `NUTS`, `!?!?!?!`, `BAHHSHDAWIEHF`];

let knightGoofy = [`Gwarsh`, `I`, `Guess`];

// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.

const sortWords = (arr) => {
    return new Promise((resolve, reject)=>{
        if (arr.length > 4){
            resolve(arr.sort());
        }else{
            // else, reject the promise with a reason.
            reject(`Too small to sort, you need a bigger rant otherwise this just won't be funny.`)
        }
    });
};

sortWords(mageDonald)
    .then((res)=>{
        console.log(res);
    })
    .catch((rej)=>{
        console.log(rej);
    });

sortWords(knightGoofy)
    .then((res)=>{
        console.log(res);
    })
    .catch((rej)=>{
        console.log(rej);
    });




// Test:

// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// // //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// // //in this example, you should see in the console, 
// // // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))



//============================================================



// 2nd Daily Challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.



const toJs = (obj) =>{
    return new Promise((resolve, reject)=>{
        // if the morse javascript object is empty, throw an error (use reject)
        if (Array.isArray(obj)){
            if(obj.length === 0) {
            reject(`Signal Disrupted`);
        } else{
            resolve(obj);
        }
        // else return the morse javascript object (use resolve)
    } else if (typeof obj === "object"){
        const spyWhite = Object.entries(obj);
    const spyBlack = JSON.stringify(spyWhite);
    resolve(spyBlack);
    
    } else{
        reject(`Signal Disrupted`);
    }
});

    
};




// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.



// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---