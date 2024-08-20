import React, { useState } from 'react'
import style from "./calculator.module.css"

const ControlledCalculator = () => {
    let[first,setFirst]=useState('')
    let[second,setSecond]=useState('')
    let[result,setResult]=useState('')

    let getFirst=(e)=>{
        setFirst(e.target.value)
    }
    let getSecond=(e)=>{
        setSecond(e.target.value)
    }
    let add=()=>{
        setResult(parseFloat(first) + parseFloat(second))
    }
    let sub=()=>{
        setResult(parseFloat(first) - parseFloat(second))
    }
    let mul=()=>{
        setResult(parseFloat(first) * parseFloat(second))
    }
    let div=()=>{
        setResult(parseFloat(first) / parseFloat(second))
    }
  return (
    <div className={style.main_box}>
        <h1><u>CONTROLLED CALCULATOR</u></h1>
        <div className={style.inside}>
        <label htmlFor="">Enter first number</label> <br />
        <input type="number" onChange={getFirst} value={first} /> <br />
        <label htmlFor="">Enter second number</label> <br />
        <input type="number" onChange={getSecond} value={second} /> <br /><br />
        <div className={style.but}>
        <button onClick={add}>Add</button>
        <button onClick={sub}>sub</button>
        <button onClick={mul}>mul</button>
        <button onClick={div}>div</button>
        </div>
        <h1>The result is : {result}</h1><br />
        
        </div>
    </div>
  )
}

export default ControlledCalculator