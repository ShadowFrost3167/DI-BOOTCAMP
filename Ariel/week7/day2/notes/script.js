// FETCH

//a fetch returns  a promise

fetch(url) // passing the url of the API as a parameter
.then(function() {
    // Handle the data from the API
})
.catch(function() {
    // Handle any errors
});

response.text() //– read the response and return as text,
response.json()// – parse the response as JSON,
response.formData() //– return the response as FormData object,


{/* <body>
    <section>
        <p id="info-art"></p>
    </section>
    <script src="script.js"></script>
</body> */}


console.log("Starting ...")

const displayArtwork = (art) => {
    const {title, artist_title : artist} = art.data
    const paragraph = document.querySelector("#info-art");
    paragraph.textContent = `The painting is named 
    ${title} by the artist ${artist}`;
}

const displayError = (error) => {
    const paragraph = document.querySelector("#info-art");
    paragraph.textContent = `We have a problem ${error}`;
}

const getArtwork = () => {
    console.log("Working ...")
    fetch("https://api.artic.edu/api/v1/artworks/14572")
        .then((response) => {
            console.log(response);
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error("Wrong artwork")
            }
        })
        .then((obj) => {
            displayArtwork(obj);
        })
        .catch((error)  => {
            displayError(error);
        });
    console.log("Work Done ...")
}



getArtwork()


console.log("Starting ...")

const data = {
    title: "Article on Javascript",
    body: "This is an article presenting the new features of Javascript", 
    userId:1
}

const objBody = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
}

const addArticle1 = () => {
    console.log("Working ...")
    fetch("https://jsonplaceholder.typicode.com/posts", objBody)
        .then((response) => {
            console.log(response);
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error("Wrong post")
            }
        })
        .then((obj) => {
            console.log(obj);
        })
        .catch((error)  => {
            console.log(error);
        });
    console.log("Work Done ...")
}

addArticle()


// We receive

// Starting ...
// Working ...
// Work Done ...
// Response {type: 'cors', 
// url: 'https://jsonplaceholder.typicode.com/posts', 
// redirected: false, status: 201, ok: true, …}

// body: (...)
// bodyUsed: true
// headers: Headers {}
// ok: true
// redirected: false
// status: 201
// statusText: ""
// type: "cors"
// url: "https://jsonplaceholder.typicode.com/posts"
// {
//   "title": "Article on Javascript",
//   "body": "This is an article presenting the new features of Javascript",
//   "userId": 1,
//   "id": 101
// }




//      post request with form data

{/* <body>
    <form>
        <label for="title-article">The title of the article</label>
        <input type="text" name="title" id="title-article">
        <label for="content-article">The content of the article</label>
        <input type="text" name="body" id="content-article">
        <label for="user-article">The user that wrote the article</label>
        <input type="text" name="userId" id="user-article">
        <button>Submit the article</button>
    </form>
    <script src="script.js"></script>
</body> */}

console.log("Starting ...")

const addArticle = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const objBody = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }

    console.log("Working ...")
    fetch("https://jsonplaceholder.typicode.com/posts", objBody)
        .then((response) => {
            console.log(response);
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error("Wrong post")
            }
        })
        .then((obj) => {
            console.log(obj);
        })
        .catch((error)  => {
            console.log(error);
        });
    console.log("Work Done ...")
}

const formArticle = document.querySelector("form");
formArticle.addEventListener("submit", addArticle);


// We receive

// Starting ...
// Working ...
// Work Done ...
// Response {type: 'cors', 
// url: 'https://jsonplaceholder.typicode.com/posts', 
// redirected: false, status: 201, ok: true, …}

// body: (...)
// bodyUsed: true
// headers: Headers {}
// ok: true
// redirected: false
// status: 201
// statusText: ""
// type: "cors"
// url: "https://jsonplaceholder.typicode.com/posts"
// {
//   "title": "Article on Javascript",
//   "body": "This is an article presenting the new features of Javascript",
//   "userId": 1,
//   "id": 101
// }



//                  Async Syntax

// async function <func_name>(param1,param2, ect ..) {
//    statements
// }

