// Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.
console.log(building.numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3.
console.log("There are "+building.numberOfAptByFloor.firstFloor +" on the first floor and there are "+ building.numberOfAptByFloor.thirdFloor + " floors on the third floor.")
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1] + " has " + building.numberOfRoomsAndRent.dan[0] + " rooms in his apartment.");
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
function sum(a, b){
    return a + b;
}
if (sum(building.numberOfRoomsAndRent.sarah[1], building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] += 1200;
}
console.log(building);


// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
let family = {
    name: "Ariel",
    age: 29,
    pet: "cat", 
    musician: true

}
// Using a for in loop, console.log the keys of the object.
for (let key in family){
    console.log(key);
}
// Using a for in loop, console.log the values of the object.
for (let key in family){
    console.log(family[key]);
}

// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let space = '';

for (let key in details){
    if (key === 'my'){
        space += 'my ' + details[key] + ' ';
    } if (key === 'is'){
        space += 'is ' + details[key]+ ' ';
    } if (key === 'the'){
        space += 'the '+details[key]+' ';
    }
    else{
        space += details[key] + ' ';
    }
} 
console.log(space.trim());

// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
let secretSociety = '';

names.sort();

for (i = 0; i < names.length; i ++){
    secretSociety += String(names[i][0]) + ' ';
}

console.log(secretSociety.trim());

// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”