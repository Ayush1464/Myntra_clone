import React from "react";
import { TbSearch } from "react-icons/tb";
import {FaRegUser} from "react-icons/fa6";
import {FaRegHeart} from "react-icons/fa";
import {HiOutlineShoppingBag} from "react-icons/hi2";


const NavRightSide=()=>{
    

    return(
        <div className="rightnav">
        <div className="nav_search">
        <div className="inner_search">
            <input type="text" name="search" id="search" placeholder="search for products, brands and more" />
        <div className="search_logo">
            <TbSearch/>

        </div>

        </div>
       
       
         </div>
       <div className="nav_profile">
        <div className="profile">
            <span><FaRegUser/></span>
            <span>Profile</span>
            <div className="hide_box">

            </div>
        </div>
        <div className="wishlist">
            <span><FaRegHeart/></span>
            <span>Wishlist</span>

        </div>
        <div className="bag">
            <span><HiOutlineShoppingBag/></span>
            <span>Bag</span>

        </div>
      
        
       </div>
       
    </div>
    )
}
export default NavRightSide