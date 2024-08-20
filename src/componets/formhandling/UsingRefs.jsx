import React, { useRef } from 'react'
import style from "./usingRef.module.css"

const UsingRefs = () => {

const nameRef=useRef()
const emailRef=useRef()
const passwordRef=useRef()
const mobileRef=useRef()
const genderRef=useRef()
const courseRef=useRef()
const streamRef=useRef()
const femaleRef=useRef()
const yopRef=useRef()
const skillsRef=useRef()
const feedbackRef=useRef()
const handle=(e)=>{

    e.preventDefault()
    const username=nameRef.current
    const emailId=emailRef.current
    const pass=passwordRef.current
    const mobile=mobileRef.current
    const gender=genderRef.current.checked?'male':'female'
    
    const course=courseRef.current
    const stream=streamRef.current
    const yop=yopRef.current
    
    const skills=skillsRef.current
    const feedback=feedbackRef.current

    console.log("username :" +username.value);
    console.log("email :" +emailId.value);
    console.log("password :" +pass.value);
    console.log("mobile :" + mobile.value);
    console.log("gender :" +gender);
    console.log("course :" +course.value);
    console.log("stream :" +stream.value);
    console.log("yop :" +yop.value);
    console.log("skills :" +skills.value);
    console.log("feedback :" +feedback.value);

    username.value=""
    emailId.value=""
    pass.value=""
    mobile.value=""
    
    course.value=""
    stream.value=""
    yop.value=""
    skills.value=""
    feedback.value=""
    

}

  return (
    <div className={style.main_box}>
       <marquee behavior="" direction="right"> <h1 >Forms in react</h1></marquee>

        <div className={style.form_box}>

          <form action="" onSubmit={handle}>
            <div className={style.input_box}>
            <label htmlFor="">Name :</label>
            <input type="text" ref={nameRef} />
            </div>
            <div className={style.input_box}>
            <label htmlFor="">Email :</label>
            <input type="email" ref={emailRef} />
            </div>
           <div className={style.input_box}>
           <label htmlFor="">password :</label>
            <input type="password"  ref={passwordRef}/>
           </div>
           <div className={style.input_box}>
            <label htmlFor="">Mobile :</label>
            <input type="tel"  ref={mobileRef}/>
           </div>
            <div className={style.input_new}>
              <label htmlFor="" >Gender :</label>
              <div className='gender'>
              <input type="radio" name='same' ref={genderRef}/><label htmlFor="" >male</label>
              <input type="radio" name='same' ref={femaleRef} /><label htmlFor="">female</label>
              </div>

            </div>
           <div className={style.input_box}>
            <label htmlFor="">Course :</label>
            <input type="text"  ref={courseRef}/>
           </div>
           <div className={style.input_box}>
            <label htmlFor="">Stream :</label>
            <input type="text" ref={streamRef} />
           </div>
           <div className={style.input_box}> 
            <label htmlFor="">YOP :</label>
            <input type="number"  ref={yopRef}/>
           </div>
           <div className={style.input_box}>
            <label htmlFor="">Skills :</label>
            <input type="text" ref={skillsRef} />
           </div>
           <div className={style.input_box}>
            <label htmlFor="">Feedback :</label>
            <input type="text"  ref={feedbackRef}/>
           </div>
            <button>submit</button>
          </form>

        </div>
    </div>
  )
}

export default UsingRefs