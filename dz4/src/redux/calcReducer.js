import { createSlice } from "@reduxjs/toolkit"

const initialState  = {
    one: null,
    two:null,
    result:0
}


 const counterSlice = createSlice({
    name:'counterSliceCalc',
    initialState ,
    reducers:{
        oneInput:(state, action) => {
            state.one = action.payload
        },
        twoInput:(state, action) => {
            state.two = action.payload
        },
        increment:(state ) => {
            state.result = state.one + state.two
        },
        decrement:(state) => {
            state.result = state.one - state.two

        },
        multiplication:(state) => {
            state.result = state.one * state.two
        },
        divisions:(state) => {
             state.result = state.one / state.two
        }
    }
 })
export const {increment,decrement,multiplication,divisions, oneInput,twoInput} = counterSlice.actions
export default counterSlice.reducer