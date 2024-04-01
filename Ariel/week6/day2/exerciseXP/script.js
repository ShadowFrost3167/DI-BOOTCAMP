// 🌟 Exercise 1 : Colors
// Instructions
// Using this array :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
for(i=0; i < colors.length; i++){
    console.log(`My #${i+1} choice is ${colors[i]}`);
}
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
let violetThere = colors.find((color)=> {
    return color === `Violet`;
});

// above is the method to find if the color is violet and below is the if else statement to console.log.

if (violetThere = true){
    console.log(`Yeah`);
}else{console.log(`No...`)};
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.


//==============================================================


// 🌟 Exercise 2 : Colors #2
// Instructions
// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

//using destructuring with the ...arr to change the order of the indexes in the array ordinal
let [a,b,c,d] = [...ordinal];
let newOrdinals = [];

for (let element of [b,c,d,a]){
    newOrdinals.push(element);
}
for(i=0; i < colors.length; i++){
    let ordinalNow =  i<3 ? newOrdinals[i] : newOrdinals[newOrdinals.length-1];
    console.log(`My ${i+1}${ordinalNow} choice is ${colors[i]}`)};



// Hint : Use the array methods taught in class and ternary operator.


//==============================================================



// Exercise 3 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

//SHOULD RETURN: bread, carrot, potato, chicken, apple, orange

// ------2------
// const country = "USA";
// console.log([...country]);

// //SHOULD RETURN U S A

// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

//returned undefined. not sure why. asked chatgpt it returns 2 undefined like: undefined, undefined. because when you use ... it creates an array of what's behind it and what's behind it is an array with 2 empty indexes. 


// 🌟 Exercise 4 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]


// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

function fullStackStudent(arr){
    return arr.filter(user => user.role=== `Full Stack Resident`);
} const fullStackers = fullStackStudent(users);
console.log(fullStackers);
// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

const lastNamez = fullStackers.map(user => `${user.lastName}`);
console.log(lastNamez);



// 🌟 Exercise 5 : Star Wars
// Instructions
// Using this array 
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const introValue = 0;
const intro = epic.reduce((acc, word)=> [...acc, word]);
console.log(intro.join(" "));

// 🌟 Exercise 6 : Employees #2
// Instructions
// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
function passedClass(arr){
    return arr.filter(student  => student.isPassed === true);
} 
let ascending = passedClass(students);
console.log(ascending);
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

ascending.forEach(student=> {
    console.log(`Good Job ${student.name} you passed the course in ${student.course}`);
})