import React from "react";
import NavBar from "./myntraComponents/navbar/NavBar";
import MainCoverPage from "./myntraComponents/coverpage/MainCoverPage";
import Footer from "./myntraComponents/footer/Footer";




const MyntraHome=()=>{

    return(
        <div className="homepage">
           <NavBar/>
           
        
         <MainCoverPage/> 
            <Footer/>
            
        </div>
    )
}
export default MyntraHome