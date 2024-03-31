                //IIFE arrow functions

((functionn) => {
    console.log(functionn);
})("function executed")

                //ternary operators
                //takes 3 operands - condition?, expressionExecuteIfTrue:, expression if false
                // <condition> ? <expression> : <expression>

 function isHero(isHarryPotter){
    return (isHarryPotter? "hero": "neville");
 }

 console.log(isHero(true));

 console.log(isHero(false));



            //  Create a function to check the year given by the user

            // If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

 var yearGiven = prompt("give me a year below!");

 function age(yearGiven){
    return (yearGiven>2000? `You are in the 21st century`: `You live in the Middle Age`);
 }

 console.log(age(yearGiven));


                            //arrow functions

    const sakura = (pet, age) => {
        console.log(pet, age);
    }

    sakura("cat", 6)


                                //making object with . notation

        let currentPet = new Object();

        currentPet.name = 'sakura';
        currentPet.species = `cat`;
        currentPet.age = 5; 
        currentPet.status = `only`;

        console.log(pet); //to view object


                                //using [bracket] notation to make object

        let oldPet = new Object();

        oldPet[`name`] = `Sammy`;
        oldPet[`species`] = `dog`;
        oldPet[`age`] = 13;
        oldPet[`status`] = `deceased`;

        console.log(oldPet) //to view object


        //how to clone object

        let obj = {a: `a`, b: `b`};
        let clone = Object.assign({}, obj);
        //or
        let clone2 = {...obj};

        obj.b = 2;
        console.log(obj); //returns modified object with 2 = b
        console.log(clone); //returns og object a -a b-b 
        console.log(clone2); //same as clone

        //deep cloning instead of shadow cloning like above only gets one layer of object but deep cloning gets all the layers of ojbect ex:

        let sonGohan = {
            colour: `purple`,
            attack: `Masenko`,
            weakness: {
                fear: `Chi-Chi`
            }
        };

        let superClone = JSON.parse(JSON.stringify(sonGohan));
        let clonee = {...sonGohan};
        sonGohan.weakness.fear = `Piccalos Dissapointment`;

        console.log(sonGohan); //returns the altered
        console.log(clonee); //returns altered
        console.log(superClone); //returns origional fully intact :)

