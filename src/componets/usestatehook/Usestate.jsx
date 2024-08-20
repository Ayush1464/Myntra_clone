import React, { useState } from "react";

const Usestate=()=>{
    let  [count,setcount]=useState(0);

    let increment=()=>{
        
        setcount(count +2)

    }
    let decrement=()=>{
        setcount(count-2)
    }
    return(
        <div className="container">
            
            <div className="contain">
            <h1>{count}</h1>
            <div  className="button_container">
            <button onClick={increment}>Click me</button>
            <button onClick={decrement}>click me 1</button>
            </div>
            </div>
        </div>

    )
}
export default Usestate