// async function name(){}

// const name = async function(){}

// const name = async () => {}





//  no return defined || no value => resolving promise =  Promise.Resolve()

async function foo() {
    return;
 }
 
 foo()
 
 
 //                     …is equivalent to:
 
 function foo() {
    return Promise.resolve("Hey")
 }
 
 foo()




// return defined with value => resolving promise + value = Promise.Resolve(value)

async function foo(x) {
    return;
 }
 
 foo(x)



// error => rejected promised + thrown error = Promise.Reject(error) 

async function foo() {
    throw new Error("Something went wrong")
 }
 
 foo()



//  Example : async function returns a Promise

async function hello() {
    return 'Hello';
}

const b = hello();

console.log(b)


// You get:

`Promise
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: "Hello"`




// Example : async function with then keyword

async function hello() {
    return 'Hello';
}

const b1 = hello();

b1.then((result) => console.log(result))


// You get:

`Hello
Example : with arrow function

const hello = async () => 'Hello'

const b = hello();

b.then((result) => console.log(result))`




// Difference Between Promises And Async/Await - Demonstration Using Examples




// Example With Promises

let goodGrades1 = 93;

let endSemester1 = new Promise((resolve, reject) => {
    if (goodGrades1 > 90) {
        resolve("Computer");
    } else if (goodGrades1 => 80 && goodGrades1 <= 89) {
        resolve("Phone");
    } else {
        reject("I won't get the gift");
    }
})

const checkRequest1 = () => {
    console.log('test 2');
    endSemester1
        .then(value =>
            console.log("I got an amazing gift : A ", value));
}

console.log('test 1');
checkRequest1();
console.log('test 3');


// What do you think will be the order or the console.log?
`
You get:

test 1
test 2
test 3
I got an amazing gift : A  Computer

`
// Same Example With Async/Await
let goodGrades = 93;

let endSemester = new Promise((resolve, reject) => {
    if (goodGrades > 90) {
        resolve("Computer");
    } else if (goodGrades => 80 && goodGrades <= 89) {
        resolve("Phone");
    } else {
        reject("I won't get the gift");
    }
})

const checkRequest = async () => {
    console.log('test 2');
    let gift = await endSemester;
    console.log(`I got an amazing gift : A ${gift}`);
}

console.log('test 1');
checkRequest();
console.log('test 3');
`You get:

test 1
test 2
test 3
I got an amazing gift : A  Computer`


//      WARNING: async/await doesn’t play nicely with .forEach() loops
//      async/await plays nicely with for , for of and while loops





// Imagine you're playing as the Knight in the game Hollow Knight. You enter a dark cave filled with treasures, but you can't see anything at first. You light a torch and wait for a few seconds for your eyes to adjust before you can see the treasures clearly.

// Here's how it translates to code:

// javascript
// Copy code
function waitForEyesToAdjust() { // Function to wait for eyes to adjust
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Now you can see clearly!'); // Resolving after 2 seconds
        }, 2000);
    });
}

async function exploreCave() { // Function to explore the cave
    console.log('Entering the dark cave...'); // Entering the cave
    let treasure = await waitForEyesToAdjust(); // Waiting for eyes to adjust
    console.log(treasure); // Seeing the treasure clearly
}

exploreCave(); // Start exploring the cave
`Explanation:

Entering the Cave: You start by entering a dark cave, just like when you begin a new journey in Hollow Knight.

Waiting for Eyes to Adjust: Inside the cave, it's dark, so you need to wait for your eyes to adjust to the darkness. This waiting time is represented by waitForEyesToAdjust() function, which returns a promise that resolves after 2 seconds.

Seeing the Treasure Clearly: Once your eyes adjust, you can see the treasures clearly. This is represented by the treasure variable getting the resolved value from waitForEyesToAdjust().

Exploring the Cave: The exploreCave() function orchestrates this process of entering the cave, waiting for your eyes to adjust, and then seeing the treasure.

So, in simpler terms, it's like you're the Knight in Hollow Knight, entering a dark cave, waiting for a moment, and then being able to see the treasures clearly once your eyes adjust to the darkness.`