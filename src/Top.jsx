import React, { useEffect, useState } from 'react'
import {AiOutlineArrowUp} from "react-icons/ai";

const Top = () => {
    const [isvisible,setVisble]=useState(false);
    const gobtn=()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
    const listentoscroll=()=>{
        let hight=300;
        const winscroll=document.body.scrollTop||document.documentElement.scrollTop;
        if(winscroll>hight){
            setVisble(true);
        }else{
            setVisble(false);
        }

    }
    useEffect(()=>{
        window.addEventListener("scroll",listentoscroll)
    },[]);
  return (
    <>
    
    {isvisible && (
    <div className='top' onClick={gobtn}>
      <AiOutlineArrowUp  className='arrow'/>
    </div>
    
    )}
    </>
    
  )
}

export default Top