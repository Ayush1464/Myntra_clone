import React from "react";

const LeftComponent=()=>{
    let leftcomponent=["home","About","Help"]

    return(
        <>
        {leftcomponent.map((ele)=>{

            return(
                <li>{ele}</li>
            )
        })}

        
        </>
    )
}
export default LeftComponent