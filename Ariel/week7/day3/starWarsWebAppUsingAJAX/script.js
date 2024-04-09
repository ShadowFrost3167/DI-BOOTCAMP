async function fetchData(){
    const info = document.getElementById("info");
    info.style.display = "none";

    document.getElementById("loading").style.display = "block";

    try{
        let randomInt = 0;
        while(randomInt === 0){randomInt = Math.floor(Math.random()*10);}



        

        const response = await fetch(`https://www.swapi.tech/api/people/${randomInt}`)

        if (!response.ok){
            throw new Error (`Oh no! that person is not traceable!`);
            
        }

        const data = await response.json();
        
        
        const {name, height, gender, birth_year, homeworld} = data.result.properties;

        const worldResponse = await fetch(homeworld)
            if (!worldResponse.ok){
                throw new Error (`planet not found`);
            }

            const worldInfo = await worldResponse.json();

            const worldName =  worldInfo.result.properties.name;


        



        
       

        console.log(name, height, gender, birth_year, worldName);



        setTimeout(()=>{
            document.getElementById("loading").style.display = "none";
            info.style.display = "block";
         },1000);


        setTimeout(()=>{    
            info.innerHTML = `<h1>${name}</h1> <br> Height: ${height} <br> Gender: ${gender} <br> Date of Birth: ${birth_year} <br> Home World: ${worldName}`;

        },1000);

        



         

        //connected to function below
        const buttonz = document.getElementById("button");
        buttonz.addEventListener('click', (event)=>{
            fetch(`https://www.swapi.tech/api/people/${randomInt}`)
                .then(response => response.json())
                .catch(error => console.error(error));
        })

        
        

        



    }
    catch(error){
        console.error(error);
    }
}

// fetchData();

