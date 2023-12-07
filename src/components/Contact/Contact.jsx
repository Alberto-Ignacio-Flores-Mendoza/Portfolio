import React from 'react'
import './Contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'

import emailjs from 'emailjs-com'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {

  const form= useRef();

  const sendEmail =(e)=>{
    e.preventDefault();

    emailjs.sendForm("service_3kispdn", 'template_yyotc2m', form.current, 'Aw5gKp4VwGsTo88nF')
    window.alert("Your message was sent!");
    e.target.reset();
  } 

  return (
      <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'></MdOutlineEmail>
              <h4>Email</h4>
              <h5>AlbertoIFM64@gmail.com</h5>
              <a href='mailto:AlbertoIFM64@gmail.com' target='_blank'>Send a Message</a>
            </article>
         

            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'></BsWhatsapp>
              <h4>Whatsapp</h4>
              <h5>243 131 5991</h5>
              <a href='https://api.whatsapp.com/send?phone=522431315991' target='_blank'>Send a Message</a>
            </article>

          </div>


          {/*End of Contact Options */}
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required></input>
            <input type='email' name="email" placeholder='Your Email' required></input>
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
 </div>
      </section>
    )
}

export default Contact