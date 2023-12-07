import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
      <footer >
        <a href="#" className='footer__logo'></a>

        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer__socials'>
           <a href='https://www.linkedin.com/in/alberto-ignacio-flores-mendoza-a36860283/' target='_blank'><BsLinkedin></BsLinkedin></a>
            <a href='https://github.com/Alberto-Ignacio-Flores-Mendoza' target='_blank'><FaGithub></FaGithub></a>
        </div>

        <div className='footer__copyright'>
          <small>&copy; Alberto Ignacio Flores Mendoza</small>

        </div>
      </footer>
    )
}

export default Footer