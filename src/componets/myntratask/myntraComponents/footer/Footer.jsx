import React from 'react'
import TopFooter from "./TopFooter"
import MidFooter from "./MidFooter"
import BottomFooter from "./BottomFooter"

const Footer = () => {
  return (
    <div className='main_footer'>
        <footer>
            <TopFooter/>
            <MidFooter/>
            <BottomFooter/>
        </footer>

    </div>
  )
}

export default Footer