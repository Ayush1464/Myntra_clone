import React from 'react'

const FooterListIterator = (props) => {
  return (
    <div>
        {props.data.map((ele,index)=>{
            return(
                <p  key={index} className='foot_list'>{ele}  {index+1 == props.data.length?"":<span>|</span>}  </p>
            )
        })}
    </div>
  )
}

export default FooterListIterator