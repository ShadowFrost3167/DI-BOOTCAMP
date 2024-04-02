const x = (a) => (b) => {
    return a +b;
};

console.log(x(4)(5)); 
                    //return 9


        // nested arrow above 
        //nested beloww

function g(a){
    function h(b){
        return a+b;
    }
    return h;
}

console.log(g(3)(4));
                    //return 7



//              EXERCISES

//create a function that returns one digit by adding all digits of a number

let numberInput = "456"//prompt("give me a number! any mumber!");

// //get the number as an array.

inputNumber = numberInput.split(" ");

function calcDigit(num){
    let arr =String(num).split("");
    let ret = 0;
    for(let i in arr){
        ret = ret + Number(arr[i]);
    }
    if (ret < 10){
        return ret; 
    }
    return calcDigit(ret); 
}

console.log(calcDigit(numberInput));

//how to do it with reduce and ternary

function calculator(num) {
    let digit = String(num).split("").reduce((total, num) => total + Number(num), 0);
    return (digit < 10 ? digit : calculator(digit));
}
console.log(calculator(numberInput));

//===========================================================================


//                  OBJECT METHODS

let user = {
    name: `Judah`,
    email: `Saj@gmail.com`,
    age: 34,
    address: {
        city: `baltimore`,
    },
};


//object destructuring
const {name, email, age, address:{city}} = user;
console.log(name, age ,email, city);
                                //returns judah, saj..@gmail.com, 34, baltimore


function getUserInfo(obj){
    return obj.email + " " + obj.name + " " + obj.age;
} console.log(getUserInfo(user));
//returns saj..@gmail.com, judah, 34

function gettUserInfo({name, email, age}){
    return email + " " + name + " " + age;
} console.log(gettUserInfo(user));
//returns saj..@gmail.com, judah, 34

//===========================================================================

//how to loop? 
    //WITH FOR

for(let x in user){
    console.log(x, user[x]);
}; // prints each key and value in a seperate line in console.


//if you convert -> array then you can use array methods

let keys = Object.keys(user);
console.log(keys);
                                    //ojbect keys -> array

let values = Object.values(user);
console.log(values);                
                                    //object values -> array


let entries = Object.entries(user);
console.log(entries);               
                                    //object entries -> array

//entries returns an array of arrays. you can get the value by:

entries.forEach((item)=>{
    console.log(item);
})
                                //returns 4 arrays separately each with the key in [0] and val in [1].

entries.forEach(([key, value])=>{
    console.log(key, value);
});                            
                                     //returns the key and value pair on individual line



let arr = [
    [
        `name`, `Judah`
    ],
    [`email`, `Saj@gmail.com`],
    [`age`, 34]
];

let obj = Object.fromEntries(arr);
console.log(obj);

//===========================================================================

//  not correct
 let user1 = user;

 //correct with cloning

 let user2 = {...user};


 //                     JSON

 let userJson = JSON.stringify(user);
 console.log(user);
 console.log(userJson);


 //convert back to obj

let user3 = JSON.parse(userJson);
console.log(user3);


//===========================================================================


//                    spreading

//remember user2

user2.name = `Mor`;

console.log(user2);
console.log(user);

let user4 = {...user, name: `Nathan`, status: `single`}
console.log(user4);
                    //cloning and adding key-val pair



//===========================================================================

//this refers to window object globally, w/in object it refers to obj
//                                      it's the main object in the browser

console.log(this.document);

//==================================================================

//                          CLASSES



class Animal{
    constructor(type, name){
        this.type = type;
        this.name = name;
    }
    getType(){
        return this.type;
    }
    setName(name){
        this.name = name;
    }
    getTypeAndName(){
        return this.type + " " + this.name;
    }
};

let myLion = new Animal();
let urLion = new Animal();


//extends mean you inherit all methods and data
class Dog extends Animal{
    constructor(name){
        super(`Dog`, name); //very important to include super when extending
        
    }
}

let dog1 = new Dog(`Shadow`);
// dog1.setType(`Husky`);
console.log(dog1.getType());

class Cat extends Animal{
    constructor(name){
        super (`Cat`, name);
    }
    setType(param){
        this.type = param;
    }
}

let cat1 = new Cat(`Sakura`);
cat1.setType(`calico`);
console.log(cat1);
//==================================================================


// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.


class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watTitle(){
        return this.title;
    }
    whoUpload(){
        return this.uploader;
    }
    whenTime(){
        return this.time;
    }
};



let HarryPotter = new Video("Harry Potter and the Prisoner of Azkaban", "Warner Bros", 50000) //making new instance of a Video.


let spiritedAway = new Video(`Spirited Away`, `Hayao Miyazaki`, 7500) //make new instance with different values

let dvdStore = [HarryPotter, spiritedAway];


//push the method into the object
Video.prototype.watch = function (){
    console.log(`${this.uploader} watched ${this.time} seconds of ${this.title}!`)
};

//mistake:
// Video.forEach(video=>{
//     dvdStore.push([dvd.title, dvd.uploader, dvd.time]);
// }); console.log(dvdStore);


dvdStore.forEach(video=>{
    video.watch();
});                             //apply watch method to all videos in dvd

// let discountedDVD = [{title, uploader, time}]


let discountDVDs = [
    {title:`Grave of the Fireflies`, uploader:`Hayao Miyazaki`, time: 5400},
     {title:`The Producers`,uploader: `Gene Wilder`, time: 5280},
     {title:`Dr Strangelove or How I Learned to Love the Bomb`, uploader:`Peter Sellers`, time: 5401},
     {title:`God on Trial`, uploader:`Jewey McJewson`, time: 5454},
     {title:`Spiderman: Into the Spiderverse`, uploader:`Miles Morales`, time: 6000},
];

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// // Think of the best data structure to save this information within the array.
// // Bonus: Loop through the array to instantiate those instances.

let discountedDVDs = [];

discountDVDs.forEach((item)=>{
    let {title, uploader, time} = item;
    discountedDVDs.push(new Video (title, uploader, time));
})

console.log(discountedDVDs);