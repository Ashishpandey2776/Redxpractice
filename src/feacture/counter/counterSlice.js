import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incremetByAmt:(state,action)=>{
            state.value +=action.payload
        },
    },
})

export const {increment,decrement,incremetByAmt}=counterSlice.actions
export default counterSlice.reducer