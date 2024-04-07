// 🌟 Exercise 1 : Comparison

// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// Test:

const compareToTen = (num) => {
    return new Promise((res, rej) => {
        res(num<=10);
        rej(num>10);
    });
};

compareToTen(15)
    .then((res) => {
        console.log(`resolved:`, res);
    })
    .catch((rej) => {
        console.log(`rejected:`, rej);
    });

compareToTen(5)
.then((res) => {
    console.log(`resolved:`, res);
})
.catch((rej) => {
    console.log(`rejected:`, rej);
});

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))



//===========================================================



// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

const haku = () =>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res(`Haku was succesful!`);
        },4000);
    });
};

haku()
    .then((res)=>{
        console.log(res);
    });

//===========================================================




// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”


const silverTrio = Promise.resolve(3);

silverTrio.then((num) => {
    console.log(num);
});


const kingBoo = Promise.reject(`Booo!`);

kingBoo.catch((error) => {
    console.log(error);
});


