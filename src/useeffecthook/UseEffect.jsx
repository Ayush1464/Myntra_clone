import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import ChildHook from './ChildHook'

const UseEffect = () => {
    let[count,setCount]=useState(0)
    let[data,setData]=useState([])
   

    // useEffect(()=>{
    //     console.log("hello");
    // })

    // useEffect(()=>{
    //     console.log("hello");
    //     setCount(count),[]
    // })

    // useEffect(()=>{
    //     setData(data+5),[count]
    // })

    // const Count=()=>{
    //     setCount(count+1)
    // }

    useEffect(()=>{
      const fetch=async()=>{

    let fdata=axios.get("https://api.github.com/users")
    .then((res)=>{
      setData(res.data)
    })
    }
    fetch()

    },[])



    
  return (
    <div>
       <ChildHook data={data}/>
        
        
    </div>
  )
}

export default UseEffect