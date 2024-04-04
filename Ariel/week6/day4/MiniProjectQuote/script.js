let arrobj = [
    {id: `0`, author: `Hayao Miyazaki`, quote: `The creation of a single world comes from a huge number of fragments and chaos.`},
    {id: `1`, author: `Akira Toriyama`, quote: `On the path of the budo one does not strive for victory over an opponent. One strive to avoid defeat by one's own self.`},
    {id: `2`, author: `Groucho Marx`, quote: `Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.`},
    {id: `3`, author: `Woody Allen`, quote: `I'm not afraid of death; I just don't want to be there when it happens.`},
    {id: `4`, author: `Lawrence Cane`, quote: `I'm in the army now? Really! I don't have enough time to write a decent letter.`},
    {id: `5`, author: `David Ben-Gurion`, quote: `Without moral and intellectual independence, there is no anchor for national independence`},
    {id: `6`, author: `Albert Einstein`, quote: `The pursuit of knowledge for its own sake, an almost fanatical love of justice and the desire for personal independence—these are the features of the Jewish tradition which make me thank my stars that I belong to it`},
    {id: `7`, author: `Stanley Kubrick`, quote: `Gentlemen, you can't fight in here! This is the War Room!`},
    {id: `8`, author: `Hannah Arendt`, quote: `The sad truth is that most evil is done by people who never make up their minds to be good or evil`},
    {id: `9`, author: `Albus Dumbledore`, quote: `It does not do to dwell on dreams and forget to live.`},
    {id: `10`, author: `Sirius Black`, quote: `You're not a bad person. You're a very good person, who bad things have happened to. Besides, the world isn't split into good people and Death Eaters. We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are.`},
    {id: `11`, author: `Severus Snape`, quote: `The Dark Arts are many, varied, ever-changing, and eternal. Fighting them is like fighting a many-headed monster, which, each time a neck is severed, sprouts a head even fiercer and cleverer than before.`},
    {id: `12`, author: `Master Roshi`, quote: `But, you will not go in there with hopes of winning the tournament the first time you compete. To do so would be arrogant! And arrogance is for fools, not warriors! So you will enter the tournament with the sole purpose of improving your fighting skills`},
    {id: `13`, author: `Shūsaku Endō`, quote: `Every weakness contains within itself a strength. Sin is not what it is usually thought to be; it is not to steal and tell lies. Sin is for one man to walk brutally over the life of another and to be quite oblivious of the wounds he has left behind.`},
    {id: `14`, author: `Joseph Mason`, quote: `You're only as old as you feel`},

];



function quoteMaker(){
    var randomInd = Math.floor(Math.random()*arrobj.length);
    var randomQuote = arrobj[randomInd];

    var quoteShow = document.getElementById('generateButton');
    quoteShow.innerHTML=
    `
    <blockquote>
    <p>${randomQuote.quote}</p>
    <footer>${randomQuote.author}</footer>
    </blockquote>
    `;

    
}

let buttonGenerateQuote = document.getElementById("generateButton").addEventListener("click", quoteMaker);


