import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
};

const registrSlice = createSlice({
    name:'regisr',
    initialState,
    reducers:{
        addContact: (state, action) => {
            const { name, password } = action.payload
            const userExists = state.some(user => user.name === name)
                if (!userExists) {
                state.push({ name, password });
            } else {
                throw new Error('Пользователь уже зарегистрирован')
            }
        }
    }
})

export const {addContact} = registrSlice.actions;
export default registrSlice.reducer