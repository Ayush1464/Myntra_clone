import React from 'react'

const ListIterator = (props) => {
  return (
    <ul>
        {props.data.map((ele,index)=>{
            return(
                <li key={index}>{ele}</li>
            )
        })}
    </ul>
  )
}

export default ListIterator