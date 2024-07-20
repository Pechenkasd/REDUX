import { configureStore } from '@reduxjs/toolkit'
import calcReducer from '../redux/calcReducer'
 const store = configureStore({
  reducer: {
    count: calcReducer
  },
})
export default store