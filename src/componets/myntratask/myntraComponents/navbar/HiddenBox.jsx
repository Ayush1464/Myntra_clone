import React from 'react'
import ListIterator from "../footer/ListIterator"

const HiddenBox = (props) => {
    console.log(props.data);
  return (
    <div className='category_box'>
        {props.data.map((ele,index)=>{
            return(
                <li className={'inner_box${index+1}'} key={index}>
                    <p>{ele.category}</p>
                    {ele.categoryList.length>0?<ListIterator
                    data={ele.categoryList}/>:"hii"}
                </li>
            )
        })}

    </div>
  )
}

export default HiddenBox