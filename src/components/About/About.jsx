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
                I'm a Computer Science Engineer, passionate about tech innovation. With a degree from Benemerita Universidad Autonoma de Puebla, I bring a solid foundation in computer science and software engineering. Beyond the classroom, I apply my skills to real-world challenges, thriving in dynamic environments. Let's connect and explore the exciting possibilities of the computer science world!
                <br></br>
                <br></br>
                <br></br>

                Soy un Ingeniero en Ciencias de la Computación, apasionado por la innovación tecnológica. Con un título de la Benemérita Universidad Autónoma de Puebla, tengo una sólida base en informática e ingeniería de software. Más allá del aula, aplico mis habilidades a desafíos del mundo real, prosperando en entornos dinámicos. ¡Conectémonos y exploremos las emocionantes posibilidades del mundo de la informática!
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>

          </div>
      </div>
    </section>
  )
}

export default About