import React, { useState } from 'react'
import style from "./usingRef.module.css"

const ControlledForms = () => {

    // const [username,setUsername]=useState()
    // const [email,setEmail]=useState()
    // const [password,setPassword]=useState()

    const [user,setUser]=useState({
        username:'',
        email:'',
        password:''

    })


    let getUsername=(e)=>{
        setUsername(e.target.value)
    }
    
    // let getEmail=(e)=>{
    //     setEmail(e.target.value)
    // }
    // let getPassword=(e)=>{
    //     setPassword(e.target.value)
    // }

    let handle=(e)=>{
        e.preventDefault()
        console.log(username);
        
        setUsername("")
        console.log(email);
        setEmail("")
        console.log(password);
        setPassword("")
    }
  return (
    <div className={style.main_box}>
       <marquee behavior="" direction="right"> <h1 >Forms in react</h1></marquee>

        <div className={style.form_box}>

          <form action="" onSubmit={handle}>
            <div >
            <label htmlFor="">username :</label>
            <input type="text"onChange={getUsername} value={username}  />
            </div>
            <div >
            <label htmlFor="">Email :</label>
            <input type="email" onChange={getEmail} value={email} />
            </div>
           <div >
           <label htmlFor="">password :</label>
            <input type="password" onChange={getPassword} value={password} />
           </div>
        
     
        
         
       
            <button>submit</button>
          </form>

        </div>
    </div>
  )
}

export default ControlledForms