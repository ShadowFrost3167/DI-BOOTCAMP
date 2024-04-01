                //IIFE arrow functions

((functionn) => {
    console.log(functionn);
})("function executed")

                //ternary operators
                //takes 3 operands - condition?, expressionExecuteIfTrue:, expression if false
                // <condition> ? <expression> : <expression>

 function isHero(isHarryPotter){
    return (isHarryPotter? "hero": "neville");
 }

 console.log(isHero(true));

 console.log(isHero(false));



            //  Create a function to check the year given by the user

            // If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

 var yearGiven = prompt("give me a year below!");

 function age(yearGiven){
    return (yearGiven>2000? `You are in the 21st century`: `You live in the Middle Age`);
 }

 console.log(age(yearGiven));


                            //arrow functions

    const sakura = (pet, age) => {
        console.log(pet, age);
    }

    sakura("cat", 6)


                                //making object with . notation

        let currentPet = new Object();

        currentPet.name = 'sakura';
        currentPet.species = `cat`;
        currentPet.age = 5; 
        currentPet.status = `alive`;

        console.log(currentPet); //to view object


                                //using [bracket] notation to make object

        let oldPet = new Object();

        oldPet[`name`] = `Sammy`;
        oldPet[`species`] = `dog`;
        oldPet[`age`] = 13;
        oldPet[`status`] = `deceased`;

        console.log(oldPet) //to view object


        //how to clone object

        let obj = {a: `a`, b: `b`};
        let clone = Object.assign({}, obj);
        //or
        let clone2 = {...obj};

        obj.b = 2;
        console.log(obj); //returns modified object with 2 = b
        console.log(clone); //returns og object a -a b-b 
        console.log(clone2); //same as clone

        //deep cloning instead of shadow cloning like above only gets one layer of object but deep cloning gets all the layers of ojbect ex:

        let sonGohan = {
            colour: `purple`,
            attack: `Masenko`,
            weakness: {
                fear: `Chi-Chi`
            }
        };

        let superClone = JSON.parse(JSON.stringify(sonGohan));
        let clonee = {...sonGohan};
        sonGohan.weakness.fear = `Piccalos Dissapointment`;

        console.log(sonGohan); //returns the altered
        console.log(clonee); //returns altered
        console.log(superClone); //returns origional fully intact :)





//=======================================================================




        //                      notes with Ziv

        //if you need to wait for page to render you can add 'defer async' within the script tag after the src. 


        //difference between const and let? you must define const, can't leave const's definition empty. you'll get an error


let x = `sammy`

function y(){
    let x = `Sakura`;
    console.log(x);
}
console.log(1,x);
y();

//^^^^^^^^^^ above example of scoping ^^^ 


//=======================================================================


//                              default parameters

//function name(paramters){
    //action
//}

function sum(a,b=1){
    console.log(a+b);                       
}
sum(1);

//b's default parameter is 1 but if you add ,2 into the sums call you can override the default, to call the default parameter pass undefined in the slots. 


//=======================================================================

//                                  condiitonals



let r;
let z =5; 

if (z > 3){
    r = true;
} else {
    r = false; 
}
console.log(r);



//ternary operators to do the conditional statement in one line

let s = (z > 3) ? true : false;

// let variable = condition ? return : else;




//=======================================================================


//                              template strings

let name = `Dad`;

let greeting = `What's up ` + name;

let hello = `What's up ${name}`;

console.log(1, greeting);
console.log(2, hello);

//=======================================================================


//                              functions

//to return more than one value make a list or an object. 

function da(a,b){
    let arr = [];
    arr.push(a+b);
    arr.push(a*b);
    return arr;
}

let ab = da(2,4);
console.log(da[1], da[2]);

//                      hosting functions
p();
let a = p();
console.log(p);

function p(){
    return 5;
}
let b = p();
console.log(b);



dogPrint();

function dogPrint(){
    console.log("woof")
}

dogPrint();

//                      if you declare a function within a variable you can only call that function after the variable



//console.log(gretting(`Judah`));                
                                     //uncomment to see error

//returns Cannot access 'gretting' before initialization

const gretting = function (names){
    return (`Hello ${names}`);
};

console.log(gretting(`Judah`));

//with arrow functions

const greet = (namess) => `Hello ${namess}`;

console.log(greet(`Mor`));


//we want to use const because we don't want anyone to overrite our code like they could with let or var

//=======================================================================



//                          Nested Functions

function red(){
    function blue(){
        return `blue`;
    } return blue;
}

let color = red();

console.log(color()); 
                        //return blue
console.log(red());
                        //return function blue

                 
                        
//=======================================================================


//                  CURRYING

const yak = (t) => {
    return (e) =>  {
        return t + e;
    };
};
console.log(yak(5)(6)); //returns 11

//=======================================================================


//                  COMPOSE

const Sam2 = (num) => (num*2); 
                                //first function -a
const Sam = (num) => (num+1);
                                //second function -b


const samCompose = (a,b) => (c) => a(b(c)); //put together


let resultk = (Sam2, Sam) => (c=6) => Sam2(Sam(c));
console.log(resultk);


//not working why?



//obj sytnax to be familiar with 

let email = `lillycolak@ymail.com`;
let namess = `lilly`;

let userr = {
    email,
    namess
}

console.log(userr);

//              USE FOR-IN TO ITERATE OBJECT

for (let x in userr){
    console.log(x, userr[x]);
}

