import React, { useState } from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'


const Nav = () => {

  const [active, setActive] = useState('home');

  const handleActive=(value)=>{
    setActive(value);
  }

  return (
    <nav>
      <a href='#' className={active === 'home'? 'active': ''} onClick={()=>handleActive('home')}><AiOutlineHome/></a>
      <a href='#about' className={active === 'about'? 'active': ''} onClick={()=>handleActive('about')}> <AiOutlineUser></AiOutlineUser></a>
      <a href='#experience' className={active === 'experience'? 'active': ''} onClick={()=>handleActive('experience')}><BiBook></BiBook></a>
      <a href='#portfolio' className={active === 'portfolio'? 'active': ''} onClick={()=>handleActive('portfolio')}><RiServiceLine></RiServiceLine></a>
      <a href='#contact' className={active === 'contact'? 'active': ''} onClick={()=>handleActive('contact')}><BiMessageSquareDetail></BiMessageSquareDetail></a>

    </nav>      

    )
}

export default Nav