type StrOrNum = string | Number | boolean;
type StrOrNumArray = (string | number)[];

type Student = {
    name: String;
    age: Number;
    isGood: StrOrNum;
};


// TYPE ALIASES (LIKE SETTING A VAR FOR A BUNCH OF TYPES) ↑↑↑↑

// TYPE LITERAL ↓↓↓↓↓↓


//          --want to define names but only those names--

type Name = 'Judah' | 'Sam' | 'Mor';

let username: Name = "Judah";

type status = 'success' | 'error';

let userStatus: status = 'success';


//function return

//define the variable types within parenthesis

const addUser = (a: number ,b: number| string): number => {
    //type guard ↓↓↓↓↓
    if (typeof b === "string"){
        return -1;
    }
    //type guard ↑↑↑↑↑
    return a+b;
}

// console.log(addUser(2,'3'));

//function overload

function  add  (a: number, b: number): number;
function add  (a: string, b: string): string;
function add(a: any, b: any): any{
    return a+b;
}

// console.log(add('s', 'd'));
// console.log(add(1,2));

//input types must match?


//not return value, if you don't want to change the type you're devloping then you can use void. 

const greet = (name: string): void =>{
    console.log(`Hello ${name}`);
    
}

//type function

type addFunc = (a: number, b: number)=> number;

const addition: addFunc = (a,b)=>{
    return a+b;
}

const addVAT: addFunc =  (a,b)=>{
    return a+b*.07;
}

//optional parameter

const addOptional = (a: number, b?: number): number =>{
    
    return a+(b||0);
};

//default parameters

const addDefault = (a: number, b: number = 0): number =>{
    
    return a+b;
};


//rest parameter

const addRest = (a: number, ...rest: number[]): number =>{
    return rest.reduce((acc, val)=> acc+val, 0);
};

console.log(addRest(100,20,40,5,6,4,3));

// 100 [20,40,5,6,4,3]

//returns array of the inputs


//never type

const throwError = (message: string): never =>{
    throw new Error(message);
};



//assertion or type casting

//aliases type to understand assertion:

type One = string;

type Two = string | number;

type Three = `hello`;



let a: One = `hello`;
let b = a as Two;
let d = <One>"world";

let e = <string | number >1;

//casting is uesful when we talk about DOM elements

const img = document.querySelector('img')! //as HTMLImageElement;
//only use if you're sure element exists. ↑↑↑↑↑


if (img) {
    img.src = 'https://www.google.com';
}

//img.src = 'https://www.google.com';


//exercise: make the commented item ok for typescript.

const year = document.getElementById("year") as HTMLSpanElement
const thisYear:string =new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear




//Classes

class User{
    public name: string; //access name anywhere
    private age: number; //access age only within user class
    protected active: boolean; //access it inside a class, subclass, or function

    constructor(name: string, age: number, active: boolean){
        this.name = name;
        this.age = age;
        this.active = active;
    }
    getAge(){
        return `My age is ${this.age}`;
    }
}

let user = new User("Sam", 30, true);
console.log(user.getAge());

//classic way ↑↑↑↑


class Students extends User{
    

    constructor(name: string, age: number, active: boolean){
        super(name, age, active);
    }
    protected getActivity(){
        return `My age is ${this.active}`
    }
}

//cannot access age but an access name from student.

console.log(user.name);
//console.log(user.age);                    //   ←←←uncomment to see problem

class Userz{
   
    constructor(public name: string, private age: number, protected active: boolean){
        
    }
    getAge(){
        return `My age is ${this.age}`;
    }
    getActivity(){
        return  `My activity is ${this.active}`;
    }
}



//interface of user

interface Ooser{
    // name: string;
    // age: number;
    // active: boolean;
}

class Ooser implements Ooser{

    public name: string;
    protected age: number;
    private active: boolean;

    constructor(
        name: string,
        age: number,
        active: boolean
        ){
            this.name = name;
            this.age = age;
            this.active = active;
        }
        get gage(){
            return this.age;
        }
        set sage(age: number){
            this.age = age;
        }
        get gactive(){
            return this.active;
        }
        set sactive(active: boolean){
            this.active = active;
        }
}