// for loop review
let arr = [`Sam`, `Judah`, `Mor`];

for (let index  = 0; index < arr.length; index++){
    const element = arr[index];
    console.log(element, index);
}
for (let x in arr){
    console.log(x,arr[x]);
}
for (let x of arr){
    console.log(x);
}


//=======================================================================

//                          FOR EACH

let pets = ["Sakura", "Haunter", "Kaya"]

pets.forEach((item, index)=>{
    console.log(`item=>`, item, index);

    arr[index]=item + `@gmail.com`
}); console.log(pets)


// SOME

let result = pets.some((item)=> {
    return item === `Haunter`;
}); console.log("result=>", result);

// EVERY

let result2 = pets.every((item)=>{
    return item !== "Ha";
}); console.log("result2=>", result2);


//===========================================================================================

//FOR EACH WITH ARRAY

number = [1,2,3,4,5];

function multiply(number){
    number.forEach((num, i, arr)=>{
        arr[i] = num *2;
    });
    return number;

} console.log(`multiply`,multiply(number));

// MAP

//when you use map you can integrate an array and return a new array .map

const doubledNumbers = number.map(number => number*2);
console.log(`doubledNumber`,doubledNumbers);

let user = [
    {userid: 1, 
    name: `John`,
    email: `jj@gmail.com`},
    {userid: 2, 
    name: `Mary`,
    email: `mm@gmail.com`},
    {userid: 3,
    name: `Judah`,
    email: `Saj@gmail.com`},
    {userid: 4, name: `Henry`, email: `henry@gmail.com`}
];


function render(arr){
    let html = arr.map(item=>{
        return `<div>
            <h2>${item.userid}</h2> <h4>${item.name} ${item.email}</h4>
        </div>`;
    }); console.log(html);
    document.getElementById('root').innerHTML = html.join('')
}
render(user);


//==========================================================================

//           exercise

let overThree = [0,1,1,2,3,5,8];

function moreThree(arr){
    return arr.filter(number=> number>3? true: false);
} console.log(moreThree(overThree));
//                                    returns 5,8


// with .filter ^^^^^^^^^^^^^^^^^^^^^^^^^^^

// without .filter ¥↓↓↓↓↓↓↓↓

function filter(arr){
    let newArr = [];
    for(item of arr){
        if(item > 3) newArr.push(item);
    } 
    return newArr;
}
console.log(filter(overThree));
//                               returns 5,8

//===================================================================

const ifUserO = [
    { id: 1, name: "John", email: "jjj@gmail.com" },
    { id: 2, name: "Mor", email: "mmm@gmail.com" },
    { id: 3, name: "Marry", email: "marry@gmail.com" },
    { id: 4, name: "Or", email: "or@gmail.com" },
  ];

  const ifO = ifUserO.filter(item =>{
    return item.name.toLowerCase().includes(`o`)
});
    console.log(ifO);

//===================================================================

let oneSeventeen = [2,5,10,100];

function sumOfArray(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}

console.log(sumOfArray(oneSeventeen));

//      WITH REDUCE

function reduce(arr, num =0){
    let sum =num;
    arr.forEach(item => {
        sum += item;
    }); return sum;
} console.log(reduce([2,5,10,100]));


//              ↑↑↑↑↑↑↑↑before ↑↑↑↑↑↑↑↑  

//               ↓↓↓↓↓AFTER ↓↓↓↓↓↓↓↓↓↓
let summs = oneSeventeen.reduce((total, item)=>{
    return total + item;
},0); console.log(`sum=>`, summs);

//===================================================================

// FIND

let userfound = ifUserO.find((item)=>{
    return item.id ===3;
});

console.log(userfound);

// FIND INDEX

let indx = ifUserO.findIndex(item=>{
    return item.id === 2;
});
console.log(indx);

//==================================================================
// Birthday Cake Candles
// This array are Birthday Cake Candles
// You can blow only the tallest candles
 let birthdayCake = [2,8,4,4,8,1,8]
// birthdayCakeCandles function will return

let birthdayCakeCandles = ()=>{
    let tallest= Math.max(...birthdayCake);
    let count = 0;
    birthdayCake.forEach(number=>{
        if (number === tallest){
            count++;
        }
    }); return count;


}; console.log(birthdayCakeCandles());

// how many candles you can blow

//3

function birthdayCandles(arr){
    let maxNum = Math.max(...arr);
    let filtered = arr.filter((item)=>{
        return item === maxNum;
    }); return filtered.length;
} console.log(birthdayCandles(birthdayCake));

//===================================================================

//DESTRUCTURING

let examplessz = [1,2,3,4,5,6,7,8];

// let a = examplessz[0];
// let b = examplessz[1];
// let c = examplessz[2];

// console.log(a,b,c);

let [b, a, ...rest] = examplessz;
console.log(b, a, rest);

// CLONE

function x(...arr){
    console.log(arr);
}
x(examplessz); //clones the array that's passed in x function