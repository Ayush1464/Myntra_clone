import React, { useRef } from 'react'
import style from "./calculator.module.css"

const UncontrolledCalculator = () => {

  const firstRef = useRef(null)
  const secondRef = useRef(null)
  const resultRef = useRef(null)
  

    const add = () => {
    const first = parseFloat(firstRef.current.value)
    const second = parseFloat(secondRef.current.value)
   const  result=first+second
    resultRef.current.value=result

    
  }
  
  const sub = () => {
    const first = parseFloat(firstRef.current.value)
    const second = parseFloat(secondRef.current.value)
    const  result=first-second
    resultRef.current.value=result
  }

  const mul = () => {
    const first = parseFloat(firstRef.current.value)
    const second = parseFloat(secondRef.current.value)
    const  result=first*second
    resultRef.current.value=result
   
  }

  const div = () => {
    const first = parseFloat(firstRef.current.value)
    const second = parseFloat(secondRef.current.value)
    const  result=first/second
    resultRef.current.value=result
   
  }


  return (
    <div className={style.main_box} >
        <h1><u>UNCONTROLLED CALCULATOR</u></h1>
        <div className={style.inside}>
        <label htmlFor="">Enter first number</label> <br />
        <input type="number" ref={firstRef} /> <br />
        <label htmlFor="">Enter second number</label> <br />
        <input type="number" ref={secondRef} /> <br /><br />
        <div className={style.but}>
        <button onClick={add}>Add</button>
        <button onClick={sub}>sub</button>
        <button onClick={mul}>mul</button>
        <button onClick={div}>div</button>
        </div>
        <h1>The result is : <input type="text" ref={resultRef} /></h1><br />
        
        </div>
    </div>
  )
}

export default UncontrolledCalculator