

import React from 'react';


//welcome class component 

class Welcome extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      name: "sweetie"
    }
  }
  render(){
    return <h1>Hello {this.props.name}</h1>;
  }
}







export default Welcome;


