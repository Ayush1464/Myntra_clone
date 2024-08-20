import React from 'react'
import FirstCoverPage from "./FirstCoverPage"
import SecondCoverPage from "./SecondCoverPage"
import ThirdCoverPage from "./ThirdCoverPage"

const MainCoverPage = () => {
  return (
    <div className='main_coverPage'>
        <FirstCoverPage/>
        <SecondCoverPage/>
        <ThirdCoverPage/>

    </div>
  )
}

export default MainCoverPage