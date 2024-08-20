import React from "react";

const RightComponent=()=>{
    let rightcomponent=["Counter App"]

    return(
        <>
        {rightcomponent.map((ele)=>{

            return(
                <li>{ele}</li>
            )
        })}

        
        </>
    )
}
export default RightComponent