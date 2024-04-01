// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
let planets =["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Pluto"];
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
const colours = ["Grey", "Brown", "Blue", "Red", "Yellow", "Teal", "Cyan", "Indigo"];


const moons = {
    Mercury: {moons: 0, color: "Grey"},
    Venus: {moons: 0, color: "Brown"},
    Earth: {moons: 1, color: "Blue"},
    Mars: {moons: 2, color: "Red"},
    Jupiter: {moons: 79, color: "Yellow"},
    Uranus: {moons: 27, color: "Teal"},
    Neptune: {moons: 14, color: "Cyan"},
    Pluto: {moons: 5, color: "Indigo"},
}


// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
let container = document.createElement("div");
container.classList.add("planetContainer");

const moonContainer = document.createElement("div");
moonContainer.classList.add("moonContainer");

planets.forEach((planet, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = planet;
    itemDiv.classList.add("planet");
    itemDiv.style.backgroundColor = colours[index]; //link colours to planets indexes
    container.appendChild(itemDiv);

    const moonData = moons[planet];
    if (moonData){
        const planetMoonContainer = document.createElement("div");
        planetMoonContainer.classList.add("planetMoonContainer");
        moonContainer.appendChild(planetMoonContainer);
        
        for (let i =0; i< moonData.moons; i++){
            const moonDiv = document.createElement("div");
            moonDiv.innerHTML = "moon";
            moonDiv.classList.add("moon");
            moonDiv.style.backgroundColor = moonData.color;
            moonContainer.appendChild(moonDiv);

            const planetRect = itemDiv.getBoundingClientRect();
            moonDiv.style.position = "absolute";
            moonDiv.style.left = planetRect.left + planetRect.width + moonOffsetX + "px"; 
            moonDiv.style.top = planetRect.top + "px";
            moonOffsetX += 40;
        }
    }
});

document.body.appendChild(container);
document.body.appendChild(moonContainer)
//         let planets =["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Pluto"];
// // Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// const colours = ["Grey", "Brown", "Blue", "Red", "Yellow", "Teal", "Cyan", "Indigo"];


// const moons = {
//     Mercury: {moons: 0, color: "Grey"},
//     Venus: {moons: 0, color: "Brown"},
//     Earth: {moons: 1, color: "Blue"},
//     Mars: {moons: 2, color: "Red"},
//     Jupiter: {moons: 79, color: "Yellow"},
//     Uranus: {moons: 27, color: "Teal"},
//     Neptune: {moons: 14, color: "Cyan"},
//     Pluto: {moons: 5, color: "Indigo"},
// }


// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// let container = document.createElement("div");
// container.classList.add("planetContainer");

// planets.forEach((planet, index) => {
//     const itemDiv = document.createElement("div");
//     itemDiv.innerHTML = planet;
//     itemDiv.classList.add("planet");
//     itemDiv.style.backgroundColor = colours[index]; //link colours to planets indexes
//     container.appendChild(itemDiv);

//     const moonData = moons[planet];
// if (moonData){
//     for (let i =0; i< moonData.moons; i++){
//         const moonDiv = document.createElement("div");
//         moonDiv.innerHTML = "moon";
//         moonDiv.classList.add("moon");
//         moonDiv.style.backgroundColor = moonData.color;
//         itemDiv.appendChild(moonDiv);

//         const planetRect = itemDiv.getBoundingClientRect();
//         const moonOffset = 40;
//         moonDiv.style.left = planetRect.left + planetRect.width + moonOffset + "px";
//         moonDiv.style.top = planetRect.top + planetRect.height /2-15 + "px";
//     }
// }
// });




// Finally append each div to the <section> in the HTML (presented below).
// let sektion = document.querySelector('body > section');
// sektion.appendChild(container);
// // Bonus: Do the same process to create the moons.



// document.body.appendChild(container);
// document.body.appendChild(moonKontainer);
//     }
// }
// });



// document.body.appendChild(container);
// // Finally append each div to the <section> in the HTML (presented below).
// let sektion = document.querySelector('body > section');
// sektion.appendChild(container);
// // Bonus: Do the same process to create the moons.



// document.body.appendChild(container);
// document.body.appendChild(moonKontainer);





// moons.forEach(planet => {
//     const {name, color, moons} = planet;
//     const planetIndex = planets.indexOf(name);
//     if (planetIndex !== -1){

//     const planetDiv = container.querySelectorAll(".planet")[planetIndex];    
//         for (let i =1; i <moons; i++){ //started i at 1 because if there are 0 moons i don't want the moon to display
//             const moonDiv = document.createElement("div");
//             moonDiv.innerHTML = name;
//             moonDiv.classList.add("moon");
//             moonDiv.style.backgroundColor = color;
//             moonKontainer.appendChild(moonDiv);
//     }}}
// );

// document.body.appendChild(moonKontainer);
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of obj