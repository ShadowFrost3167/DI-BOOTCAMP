import React from "react";
import user from "./App"

class UserFavoriteAnimals extends Component{
    render (){
        const {favAnimals} = this.props;
        return(<><ul>
        {favAnimals.map((animal,index)=>{
            <li key={index}>{animal}</li>
        })}
        </ul>
        </>)

    }   
};

export default UserFavoriteAnimals;

// part 2 of exercise question 2