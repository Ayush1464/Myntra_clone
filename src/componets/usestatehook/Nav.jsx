import React from "react"
import LeftComponent from "./Leftcomponent"
import RightComponent from "./RightComponent"
const Navbar=()=>{
    return(
        <div className="navbar_div">
            
            
           <div className="one">
           <ul>
                <LeftComponent/>
             </ul>
           </div >
           
           <div className="two">
           <ul>
            <RightComponent/>
           </ul>

           </div>
            
            
        </div>
    )
}
export default Navbar