// 🌟 Exercise 1 : List Of People
// Instructions
const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.shift();
console.log(people);
// Write code to replace “James” to “Jason”.
people.pop();
people.push("Jason");
console.log(people);
// Write code to add your name to the end of the people array.
people.push("Ariel");
console.log(people);
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
let maryIndex = people.indexOf("Mary");
console.log(maryIndex);
// Write code to make a copy of the people array using the slice method.
let peopleCopy = people.slice();
peopleCopy.shift();
peopleCopy.pop();
console.log(peopleCopy);
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?
let Foo = people.indexOf("Foo");
console.log(Foo);
//i don't know why it gives -1?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let lastArray = people[people.length -1];
console.log(lastArray);

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; )
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.