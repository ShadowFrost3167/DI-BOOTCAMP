//to store variable for last displayed quote
let lastQuota = -1;

//store likes in array so that browser remembers which quotes are liked and not.
let likedQuotes = [];

// In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 2 ect…



//object with form values like below

//check if DOM loaded first because eventlisteners were having issues



document.addEventListener("DOMContentLoaded", function(){
    console.log("documentloaded");

    //sets random number for index = to array length
function getRandomNumber(max){
    return Math.floor(Math.random()*max);

}

// Populate the array with a few quotes that you like.
let arrobj = [
    {id: `0`, author: `Hayao Miyazaki`, quote: `The creation of a single world comes from a huge number of fragments and chaos.`, like: 0},
    {id: `1`, author: `Akira Toriyama`, quote: `On the path of the budo one does not strive for victory over an opponent. One strive to avoid defeat by one's own self.`, like: 0},
    {id: `2`, author: `Groucho Marx`, quote: `Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.`, like: 0},
    {id: `3`, author: `Woody Allen`, quote: `I'm not afraid of death; I just don't want to be there when it happens.`, like: 0},
    {id: `4`, author: `Lawrence Cane`, quote: `I'm in the army now? Really! I don't have enough time to write a decent letter.`, like: 0},
    {id: `5`, author: `David Ben-Gurion`, quote: `Without moral and intellectual independence, there is no anchor for national independence`, like: 0},
    {id: `6`, author: `Albert Einstein`, quote: `The pursuit of knowledge for its own sake, an almost fanatical love of justice and the desire for personal independence—these are the features of the Jewish tradition which make me thank my stars that I belong to it`, like: 0},
    {id: `7`, author: `Stanley Kubrick`, quote: `Gentlemen, you can't fight in here! This is the War Room!`, like: 0},
    {id: `8`, author: `Hannah Arendt`, quote: `The sad truth is that most evil is done by people who never make up their minds to be good or evil`, like: 0},
    {id: `9`, author: `Albus Dumbledore`, quote: `It does not do to dwell on dreams and forget to live.`, like: 0},
    {id: `10`, author: `Sirius Black`, quote: `You're not a bad person. You're a very good person, who bad things have happened to. Besides, the world isn't split into good people and Death Eaters. We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are.`, like: 0},
    {id: `11`, author: `Severus Snape`, quote: `The Dark Arts are many, varied, ever-changing, and eternal. Fighting them is like fighting a many-headed monster, which, each time a neck is severed, sprouts a head even fiercer and cleverer than before.`, like: 0},
    {id: `12`, author: `Master Roshi`, quote: `But, you will not go in there with hopes of winning the tournament the first time you compete. To do so would be arrogant! And arrogance is for fools, not warriors! So you will enter the tournament with the sole purpose of improving your fighting skills`, like: 0},
    {id: `13`, author: `Shūsaku Endō`, quote: `Every weakness contains within itself a strength. Sin is not what it is usually thought to be; it is not to steal and tell lies. Sin is for one man to walk brutally over the life of another and to be quite oblivious of the wounds he has left behind.`, like: 0},
    {id: `14`, author: `Joseph Mason`, quote: `You're only as old as you feel`, like: 0},

];

//event listener structure:
//                 element.addEventListener(event, function, useCapture);
                                                
                                                //useCapture is optional


//add event listener for like button and function to make likes increase when pressed
const likeNum = document.getElementById("like");

if (likeNum){
    likeNum.addEventListener("click", function(){
        if(arrobj[lastQuota].like === 0){
            arrobj[lastQuota].like++;

        // const randomNumber = getRandomNumber(arrobj.length);
        // const quote = arrobj[randomNumber];
        console.log(arrobj);
        console.log("like added");
        updateButtonColor(arrobj[lastQuota]);
        // handleLikeClick(arrobj[lastQuota].id, arrobj);
        // document.getElementById("generateButton").style.backgroundColor = "pink";

        } 
        
        
});
};


// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
let buttonGenerateQuote = document.getElementById("generateButton").addEventListener("click", quoteMaker);



let formSubmitted = document.getElementById("forms").addEventListener("submit", function(event){
    event.preventDefault();


    //get the values for the author and quote boxes of the forms and what is inputted into them.
var author = document.getElementById("author").value;
var quote = document.getElementById("quote").value;

    //pushes the inputs from the form into the array arrobj
    arrobj.push({"author": author, "quote": quote});

//clears boxes after quote is submitted (researched - chatGPT)
document.getElementById("author").value = "";
document.getElementById("quote").value = "";




});


// Part 3 : Filter Form
// Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.

// Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.



//function to store the likes in array

// function handleLikeClick(quoteId, arrobj) {
//     const quote = arrobj.find(item => item.id === quoteId);
//     if (quote){
//         quote.like++;
//         if(!likedQuotes.includes(quoteId)){
//             likedQuotes.push(quoteId);
//         }
        
//         console.log(likedQuotes);
//         // updateButtonColor();
        
//     }
//     // quote ? (quote.like++, console.log("Liked Quotes Array:", likedQuotes), updateButtonColor()) : null;
// }

function isCurrentLiked(quoteId){
    return likedQuotes.includes(quoteId);
}

function updateButtonColor(obj){

    const generateButton = document.getElementById("generateButton");
    // const currentQuote = arrobj[lastQuota];
    console.log(`like`,obj.like);
    
    // const isCurrentLiked = likedQuotes.includes(lastQuota.toString());
    generateButton.style.backgroundColor = obj.like > 0 ? "pink" : "";
}





document.getElementById("numCharachterSpace").addEventListener("click", function() {
    // Loop through each quote in the array
    arrobj.forEach(function(quote) {
        // Get the number of characters including whitespaces
        const currentQuoteIndex = lastQuota;

        if(lastQuota >=0 && lastQuota < arrobj.length){

        const currentQuote = arrobj[lastQuota];
        var charCountWithSpace = currentQuote.quote.length;

        var quoteCountWhiteButton = document.getElementById("numCharachterSpace");
        quoteCountWhiteButton.innerHTML= `${charCountWithSpace}`;



            console.log(`Quote ID: ${quote.id}, Character Count (with space): ${charCountWithSpace}`);
        }else{
            console.log(`no quote`);
        }
        
    });
    //attach countcharacters function to button click evebt
    let buttonCount = document.getElementById("numCharachterSpace");
    if (buttonCount){
        buttonCount.addEventListener("click", charCountWithSpace);
    };
});


//btn for characters inside quote no whitespace

document.getElementById("numCharacterNoSpace").addEventListener("click", function(){
    arrobj.forEach(function(quote){
        const currentQuoteIndex = lastQuota;
        const currentQuote = arrobj[lastQuota];
        var charCountWithSpace = currentQuote.quote.length;

        if(lastQuota >=0 && lastQuota < arrobj.length){

            const currentQuote = arrobj[lastQuota].quote;
            const charCountWithoutSpace = charCountWithSpace.replace(/\s/g, '');
    
            var quoteCountnoWhiteButton = document.getElementById("numCharachterNoSpace");
            quoteCountnoWhiteButton.innerHTML= `${charCountWithoutSpace}`;
    
    
    
                console.log(`Quote ID: ${quote.id}, Character Count (with space): ${charCountWithoutSpace}`);
            }else{
                console.log(`no quote`);
            }
            
        });
        //attach countcharacters function to button click evebt
        let buttonCount = document.getElementById("numCharachterNoSpace");
        if (buttonCount){
            buttonCount.addEventListener("click", charCountWithoutSpace);
        };
    });


function displayQuote(quote){
    currentQuoteId = quote.id;
}


//makes the inputs in the form get added to arrobj
function quoteMaker(){
    var randomInd;
    // Important: When clicking on the button, make sure you don’t display the same quote twice in a row.
    do{
        randomInd = Math.floor(Math.random()*arrobj.length);}
        while(randomInd === lastQuota);
    var randomQuote = arrobj[randomInd];
    
    console.log(randomQuote);
    updateButtonColor(randomQuote);

    //if loop stops empty string from being displayed during clicking on generate quote button

    if(randomQuote.quote.trim() !==""){
        var quoteShow = document.getElementById('generateButton');
    quoteShow.innerHTML=
    `
    <blockquote>
    <p>${randomQuote.quote}</p>
    <footer>${randomQuote.author}</footer>
    </blockquote>
    `;
    lastQuota = randomInd;}

    

    
}

function characterCountWhiteReset(){
        quoteCountWhiteButton.innerHTML= `Number of Characters + Whitespace`;
}

});