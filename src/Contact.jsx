import React from "react";
import Contactcard from "./Contactcard";
import Footer from "./Footer";

const Contact = (props) => {
  return (
    <>
      <Contactcard
        ctitle="Contact Us✍️"
        ime="/images/contact-img.png"
        heading="Reach Out to Us"
        cpara="👉We would love to hear from you! If you have any questions, suggestions,
 or feedback, please feel free to get in touch with us using the form
 below."
      />
      <br />
      <br />
      <br />
       <Footer/>
     
    </>
  );
};

export default Contact;
