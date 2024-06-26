// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:


document.getElementById("formzz").addEventListener('submit', function(event){
    event.preventDefault();

    let first = document.querySelector('input[name="firstName"]').value;
    let second = document.querySelector('input[name="lastName"]').value;

    var data = {
        first: first,
        second: second
    };

    var jsonData = JSON.stringify(data);

    var resultDiv=document.getElementById('weSubmit');
    resultDiv.textContent = jsonData;
})

// Instructions
// Part 1 : Quote Generator
// Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 2 ect…

// Populate the array with a few quotes that you like.

// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.


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