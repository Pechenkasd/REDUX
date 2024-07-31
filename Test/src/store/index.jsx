import { configureStore } from "@reduxjs/toolkit";
import registrReduser from './RegistrSlice'

const store = configureStore({
    reducer:{
        registrReduser
    }
})
export default store