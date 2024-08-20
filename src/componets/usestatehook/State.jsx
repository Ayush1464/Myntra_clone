import React ,{ useState,useRef }from 'react'
import content from "../userdaa.json"

const State = () => {
    let [user,setuser] =useState(content)
    
    const displayEle=()=>{
        setuser(content)
       
    }
    const hideEle=()=>{
        setuser([])
       
    }
   
  
   
    return (
    <div className="bg-stone-200 text-green">
        <button onClick={displayEle}>show</button>
        <button onClick={hideEle}>delete</button>

        <input type="search"  ref={searchRef}/>
        <button onClick="">click to search</button>
        <button>remove filter</button>
        <hr />
        <ul>
        {user.map((ele,index)=>{
            return(
                
                <div key={index+1}>
                    <img src={ele.avatar_url} alt="" />
                    <p>{ele.login}</p>

                </div>
            )
            })}
        </ul>

    </div>
  )
}

export default State