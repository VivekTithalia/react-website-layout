import React from 'react'
import Hcard from './Hcard'
import Footer from './Footer'
import Top from './Top'

const Home = () => {
  return (
    <>
   
     <div className="homecontiner">
       <h2 className="homeh1">Welcome❤️</h2>
       <hr className="homehr" />
       <img className='homeimg' src="https://picsum.photos/800/400" alt="" srcset="" />
     </div>
     <Hcard
       ime="https://picsum.photos/200"
       para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia nesciunt tenetur?"
     
     
     />
     <br />
     <Hcard
      ime="https://picsum.photos/200"
      para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia nesciunt tenetur?"
     />
     <br />
     <br />
     <Top/>
     <Footer/>
   
    </>
  )
}

export default Home
