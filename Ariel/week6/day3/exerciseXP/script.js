// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

//destructures person object

 console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//will return in console "I am John Doe from Vancouver Canada 49.2827, -123.1207"
//AFTER LOGGING - it also states lat and long to specify which is which in the console.

//==========================================================================

// 🌟 Exercise 2: Display Student Info
// Instructions
function displayStudentInfo(objUser){
    const {first, last} = objUser;

    console.log(`Your full name is ${first} ${last}`);
}

 displayStudentInfo({first: 'Elie', last:'Schoppik'});



// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'


//==========================================================================



// 🌟 Exercise 3: User & Id
// Instructions
// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: 73 ], [ 'user2', 92833 ], [ 'u[ [ 'user1', 182ser3', 90315 ] ]
// FYI : The number is their ID number.


for (const idNum in users){
    if (users.hasOwnProperty(idNum)){
        users[idNum]*=2;
    }
}                                           //multiply idNum *2

let entries = Object.entries(users); 
                                        //make into array

console.log(entries);

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

//==========================================================================


// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

//will store a new person object with the name John in memory. will log that he's an object. 


//==========================================================================


// 🌟 Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}; //THIS ONE


//==========================================================================


// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}

// if([2] === [2] && {} === {}){
     
// } 
// console.log([2] === [2] );

//FALSE BECAUSE THEY ARE 2 SEPERATE OBJECTS/ARRAYS BEING COMPARED TO EACH OTHER

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 

const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)
// first 2 logs will output 4 because of pass by reference. the last object will be 5 because it wasn't passed by reference.


// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal{
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal{
    constructor(name, type, color, sound){
        super(`Mamal`, name, type, color);
        this.sound = sound;
    }
    noise(){
        return `${this.sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
    setType(type){
        this.type = type;
    }
}
// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

let farmerCow = new Mamal(`Lilly`, `cow`, `brown and white`, `Moooooo`);
farmerCow.setType('farmer cow');

console.log(farmerCow.noise());
