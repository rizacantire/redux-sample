import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {increment,decrement} from "../redux/counter/counterSlice.js"
export default function Counter() {
    const countValue = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();

  return (
    <div>{countValue}
    <br />
    <button onClick={()=>dispatch(increment())}>Arttır</button>
    <button  onClick={()=>dispatch(decrement())}>Azalt</button></div>
  )
}
