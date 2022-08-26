import * as types from "./action.type";
import { reducer } from './../../../redux_intro/src/Redux/AuthReducer/reducer';

const initState ={
    tasks:[],
    isLoading:false,
    isError:false
}


const reducer = (state = initState,{type,payload}) =>{
    
    switch(type){

        default:return state
    }
}