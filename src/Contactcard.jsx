import React from 'react'

const Contactcard = (props) => {
  return (
    <>
     <h1 className="headingc">{props.ctitle}</h1>
      <hr className="hrc" />
      <br />
      <br />
      <div className="firstcontact-container">
        <div className="cboxes">
          <img className="cimages" src={props.ime} alt="" srcset="" />
        </div>
        <div className="cboxes">
            <h2 className="ch2heading">{props.heading}</h2>
            <br />
           
            <p className="cpara">
            {props.cpara}
            </p>
        </div>
      </div> 
   
    </>
  )
}

export default Contactcard