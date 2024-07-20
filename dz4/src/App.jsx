import React, { useState } from 'react'
import { useForm } from "react-hook-form"

import { useDispatch, useSelector } from 'react-redux'
import { decrement, divisions, increment, multiplication, oneInput, twoInput } from './redux/calcReducer'


const  componentName = () => {
 
  const dispatch = useDispatch()
  const {result} = useSelector(state => state.count)
  
  const oneInp = (e) => {
    dispatch(oneInput(Number(e.target.value)))
  } 
  const twoInp = (e) => {
        dispatch(twoInput(Number(e.target.value)))

  }
  const plus = () => {
    dispatch(increment())
  }
  const minus = () => {
    dispatch(decrement())
  }
  const multi =() => {
    dispatch(multiplication())
  }
  const divis =() => {
    dispatch(divisions())
  }



  return (
    <div>
      <h2>calulator</h2>
        <div>
        <input
          onChange={oneInp}
          type="number"
          placeholder='oneNumber'
        />
        <input
          onChange={twoInp}
         type="number"
          placeholder='twoNumber'
  
        />
      </div>
      <span>{result}</span>
      <div className="main_calc">
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={multi}>*</button>
        <button onClick={divis}>/</button>
      </div>
    </div>
  )
}

export default componentName
