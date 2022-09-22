import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l7idpe5', 'template_43lnnse', form.current, 'bllcFFzhQfBlCpw7u')
    e.target.reset()
  };
  return (
    <section id='contacts'>
      <h2>Contact Us</h2>
      <div className='container contact_container'>
        <div className="contact_options">
        <h3>If you have any inquiries regarding our services, please feel free to contact us.You can come to find us at:</h3>
          <article className='contact_option'>
           <MdOutlineEmail className="contact_option-icon"/>
            <h4>E-mail</h4>
            <h5>st.michael24h7d@gmail.com</h5>
            <a href='mailto:st.michael24h7d@gmail.com'>Send An Email</a>
          </article>
          <article className='contact_option'>
           <RiMessengerFill className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>St.Michael's Security System</h5>
            <a href='https://m.me/defconadmin'>Contact through messenger</a>
          </article> 
          <article className='contact_option'>
           <BsWhatsapp className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+16476845050</h5>
            <a href='https://api.whatsapp.com/send?phone=++16476845050'>Contact through WhatsApp</a>
          </article> 
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required></input>
          <input type="email" name='email' placeholder='Your Email Address' required></input>
          <textarea name="message" id="" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact