// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.


class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watTitle(){
        return this.title;
    }
    whoUpload(){
        return this.uploader;
    }
    whenTime(){
        return this.time;
    }
};



let HarryPotter = new Video("Harry Potter and the Prisoner of Azkaban", "Warner Bros", 50000) //making new instance of a Video.


let spiritedAway = new Video(`Spirited Away`, `Hayao Miyazaki`, 7500) //make new instance with different values

let dvdStore = [HarryPotter, spiritedAway];


//push the method into the object
Video.prototype.watch = function (){
    console.log(`${this.uploader} watched ${this.time} seconds of ${this.title}!`)
};

//mistake:
// Video.forEach(video=>{
//     dvdStore.push([dvd.title, dvd.uploader, dvd.time]);
// }); console.log(dvdStore);


dvdStore.forEach(video=>{
    video.watch();
});                             //apply watch method to all videos in dvd

// let discountedDVD = [{title, uploader, time}]


let discountDVDs = [
    {title:`Grave of the Fireflies`, uploader:`Hayao Miyazaki`, time: 5400},
     {title:`The Producers`,uploader: `Gene Wilder`, time: 5280},
     {title:`Dr Strangelove or How I Learned to Love the Bomb`, uploader:`Peter Sellers`, time: 5401},
     {title:`God on Trial`, uploader:`Jewey McJewson`, time: 5454},
     {title:`Spiderman: Into the Spiderverse`, uploader:`Miles Morales`, time: 6000},
];

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// // Think of the best data structure to save this information within the array.
// // Bonus: Loop through the array to instantiate those instances.

let discountedDVDs = [];

discountDVDs.forEach((item)=>{
    let {title, uploader, time} = item;
    discountedDVDs.push(new Video (title, uploader, time));
})

console.log(discountedDVDs);