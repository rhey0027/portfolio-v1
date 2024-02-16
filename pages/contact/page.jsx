'use client';
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaMobile } from '@react-icons/all-files/fa/FaMobile'
import { FaFacebookMessenger } from '@react-icons/all-files/fa/FaFacebookMessenger'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'


const Contact = () => {

  
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ subject, setSubject ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ success, setSuccess ] = useState('')

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_i38awgi', 'template_gnllpkj', form.current, 'fVKElmiPE1SB2EvkN')
      .then((result) => {
        console.log(result.text);
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setTimeout(() => {
          setSuccess('Message Sent Successfully')
        },3000)
      },(error) => {
        console.log(error.text);
      });
      e.target.reset();
    console.log(name, email, subject, message);
  }
  return (
    <div id='contact' className='w-full contact-form mb-36 md:grid grid-cols-2 gap-20 p-10 lg:px-36'>
      <form ref={form} onSubmit={sendEmail} className=' '>
        <div className="contact-logo text-center text-slate-300"  data-aos= 'fade-up'>
          <Image src='/logo.png' alt="logo" 
            width={60}
            height={60}
            className='text-center mb-3'
          />
        <code>Get In Touch</code>
        </div>
        <div className="form-input text-gray-600">
          <label  data-aos= 'fade-up'>Name</label>
          <input
            data-aos= 'fade-up'
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          <label data-aos= 'fade-up'>Email</label>
          <input
            data-aos= 'fade-up'
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <label  data-aos= 'fade-up'>Subject</label>
          <input
            data-aos= 'fade-up'
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            />
          <label  data-aos= 'fade-up'>Message</label>
          <textarea
            data-aos= 'fade-up'
            type="text"
            required
            value={message}
            cols={30}
            rows={3}
            onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        <button className='contact-btn' data-aos= 'fade-up'>Send</button>
        {success && <p className='success'>{success}</p>}
      </form>
      <div className="dev-details my-20"data-aos='fade-up'>
        <h1 className='text-[22px]'>
          Are you looking for a <strong className='text-yellow-500'>Web Developer</strong> to build your next web application?
        </h1>
        <p className='text-3xl my-3 text-red-400'>You&#39;re in the right place!</p>
          <p className='text-sm'>Contact me today to discuss your project idea&#39;s and get a free quote.</p>
        <div className='mt-10 text-yellow-400 social-icon'>
          <div className='flex gap-5 items-center'>
            < FaEnvelope className='size-7' />
          <span>rhey2476@gmail.com</span>
          </div>
          <div className='flex gap-5 items-center'>
            <FaLinkedin  className='text-blue-700 size-7'/>            
          <span>rhey-yu</span>
          </div>
          <div className='flex gap-5 items-center'>
            <FaGithub  className='text-slate-600 size-7'/>            
          <span>rhey0027</span>
          </div>
          <div className='flex gap-5 items-center'>
            <FaMobile  className='text-red-500 size-7'/>            
          <span>+63-955-7027-612</span>
          </div>
          <div className='flex gap-5 items-center'>
            <FaFacebookMessenger  className='text-pink-700 size-7'/>            
          <span>Maximus Decimus Yu</span>
          </div>
          <div className='flex gap-5 items-center'>
            <FaFacebook className='text-blue-500 size-7'/>            
          <span>Exprezzcard Print Studio</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
