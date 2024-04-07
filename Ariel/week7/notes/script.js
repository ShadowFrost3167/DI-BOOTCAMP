//                      CALLBACK HELL

// function getPan() {
//     console.log("Getting brownie pan");
//     return "Pan";
// }

// function getIngredients() {
//     console.log(" eggs, milk, sugar");
//     return ["eggs", "milk", "sugar"];
// }

// function bakeBrownies(pan, ingredients) {
//     console.log(`Mixing ingredients in ${pan} and baking brownies...`);
//     return "Delicious brownies!";
// }

// makeBrownies(function(result) {
//     console.log(result);
// });

// function makeBrownies(callback) {
//     setTimeout(() => {
//         const pan = getPan();
//         const ingredients = getIngredients();
//         const brownies = bakeBrownies(pan, ingredients);
//         callback(brownies);
//     }, 2000);
// }


// //harry potter example:


// function prepareForTask(callback) {
//     setTimeout(() => {
//         const wand = getWand();
//         const cloak = getCloak();
//         const potion = brewPotion();
//         callback(wand, cloak, potion);
//     }, 2000);
// }

// function getWand() {
//     console.log("Ollivander: Here's your wand, Harry.");
//     return "Wand";
// }

// function getCloak() {
//     console.log("Moody: Take this invisibility cloak, Harry. It'll keep you safe.");
//     return "Invisibility Cloak";
// }

// function brewPotion() {
//     console.log("Hermione: I've prepared a Polyjuice Potion for you, Harry.");
//     return "Polyjuice Potion";
// }

// prepareForTask(function(wand, cloak, potion) {
//     console.log(`Harry: Ready for the task with my ${wand}, ${cloak}, and ${potion}!`);
// });


//====================================================================




//                          PROMISES





//  promise => pending => fullfilled -> resolved || fulfilled -> rejected


//res and rej can be any parameters just remember the first is resolved nad second is rejected

let harryHelp = new Promise((res, rej)=>{
    setTimeout(()=>{
        rej(`Harry had help`);
    }, 5000);
    
});

console.log(harryHelp);

harryHelp
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});



//  coinflip example:

let coinFlip = () => {
    const coin = Math.floor(Math.random()*2);
    return coin < 2 ? (coin === 0 ? 'head' : 'tails') : "side";
};

// console.log(coinFlip());  //returns head and tails randomly

const flipperTime = new Promise((res, rej)=>{
    setTimeout(()=>{
        const sideFell = coinFlip();
        if (sideFell === `head`){
            res (sideFell);
        } else {
            rej(`rejected flip`);
        }
    }, 2000);
});
console.log(`Before`);
flipperTime
    .then((result)=>{
        console.log(result);
    })
    .catch((e)=> {
        console.log(e);
    })
console.log(`after`);


// hollow knight example

const exploreForgottenCrossroads = () => {
    return new Promise((resolve, reject) => {
        console.log("The Knight ventures into the Forgotten Crossroads...");
        // Simulate exploring the area with a delay
        setTimeout(() => {
            const hasDiscoveredPath = Math.random() < 0.5; // 50% chance of finding a new path
            if (hasDiscoveredPath) {
                resolve("The Knight discovers a new path!");
            } else {
                reject("The Knight encounters a dead end.");
            }
        }, 3000); // Simulated exploration time
    });
};



// Simulate encountering a challenging enemy in Hollow Knight
const faceChallengingEnemy = () => {
    return new Promise((resolve, reject) => {
        console.log("The Knight encounters a challenging enemy...");
        // Simulate facing the enemy with a delay
        setTimeout(() => {
            const isVictorious = Math.random() < 0.7; // 70% chance of victory
            if (isVictorious) {
                resolve("The Knight emerges victorious!");
            } else {
                reject("The Knight has been defeated.");
            }
        }, 2000); // Simulated battle time
    });
};

// Promises chain representing the Knight's journey
exploreForgottenCrossroads()
    .then((result) => {
        console.log(result);
        return faceChallengingEnemy(); // After discovering a path, face a challenging enemy
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

//============================================================


//exercises




//  * 1. getDataFromServer function return a Promise with data as
//  * Array of objects from server 
  const getDataFromServer = () => {
    return new Promise((res, rej)=>{
        const arr = [
            { username: "aaa", email: "aaa@gmail.com" },
            { username: "bbb", email: "bbb@gmail.com" },
            { username: "ccc", email: "ccc@gmail.com" },
   ];
   setTimeout(()=>{
    // res(arr);
    rej(`oops`);
   }, 2000
   );
            
        
    });
  };
//  * Simulate successful completion after 2 seconds
//  *
//  * 2. Call this function and log the data as an Array datatype
//  *

getDataFromServer()
  .then((data)=>{
    console.log(data);
  })
//  * 3. Simulate an error
//  * 
  .catch((error)=>{
    console.log(error);
  })
//  * 4. return to step 2, and create render function that will display
// the users on the page
const renderr = () => {

}



function noInternet(){
    war? `true`:`false`;
}