
// Exercise 1 : Promise.All()


// Instructions

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

// Use the Promise.all that will accept the 3 promises below.
// The method should accept an array of promises and return an array of resolved values.

Promise.all([promise1, promise2, promise3])
    .then((values)=>{
        console.log(values);
    })
    .catch((error)=>{
        return (`promise all takes all promises in an array and executes all of them regardless if they resolve or reject all will be executed`, error);
    });

// If any of the promises are rejected, the function should catch them.
// Explain in a comment how Promise.all work and why you receive this output.


// // expected output: Array [3, 42, "foo"]



//====================================================================



// Exercise 2 : Analyse Promise.All()
// Instructions
// Analyse the code below - what will be the output ?

// function timesTwoAsync(x) {
//   return new Promise(resolve => resolve(x * 2));
// }


// //    ANSWER:    timesTwoAsync taxes x and makes a promise to resolve by multiplying x by 2


// const arr = [1, 2, 3];
// const promiseArr = arr.map(timesTwoAsync);

// //   ANSWER:    arr is the array and arr.map makes a copy to be multiplied by 2 as per the function being passed this new cloned and multiplied array is stored to the variable promiseArr




// Promise.all(promiseArr)
//   .then(result => {
//     console.log(result);
    
//   });

//      ANSWER:      i think that the array will be multiplied  after the promiseArr is passed since it runs the function  since it fulfills all promises so you'd get [2,4,6]
