import React  ,{useRef,useState } from 'react'


const NewRef = () => {

  let [val,setVal]=useState("")

  let handle=()=>{
    let newVal=searchRef.current.value
    setVal(newVal)

  }


  let searchRef=useRef()
     
  return (
    <div>
        <input type="search" ref={searchRef}/>
        <button onClick={handle}>print</button>
        <h1>{val}</h1>
    </div>
  )
}

export default NewRef