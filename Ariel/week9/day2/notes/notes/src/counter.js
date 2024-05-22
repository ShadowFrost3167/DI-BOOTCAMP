import React from "react";
import ReactDOM from "react-dom";


//counter simple below 
class Counter extends React. Component{
    constructor(props){
      super(props); 
      this. state = {count: 0};
    }
    //increments count based on props.set
    incrementCount = () =>{
      this. setState((state, props)=>{
        return {count: state.count + props.step};
      });
    
  };
  
  //reset count to 0
  
  resetCount = () =>{
    this.setState({count : 0});
  };
  
  render(){
    return(
      <div>
        <p>Current  Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>+ {this.props.step}</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }}
  
  ReactDOM.render(<Counter step={1}/>, document. getElementById("root"));
  
  export default Counter;
  
  