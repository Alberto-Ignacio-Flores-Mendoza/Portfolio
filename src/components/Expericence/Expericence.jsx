import React from 'react'
import './Expericence.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Expericence = () => {
  return (
    <section id='experience'> 
    <h5>What Skills I Have</h5>
    <h2>My Skills</h2>

    <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>Frontend skills</h3>
        <div className='experience__content'>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                 <h4>HTML</h4>
              </div>
          </article>
           <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
            </div>
          </article>
           <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            </div>
          </article>
           <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>React</h4>
            </div>
          </article>
        </div>
      </div>

    <div className='experience__backend'>
      <h3>Backend skills</h3>
        <div className='experience__content'>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Node Js</h4>
            </div>
          </article>
           <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>MongoDB</h4>
            </div>
          </article>
           <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Express</h4>
            </div>
          </article>
           <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                 <h4>Mongoose</h4>
              </div>
          </article>

        </div>
      </div>

  

    </div>
    </section>
  )
}

export default Expericence