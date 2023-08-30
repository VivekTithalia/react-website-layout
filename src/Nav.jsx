import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';


const Nav = () => {
  const [showicons,setShowicons]=useState(false);
  return (
    <>
      <header>
        <div className="forimg">
          <img className='reactlogo' src="/logo192.png" alt="" />
        </div>
        <ul className={showicons ? 'nav-links' : 'hidden'}>
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="active">Contact us</NavLink>
          </li>
        </ul>
        <div className="humburger-menu" onClick={()=>{
          setShowicons(!showicons);
        }}>
          
           <GiHamburgerMenu/>
          
        </div>
      </header>
    </>
  );
};

export default Nav;
