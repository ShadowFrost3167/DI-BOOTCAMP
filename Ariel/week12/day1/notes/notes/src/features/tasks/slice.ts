import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";

import Listem from "../../../Components/Listem"
import ListItem from "../../../Components/Listem";




//export type ActiveState= "all" | "active" | "completed";
export enum EnumActiveState{
    All,
    Active,
    Completed,
}

export type InitialState = {
    tasks: Listem[];
    filter: EnumActiveState;
};

const initialState: InitialState = {
    tasks: [],
    filter: EnumActiveState.All,
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducer: {
        add: (state: { tasks: Listem[]; }, action: PayloadAction<string>)=>{
            state.tasks.push(new ListItem(nanoid(), action.payload);
            state.tasks.push(task.serialize() as ListItem);
        );}

        remove: (state, action: 
            PayloadAction<string>)=>{
                state.tasks.filter(new ListItem(nanoid(), action.payoad);
            state.tasks = state.tasks.filter((task: { id: any; })=> task.id !== action.payload);
        );
    }
        check: (state: { tasks: any[]; }, action: PayloadAction<string>) => {
            const task = state.tasks.find((task)=> task.id === action.payload);
            if (task){
                task.checked = !task.checked;
            }
        }


        )
            

    }, //add, remove, check, clear, active
   
})


export const {add, remove, check, clear, active} = taskSlice.action;
export default taskSlice.reducer;



//notes:

{Object.keys(EnumActiveState)
    .filter((key) => isNaN(Number(key)))
    .map((key) => {
      const enumKey = EnumActiveState[key as keyof typeof EnumActiveState];
      return (
        <button key={key} onClick={() => setFilter(enumKey)}>
          {key}
        </button>
      );
    })}