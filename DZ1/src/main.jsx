import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {createStore} from "redux";
import counterReducer from './redux/Reduser.jsx'



const store = createStore(counterReducer)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
)
