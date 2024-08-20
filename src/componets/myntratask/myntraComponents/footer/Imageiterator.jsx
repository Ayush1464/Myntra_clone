import React from 'react'

const Imageiterator = (props) => {
  return (
    <>
    {props.data.map((ele,index)=>{
        return(
            <img src={ele} alt="" key={index+1} />
        )
    })}
    </>
  )
}

export default Imageiterator