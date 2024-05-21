import React from "react";

class BuggyCounter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        };
    }
    handleClick = () =>{
        this.setState(prevState =>({
            counter: prevState.counter++
        }));
    }
    render(){

        if (counter > 5) {
            throw new Error('Crashed... TOO HIGH!');
            console.log(Error);
        }

        return (<>
            <div>
                <button onClick = {this.handleClick}>
                    Counter
                </button>
                <p>Counter: {this.state.counter}</p>
            </div>
        </>);
    }
}

export default BuggyCounter;