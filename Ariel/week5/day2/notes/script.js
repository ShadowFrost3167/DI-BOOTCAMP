//7 types of data:
// name
// str
// Number
// bool
// void
// un
// Array 
// obj


//different ways to give values
let name = "value";
let name2;
name2 = 5;


//how to define string:
let string = `Hello`;
let String = "Hello";
let strinG = 'Hello';

//variable can start with letter, underscore, dollar sign. 


//different ways to console log:

console.log("You need to learn python too :)")


let start = "Hello"
let namee = "john"
console.log(start, namee);



let longstr = "I want you to listen to me very carefully, \Harry. Youre not a bad person. \Youre a very good person, who bad things have happened to. \Besides, the world isnt split into good people and Death Eaters. \Weve all got both light and dark inside us. \What matters is the part we choose to act on. \Thats who we really are";
console.log(longstr)

console.log(longstr.length) //returns number of charachters


//find index of a word or first letter of word

console.log(longstr.indexOf("Death"));

var deathIndex = longstr.indexOf("Death");

//if you look for an index that doesn't exist you'll get a return of -1. which means not found.


//get the index of the start and the index of the end of the string you want to make the substring.

var indexStart = longstr.indexOf("Weve all got")
console.log(indexStart)
//can make a smaller string (substring) out of a long string:

//var.substring(indexStart, indexEnd)

console.log(longstr.substring(198, 242));
console.log(longstr.substring(indexStart, 242));



//uppercase vs lowercase

let quota = longstr.substring(indexStart, 242);

let small = quota.toLowerCase();
let bit = quota.toUpperCase();

console.log(small);
console.log(bit);


//
let frac = 7.44654321
console.log(frac.toFixed(2)); // toFixed(x), x is how many digits you want to go past the decimal point. 



//BOOLEANS

let test = true;

//check what type of boolean it is with boolean method Boolean()

let checkBool = Boolean(test);
console.log(checkBool); //returns true because test is true. 



//COMPARISONS

let compare = 10 == 5; // single = assigns value, double == compares the values.

console.log(compare) //should return false since 10 != 5.

//strict comparison has 3 === also checks the type of the value.

let compere = 10 == '10' //normal comparison == returns true

let comire = 10 === "10" //returns false because strict comparison checks type str != int values



//      || means or  - if at least 1 is true = true          && means and - if both true = true

let or = 10 > 5 || 5 > 15;
//returns true because one of the conditions is true.

let and = 10 > 5 && 5 > 15;
//returns false because the second part of conditional is false

//use ++ or -- to increase or decrease a value by 1

let increment = 5;
increment++;
console.log(increment); //returns 6 


// += -= the value is reasigned to itself + or - the int.

increment += 8;
console.log(increment); //returns 14 += takes 8 and adds it to the value of 6 then reassingns the value of increment to that new integer
increment -= 7;
console.log(increment); //returns 7, see above but with subtraction


// ==============================================================================================
//  UNCOMMENT FOR DEMONSTRATION
// alert("This is an automated message")
// let confirmm = confirm("Click OK if you like watching SciFi")
// let answer = prompt("By the way, do you mind if I ask you a personal question?")

//=======================================================================================


//ARRAYS

let naughtyDog = ["Jak", "Daxter", "Samus"]

console.log(naughtyDog[0]); //output Jak

//reasign index to different value
naughtyDog[1] = "Ellie"

console.log(naughtyDog[1]) //output Ellie since reassinged. 


// add indexes with push()

naughtyDog.push("Daxter");
//adds Daxter to end of array.
console.log(naughtyDog) //returns ['Jak', 'Ellie', 'Samus', 'Daxter']

//remove last index with pop()

naughtyDog.push("Temporary"); //adds temporary to end of array
naughtyDog.pop() //removes temporary

//remove first element with shift(), add to beginning of array with unshift()
naughtyDog.unshift("Probation") //puts probation in beginning of array
naughtyDog.shift() //removes probation

//remove  things in between array indexes with splice()

