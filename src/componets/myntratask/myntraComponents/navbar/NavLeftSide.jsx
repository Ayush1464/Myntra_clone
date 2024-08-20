import React from "react";
import HiddenBox from "./HiddenBox";



const NavLeftSide=()=>{
  let details=["men","women","kids","home & living","beauty","studio"]
  let navList_data = [
    {
        listname: "men",
        innerList:[
            {
                category: "topwear",
                categoryList: ["T-shirts","Casual shirts","formal shirts","sweatshirts","sweaters","sweaters","jackets","blazers & coats","suits","rain jackets"]
            },
            {
                category: "Indian & Festive Wear",
                categoryList: ["Kurtas & Kurta Sets","Sherwanis","Nehru Jackets","Dhotis"]
            },
            {
                category: "Bottomwear",
                categoryList: ["Jeans","Casual Trousers","Formal Trousers","Shorts","Track Pants & Joggers"]
            },
            {
                category: "Innerwear & Sleepwear",
                categoryList: ["Briefs & Trunks","Boxers","Vests","Sleepwear & Loungewear","Thermals"]
            },
            {
                category: "Plus Size",
                categoryList: []
            },
            {
                category: "Footwear",
                categoryList: ["Casual Shoes","Sports Shoes","Formal Shoes","Sneakers","Sandals & Floaters","Flip Flops","Socks"]
            },
            {
                category: "Personal Care & Grooming",
                categoryList: []
            },
            {
                category: "Sunglasses & Frames",
                categoryList: []
            },
            {
                category: "Watches",
                categoryList: []
            },
            {
                category: "Sports & Active Wear",
                categoryList: ["Sports Shoes","Sports Sandals","Active T-Shirts","Track Pants & Shorts","Tracksuits","Jackets & Sweatshirts","Sports Accessories","Swimwear"]
            },
            {
                category: "Gadgets",
                categoryList: ["Smart Wearables","Fitness Gadgets","Headphones","Speakers"]
            },
            {
                category: "Fashion Accessories",
                categoryList: ["Wallets","Belts","Perfumes & Body Mists","Trimmers","Deodorants","Ties, Cufflinks & Pocket Squares","Accessory Gift Sets","Caps & Hats","Mufflers, Scarves & Gloves","Phone Cases","Rings & Wristwear","Helmets"]
            },
            {
                category: "Bags & Backpacks",
                categoryList: []
            },
            {
                category: "Luggages & Trolleys",
                categoryList: []
            }
        ]
    },
    {
        listname: "women",
        innerList:[
            {
                category:"Indian & Fusion Wear",
                categoryList:["Kurtas & Suits","Kurtis, Tunics & Tops","Sarees","Ethnic Wear","Leggings, Salwars & Churidars","Skirts & Palazzos","Dress Materials","Lehenga Cholis","Dupattas & Shawls","Jackets"]
            },
            {
                category:"Belts, Scarves & More",
                categoryList:[]
            },
            {
                category:"Watches & Wearables",
                categoryList:[]
            },
            {
                category:"Western Wear",
                categoryList:["Dresses","Tops","Tshirts","Jeans","Trousers & Capris","Shorts & Skirts","Co-ords","Playsuits","Jumpsuits","Shrugs","Sweaters & Sweatshirts","Jackets & Coats","Blazers & Waistcoats"]
            },
            {
                category:"Plus Size",
                categoryList:[]
            },
            {
                category:"Maternity",
                categoryList:[]
            },
            {
                category:"Sunglasses & Frames",
                categoryList:[]
            },
            {
                category:"Footwear",
                categoryList:["Flats","Casual Shoes","Heels","Boots","Sports Shoes & Floaters"]
            },
            {
                category:"Sports & Active Wear",
                categoryList:["Clothing","Footwear","Sports Accessories","Sports Equipment"]
            },
            {
                category:"Lingerie & Sleepwear",
                categoryList:["Bra","Briefs","Shapewear","Sleepwear & Loungewear","Swimwear","Camisoles & Thermals"]
            },
            {
                category:"Beauty & Personal Care",
                categoryList:["Makeup","Skincare","Premium Beauty","Lipsticks","Fragrances"]
            },
            {
                category:"Gadgets",
                categoryList:["Smart Wearables","Fitness Gadgets","Headphones", "Speakers"]
            },
            {
                category:"Jewellery",
                categoryList:["Fashion Jewellery","Fine Jewellery","Earrings"]
            },
            {
                category:"Backpacks",
                categoryList:[]
            },
            {
                category:"Handbags, Bags & Wallets",
                categoryList:[]
            },
            {
                category:"Luggages & Trolleys",
                categoryList:[]
            },
        ]
    },
    {
        listname: "kids",
        innerList:[]
    },
    {
        listname: "home & living",
        innerList:[]
    },
    {
        listname: "beauty",
        innerList:[]
    },
    {
        listname: "Studio",
        innerList:[]
        }
    ]




    return(
        <div className="leftnav">
      <div className="nav_logo">
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuttPn2ezLuYUQqSc4itcX7sFOkKR0a4FMRI9XbVoDw&s" alt="" />

      </div>
      <div className="nav_list">
        <ul>
        {/* {details.map((ele,index)=>{
          return(
            <li key={index}>{ele}</li>
          )
        })}
        <li>STUDIO <sup>NEW</sup></li> */}

        {details.map((ele,index)=>{
          return(
            (ele!=="studio"? <li key={index}>{ele}</li>: <li key={index} >{ele} <sup id='new'>New</sup></li>)
          )
        })}
        </ul>
        
        <div className="hide_box1">

        </div>
        

      </div>
    
      
        </div>
    )
}
export default NavLeftSide