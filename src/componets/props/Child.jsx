import React from "react";

const Child=(props)=>{
    // let name="";
    // (props.data?name="sheela":name="leela")
    let {firstname,lastname,age,hobbies}=props.data

   
    return(
       <div className="child_card">
        <h1>I am achild component</h1>
        <ul>
            <li>{firstname}</li>
            <li>{lastname}</li>
            <li>{age}</li>
            <li>
                hobbies
                <ul>
                    {hobbies.map((ele,index)=>{
                        return(
                            <li  key={index}>{ele}</li>
                        )
                    })}
                </ul>
            </li>
        </ul>

       </div>
    )
}
export default Child