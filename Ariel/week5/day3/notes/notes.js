//name is a keyword in JS so you must use a variable when referencing someones name ex userName


//creates a function called getEmail() that takes the username and birthdate and concatenates them with @gmail.com then it returns what the new concatenation is.

function getEmail(user_name, birthday=1){
    let email = `${user_name.toLowerCase()+birthday}@gmail.com`
    return email
    
} console.log(getEmail('Ariel'));

//                  CAPITALIZE AND LOWERCASE

//in js we have a method .toLowerCase()  it changes the string to lower case letters. see above
let eyeColor = "brown";
let userName = "Shadow";
let userAge = "29";

function userMoreInfo(userName, userAge){
    console.log("My name is " + `${userName}`+" I have "+`${eyeColor}`+" sparkly eyes and my i am " + `${userAge}`+ " years old.")
}

userMoreInfo("Ariel", 29);

function favColour(){
    eyeColor = 'blue';
    console.log("My name is " + `${userName}`+" I have "+`${eyeColor}`+" sparkly eyes and my i am " + `${userAge}`+ " years old.")
} favColour("Ari", 30) //can set a var locally?



//              DIFFERENCE BETWEEN LET AND VAR

//let cannot be reassinged but it also isn't global. var can be reassinged and it's global. it can get messy so most people stick to let nowadays

//what's the point of const then?
//const is global



//                             Exceptions

// console.log(notDefinedVarible);
// console.log('continue the code');

//^^^^^^^^^^^^^^^^^^^UNCOMMENT TO VIEW ERROR ^^^^^^^^^^^^^^^^
let undefinedVariable = "hello"

try {
    console.log(undefinedVariable)
} catch (error) {
    console.log(error.stack)    //returns where error is exactly what step it's broken at. 
    
    console.log(error.message)  //returns what the specific problem is

    console.log(error.name) //error.name shows me the type of error that is outputting during the catch for the try to test that function/code
} 
console.log('continue the code') // while undefinedVariable is undefined it logs the type of error and then console logs continue the code



//      FINALLY IN PYTHON MEANS THE LAST ORDER IN THE FUNCTION

try {
    console.log(undefined)
} catch (error) {
    console.log(error.stack)
    console.log(error.message)
} finally {
    console.log("That string was undefined, it's lovely weather out. I always happen because I'm the finally argument in a try-catch test")
}

//                              THROW OPERATOR

function divid(a,b){

    result = a/b;
    return result
} 

console.log(divid(15,3))

//caution there is a kwown problem with dividng by 0 

// function divisionVar(x,y){
//     if (y === 0){
//         throw new Error(`Can't divide by zero`)
//     } else{
//     result = x/y
//     return result}
// } divisionVar(13,0)
                            //UNCOMMENT TO VIEW THE THROW ERROR


//       HOW TO CONNECT JS CSS AND HTML TOGETHER WITH DOM

//web browser creates a copy of your files and displays it, any changes done online in the DOM presented through the browser won't affect the actual root files on your computer.



