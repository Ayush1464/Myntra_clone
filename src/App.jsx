import React, { createContext, useState } from "react";
 import Parent from "./componets/props/Parent"
import Usestate from "./componets/usestatehook/Usestate"
 import Nav from "./componets/usestatehook/Nav"
 import MyntraHome  from "./componets/myntratask/MyntraHome";
import Refs from "./componets/refs/Refs"
 import Inlinecss from "./componets/cssInReact/Inlinecss";
import Globalcss from "./componets/cssInReact/Globalcss";
import Modulecss from "./componets/cssInReact/Modulecss";
 import State from "./componets/usestatehook/State";
 import UsingRefs from "./componets/formhandling/UsingRefs";
import NewRef from "./componets/NewRef";
// import ControlledForms from "./componets/formhandling/ControlledForms";
// import UncontrolledCalculator from "./componets/calculator/UncontrolledCalculator";
// import ControlledCalculator from "./componets/calculator/ControlledCalculator";
// import UseEffect from "./useeffecthook/UseEffect";
// import Parent from "./componets/usecontext/Parent";
import Calculator from "./calculator/Calculator";

// export const UserData=createContext()


const App =() =>{
// let obj={
//     username:"ayush",
//     age:24
// }

// let arr=[1,2,3,4,5]

// let [count,setCount]=useState(0)

    return(
        <div >
        {/* <Refs/> */}
         <MyntraHome/>

            {/* <Inlinecss/>
            <Globalcss/>
            <Modulecss/> */}
        {/* <State/> */}
        {/* <UsingRefs/> */}
        {/* <NewRef/> */}
        {/* <ControlledForms/> */}
        {/* <UncontrolledCalculator/> */}
        {/* <ControlledCalculator/> */}
        {/* <UseEffect/> */}

        {/* <UserData.Provider value={{count,setCount}}>
            <Parent/>

        </UserData.Provider> */}


        {/* <Calculator/> */}

        </div>
    )
}
export default App