import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incremetByAmt } from './counterSlice.js'


export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [number,setnumber]=useState(1);

  const handleChange=(e)=>{
    setnumber(parseInt(e.target.value));
  }

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <input type="number" onChange={(e)=>{handleChange(e)}} />
         <button
          aria-label="changeByValue"
          onClick={() => dispatch(incremetByAmt(number))}
        >
          changeByValue
        </button>
      </div>
    </div>
  )
}