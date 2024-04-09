//                      THEN AND CATCH TO RECIEVE DATA FROM API

fetch("https://pokeapi.co/api/v2/pokemon/haunter")
    //SECOND
    .then(response => {
        if (!response.ok){
            throw new Error(`couldn't execute, DNE`, error);
        }
        return response.json();
    })
    //FIRST
    // .then(response => response.json())
    .then(data=> console.log(data.name))
    .catch(error => console.log(error));


    //                  USE ASYNC AWAIT

// fetchData();

//create async function with try and catch block
    async function fetchData(){  
         
        try{
            //link the text boxes id to a var w/in try block `.value` gets value from the box
            const pokemonQuery = document.getElementById("professorOak").value.toLowerCase();
            const pokeSearch = document.getElementById("professorOak");
            pokeSearch.addEventListener('keydown', (event)=>{
                if(event.key === 'Enter'){

                    console.log('enter pressed');
                    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonQuery}`)
                        .then(response=> response.json())
                        .then(data=>console.log(data))
                        .catch(error=> console.error(`error in fetch`, error));
                }
            })


            //store fetched API IN var w/in try block
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonQuery}`);         
             //↑↑↑  link the value from the search box to the fetch request

            //check if response is ok if not throw error
            if(!response.ok){
                throw new Error (`resource not found!`);
            }

            //create a constant for data if source is ok
            const data1 = await response.json();
        //↑↑↑ the response.json returns a promise that is why we use await↑↑↑
           
        console.log(data1);
                                    //uncomment to see the json data

            //create a var to store sprite image

            const pokeSprite = data1.sprites.front_default;
            const imgElement = document.getElementById("pokeSprite");

            imgElement.src = pokeSprite;
            imgElement.style.display = "block";
            
            



        }
        catch(error){                               //catch errors and display them
             console.error(error);
        }
    }




    //              AJAX

    // 1 event occurs on webpage

    //  2 xmlhttp request() 

    //  3 send request to webserver

    //  4 server processes request 

    //  5 server sends response back 

    //  6 response read by javascript 

    //7 page update is performed by javascript


    

