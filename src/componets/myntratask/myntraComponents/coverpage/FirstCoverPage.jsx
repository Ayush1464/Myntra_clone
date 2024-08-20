import React from 'react'
import IMAGE1 from "../../assets/img1.webp"
import IMAGE2 from "../../assets/img2.webp"

const FirstCoverPage = () => {
  return (
    <div className='firstpage'>
        <div className='img_1'>
            
          <img src={IMAGE1} alt="" />
        </div>
        <div className='img_2'>
          
          <img src={IMAGE2} alt="" />
        </div>

    </div>
  )
}

export default FirstCoverPage