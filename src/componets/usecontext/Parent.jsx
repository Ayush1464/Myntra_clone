import React, { useContext } from 'react'
import { UserData } from '../../App';

const Parent = () => {
    let {count,setCount}=useContext(UserData)

    
    const incre=()=>{
        setCount(count+1)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={incre}>click</button>
    </div>
  )
}

export default Parent