// Instructions
// Using this object :

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = (fruits)=>{
    fruits.forEach(fruit => {
        console.log(fruit);
    });
} 
displayGroceries(groceries.fruits);

// Create another arrow function named cloneGroceries.

// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)

const cloneGroceries = ()=>{
    let user = client;
    user = `Betty`;

    let shopping = groceries;
    shopping.totalPrice = 35;

    shopping.other.paid = false;

    return user;

}
console.log(cloneGroceries());


// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ? 

// ANSWER - because it's passed by reference and it's not been cloned.

// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?

//haven't cloned it, i'm changing it directly by changin the reference

// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

//also same reason. changing by reference.

// Invoke the cloneGroceries function.