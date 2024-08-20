import React from 'react'
import ListIterator from './ListIterator'
import Imageiterator from './Imageiterator'
import googleplay from "../../assets/googleplay.png"
import apple from "../../assets/apple.png"
import fb from "../../assets/fb.png"
import twt from "../../assets/twt.png"
import yt from "../../assets/yt.png"
import inst from "../../assets/inst.png"
import original from "../../assets/original.png";
import one from "../../assets/one.png"

const TopFooter = () => {

    let list1=["men","women","kids","home & living","beauty","gift cards","myntra insider"]
    let list2=["blog","career","site map","corporate information","whitehat","cleartrip"]
    let list3=["contact us","faq","t&c","terms of use","track orders","shipping","cancellation","returns","privacy policy","grievance officer"]

    let imglist1=[googleplay,apple]
    let imglist2=[fb,twt,yt,inst]
    let imglist3=[original]
    let imglist4=[one]


  return (
    <div className='top_footer'>
        <div className='footer_box1'>
            <p>online shopping</p>
            <ListIterator data={list1}/>
            <p>useful links</p>
            <ListIterator data={list2}/>

        </div>
        <div className='footer_box2 footer_box1'>
          <p>customer policies</p>
          <ListIterator data={list3}/>

        </div>
        <div className='footer_box3'>
          <p>exerience myntra app on mobile</p>
          <Imageiterator data={imglist1}/>
          <p>keep in touch</p>
          <div className='logo_list'>
            <Imageiterator data={imglist2}/>


          </div>

        </div>
        <div className='footer_box4'>
          <div className='logo1'>
          <Imageiterator data={imglist3}/>

          <p><b>100% ORIGINAL </b>guarantee for all products at myntra.com</p>


          </div>
          <div className='logo2'>
          <Imageiterator data={imglist4}/>
          <p><b>Return within 14days</b> of receiving your order</p>

          </div>

          

        </div>
       

    </div>
  )
}

export default TopFooter
