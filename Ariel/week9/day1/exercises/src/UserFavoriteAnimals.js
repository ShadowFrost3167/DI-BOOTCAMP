import React, {Component} from "react";

class UserFavoriteAnimals extends Component{

    render(){

        const {data} = this.props;
        return(
            <div>
               {data.map((item, index)=>(
                <ul key={index}><li>{item}</li></ul>
               ))}
            </div>
        );
    }
}

export default UserFavoriteAnimals;