naughtyDog.splice(0, 1) //started at index 0 and remove one index from array. removes Jak which was the first index
console.log(naughtyDog)


naughtyDog.splice(0, 0, 'Coco Bandicoot', 'Crash Bandicoot')
//return ['Coco Bandicoot', 'Crash Bandicoot', 'Ellie', 'Samus', 'Daxter']
// first 0 starts at 0 index, second 0 remove 0 items, then pushes the indexes specified into the location.

console.log(naughtyDog)

//takes a piece from old array and make new one with it. second parameter is also index. colors.slice(0,1) both 0 and 1 are indexes, the second number is the index not included. (1,3) = up to the fourth element. 

//COPY THESE AND PASTE THEM INTO NEW LIST: 

let Bandicoots = naughtyDog.slice(0, 2);
console.log(Bandicoots);

//join() to  join a string together and toString() to make stuff strings. 


// ==========================================================================================




//OJBECTS
let obj2 = {
    key: 'value',
    key: 'value'
}

let hero = {
    name: 'Sora',
    love: 'Kairi',
    friend: 'Riku',
    status: 'Keyblade Master',
    companions: {
        mage: "donald",
        defender: "goofy"
    },
    power: 2
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//how can we access the key values?
//we can use obj2[key]


console.log(hero['name']); //returns Sora 


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// you can also use obj2.key
console.log(hero.name); //returns Sora

console.log(hero.companions.defender) //returns goofy



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//how to add or change values?




hero.status = "dweeb" //changes status to dweeb
hero.previousStatus = "Keyblade Master" //adds previous status to keys

console.log(hero);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//how to remove keys?

delete hero.status //deletes status key

console.log(hero)

//============================================================================================


//IF EXAMPLES W/IN CONDITIONALS

if (0 < hero.power <= 3) {
    console.log("you are a keyblade novice")
} else if (hero.power == 4) {
    console.log("Bring it on!")
} else
    console.log("Power level is maxed out!")



//============================================================================================
//switch cases

//                      COMMENT OR UNCOMMENT TO SEE SWITCH CASE EXAMPLE BELOW

// hero.name = "tidus";


switch (hero.name) {
    case 'tidus':
        console.log(`Whatever old man..`);
        break // stops the function

    case 'Auron':
        console.log(`This is my story...`);
        break
    case 'Sin':
        console.log(`The whole village died. Game Over`);
        break
    default:
        console.log(`Our Main Players`);
        break
}


//================================================================================================
//                                          TYPES OF LOOPS


let illager = [4, 12, 18, 26]
// for loops

for (let index = 0; index <= 5; index++) {
    console.log(index)
} //console logs 1-5

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//              FOR OF                     VS                   FOR IN

// for (let iterator of object) {
//     console.log(iterator)
// }

for (let populationEvil of illager) {
    console.log(populationEvil);
} //outputs numbers in the illager array

//iterator = index we're working on in array



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// for (const key in object){
//     console.log(key)
// }

for (key in hero) {
    let value = hero[key]
    console.log(`${key}: ${value}`);
}
//^^^^^^^^^^^^^^^console.logs all keys and values from object ^^^^^^^^^^^^^^^



//==========================================================================================

//WHILE LOOPS

let trio = 0

while (trio < 3) {
    console.log("Where is your third party member?");
    trio++
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//DO WHILE LOOPS

//will always do AT LEAST one cycle of the loop



// do {

// } while(condition);

do {
    console.log("Where is your third party member?");
    trio++
} while (trio < 3)

//even though parameters are met from the while loop example it will still run the loop AT LEAST once and console log the question

//============================================================================================



//                      BREAK               VS              CONTINUE

trio = 0;
do {
    if (trio == 2) {
        console.log("You already have Goofy with you, you're fine");
        break;
    }
    console.log("Where is your third party member?");
    trio++;

} while (trio < 3);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


let trickstair = 0;

do {
    trickstair++;
    if (trickstair === 4) {
        continue; //skips the number 4 in the count
    } console.log("He fell through floor " + trickstair)
} while (trickstair < 10)








































