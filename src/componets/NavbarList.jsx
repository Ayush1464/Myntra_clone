import React from "react";

const NavbarList=()=>{
    let  navlist=["home","about us","contact","help"]
    return(
        <>
        {navlist.map((ele)=>{
            return(
                <li><a href="">{ele}</a></li>
            )
        })}
        </>
        
    )
}
export default NavbarList