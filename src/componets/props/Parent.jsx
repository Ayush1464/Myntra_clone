import React from "react";
import Child from "./Child"

const Parent=()=>{
// sending boolean data type
    // let money1=true;
    // let money2=false;

    //sending null data type to child
    // sending undefined to child
    //sending array data type to child

    // let arr1=["apple","banana","dates"]
    // let arr2=["apple","banana","dates"]

    let obj1={
        firstname : "ayush",
        lastname : "mahapatra",
        age : 24,
        hobbies :["studying","exploring","helping"]
    }
    
    let obj2={
        firstname : "ayush",
        lastname : "mahapatra",
        age : 24,
        hobbies :["studying","exploring","helping"]
    }
    return(
        <>
        <h1><center>I am a parent component</center></h1>
        <div className="child_container"> 
        <Child data={obj1}/>
        <Child data={obj2}/>
        <Child data={obj1}/>
        <Child data={obj2}/>
        <Child data={obj2}/>
        <Child data={obj1}/>
        <Child data={obj1}/>
        <Child data={obj2}/>
        <Child data={obj2}/>
        <Child data={obj1}/>
           
        </div>
       
        </>
    )
}
export default Parent