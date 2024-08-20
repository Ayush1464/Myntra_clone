import React,{useRef, useState} from 'react'

const Refs = () => {
    let elementref=useRef()
    const displayEle=()=>{
        elementref.current.style.display="block"
    }
    const hideEle=()=>{
        elementref.current.style.display="none"
    }
    let [themeState,setThemeState]=useState(true)


    const handleTheme=()=>{
        setThemeState(!themeState)
        if(themeState){
            document.body.style.backgroundColor="black"
        document.body.style.color="white"
        document.body.transition="all 2s"

        }
        else{
            document.body.style.backgroundColor="pink"
        document.body.style.color="black"
        document.body.transition="all 2s"

        }

    }



    const dark=()=>{
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
        document.body.transition="all 2s"
     }
     const light=()=>{
        document.body.style.backgroundColor="pink"
        document.body.style.color="black"
        document.body.transition="all 2s"
     }

  return (
    <div>
        <h1 ref={elementref}>useref hooks in react</h1>
        <button onClick={displayEle}>Display</button>
        <button onClick={hideEle}>Hide</button>

        Dark:<input type='radio' name='theme' onClick={dark}></input>
        Light:<input type='radio' name='theme' onClick={light}></input>

        <button onClick={handleTheme}>change theme</button>
    </div>
  )
}

export default Refs