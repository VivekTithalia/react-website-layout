import React from 'react'
import Footer from './Footer'


const About = () => {
  return (
    <>
    <h1  className='abouth1'>About Us</h1>
    <hr className='abouthr' />
    <div className="continerforabout">
       <div className="aboutboxes" id='forbiger'>
       <img className='hboximg' src="https://picsum.photos/200" alt="" srcset="" />
       </div>
       <div className="aboutboxes">
        <h1>Vision</h1>
        <p>Tech Fun Again✌️ </p>
        <h1>Image Processing</h1>
        <p>👉One of the core components of computer vision is Image Processing, which involves enhancing, manipulating, and extracting meaningful information from digital images.</p>
       </div>
    </div>
    <br />
    <br />
  

    <Footer/>
    </>
  )
}

export default About