import React, { useRef, useState } from 'react'
import style from "./calculator.module.css"

const Calculator = () => {
    let[val,setVal]=useState('')
   
    let inputRef=useRef(null)

    const handle=(e)=>{
        if (e === '=') {
            
            setVal(eval(val))
        }
        else if(e === 'ac'){
            setVal('')
        } else {
            setVal(val + e)
        }
        
    }
    return (
    <div className={style.main_box}>

        <h1><u><center>CALCULATOR</center></u></h1>

        <div  className={style.calculator}>
            <div className={style.upper}>
                <input type="text"  ref={inputRef} value={val}/>
                <button onClick={()=> handle('ac')}>AC</button>

            
            
            </div>

            <div className={style.lower}>
                <div className={style.lower1}>
                <button onClick={()=>handle('1')}>1</button>
                <button onClick={()=>handle('2')}>2</button>
                <button onClick={()=>handle('3')}>3</button>
                <button onClick={()=>handle('4')}>4</button>
                <button onClick={()=>handle('5')}>5</button>
                <button onClick={()=>handle('6')}>6</button>
                <button onClick={()=>handle('7')}>7</button>
                <button onClick={()=>handle('8')}>8</button>
                <button onClick={()=>handle('9')}>9</button>
                <button onClick={()=>handle('.')}>.</button>
                <button onClick={()=>handle('0')}>0</button>
                <button onClick={()=>handle('=')}>=</button>
                </div>
                
                <div className={style.lower2}>
                <button onClick={()=>handle('+')}>+</button>
                <button onClick={()=>handle('-')}>-</button>
                <button onClick={()=>handle('*')}>*</button>
                <button onClick={()=>handle('/')}>/</button>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Calculator