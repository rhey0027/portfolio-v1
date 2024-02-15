'use client';
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <div id='contact' className='contact-form mb-36'>
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact-logo text-center text-slate-300">
          <Image src='/logo.png' alt="logo" 
            width={60}
            height={60}
            className='text-center mb-3'
          />
        <code>Get In Touch</code>
        <span></span>
        </div>
        <div className="form-input text-gray-600">
          <label>Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <label>Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            />
          <label>Message</label>
          <textarea
            type="text"
            required
            value={message}
            cols={30}
            rows={3}
            onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        <button className='contact-btn hover:bg-blue-300 duration-150'>SEND</button>
        {success && <p className='success'>{success}</p>}
      </form>
    </div>
  )
}

export default Contact
