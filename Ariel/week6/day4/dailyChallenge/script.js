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