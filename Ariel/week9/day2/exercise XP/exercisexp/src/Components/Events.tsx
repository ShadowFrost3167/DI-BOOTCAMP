import React, {useState} from "react";

export default function Events(){

    const clickMe = () => {
        alert("I was clicked!");
    
    
    const ComponentMine = () =>{
        const [inputValue, setInputValue] = useState("")
    };

    const handleKeyDown = (event: { key: string; target: { value: any; }; }) => {
        if (event.key==="Enter"){
            alert(event.target.value);
        }

    };

    const handleChange = (event: { target: { value: any; }; }) =>{
        setInputValue(event.target.value)
    }

        return(
        <>
        <button onClick={clickMe}>You're pushing me?!??</button>
        <input 
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="You talking to me?!"
        />
        </>
            

        );

    }
    return(

    )
}

export default ComponentMine;

function setInputValue(value: any) {
    throw new Error("Function not implemented.");
}
