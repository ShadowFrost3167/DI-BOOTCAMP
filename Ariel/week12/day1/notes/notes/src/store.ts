import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, UseDispatch, useDispatch, useSelector } from "react-redux";
import taskReducer from "./features/tasks/slice";


const combineReducersApp = combineReducers({taskReducer});

const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
});

export type StoreStateType = ReturnType<typeof store.getState>;
export type StoreDispatchType = typeof store.dispatch;

export const useAppDispatch: () => StoreDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StoreStateType> = useSelector

export default store;