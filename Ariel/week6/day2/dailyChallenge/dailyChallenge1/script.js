// Instructions
// Using this array:

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.

const gamername = [];
gameInfo.forEach(gamer=>{
    gamername.push(gamer.username + `!`);
}); console.log(gamername);


// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]


// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :


// create array with filter to get the usernames with scores >5
function winners(arr){
    return arr.filter(player => player.score >5).map(player=>player.username);

} 


// do the same as above gamername
console.log(winners(gameInfo));

// const winners = ["becky", "susy"]


// 3. Find and display the total score of the users. (Hint: The total score is 71)



//create new array of just the scores. used the same method that i did above for the names + !

const scorez = [];
gameInfo.forEach(score=>{
    scorez.push(score.score);
}); console.log(scorez);

//use sumOf to get total sum of the scores

function teamScore(num){
    let sum = 0;
    num.forEach(num =>{
        sum += num;
    }); return sum;
} console.log(teamScore(scorez));