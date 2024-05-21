// Part 1 : Quote Generator
// Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 2 ect…




var arrObj = [
    {id: 1,
    author: `John Twain`,
    quote: 'blahblahblah'},
    {id: 2,
        author: `John Bwain`,
        quote: 'slahblahblah'},
    {id: 3,
        author: `John Cwain`,
        quote: 'zlahblahblah'},
];

var z = -1;

// console.log(arrObj[z]);
// Populate the array with a few quotes that you like.

// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.

let button =document.getElementById('butts');


let containDiv = document.getElementsByTagName('div');


function quoteGenerate(){
    var randomIndex;
    do{
        randomIndex = Math.floor(Math.random()*arrObj.length);
    } while (randomIndex === z);
    z = randomIndex;
    return arrObj[randomIndex];
}


button.addEventListener("click", function(){
    console.log(quoteGenerate());

});


// Part 2 : Add Buttons
// In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

// In the HTML file, under the displayed quote, create a few more buttons:
// A button that gives the number of character inside each quote (space included)
// A button that gives the number of character inside each quote (space NOT included)
// A button that gives the number of words in each quote
// A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.

// Part 3 : Filter Form
// Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.

// Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.