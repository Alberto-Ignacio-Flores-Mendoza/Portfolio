import React from 'react'
import './About.css'
import {LiaLanguageSolid} from 'react-icons/lia'
import {MdOutlineSchool} from 'react-icons/md'
import {FaSchool} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Me</h2>

      <div className='container about__container'>
      
      {/*
        <div className='about__me'>
          <div className='about__me-image'>
              <img src={ME} alt='About me image'></img>
          </div>

          

        </div>
  */}

        <div className='about__content'>
            <div className='about__cards'>

              <article className='about__card'>
                <LiaLanguageSolid className='about__icon'/>
                <h5>Languages</h5>
                <small>English</small> <br></br>
                <small>Spanish</small> 

              </article>

              <article className='about__card'>
                <MdOutlineSchool className='about__icon'/>
                <h5>Degree</h5>
                <small>Bachelor's in Computer Science</small> 
              </article>

              <article className='about__card'>
                <FaSchool className='about__icon'/>
                <h5>University</h5>
                <small>Benemérita Universidad Autónoma de Puebla</small> 
              </article>
              

            </div>

         

            <p>
                Computer Science Engineer, graduated from Benemerita Universidad Autonoma de Puebla. Passion for new technologies and software development. 

                <br></br>
                <br></br>
                <br></br>

                Ingeniero en Ciencias de la Computación egresado de la Benemérita Universidad Autónoma de Puebla. Apasionado por la tecnología y el desarrollo de software.
                <br></br>
                Autodidacta, diligente, responsable, organizado, honesto y me agrada el trabajo en equipo.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>

          </div>
      </div>
    </section>
  )
}

export default About