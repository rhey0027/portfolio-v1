'use client';
import { HiChevronDoubleUp } from "react-icons/hi";
import { useState, useEffect } from 'react'

const ScrollTop = () => {

  const [visible, setIsVisible ] = useState(false);

  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });    
  }

  const toggleVisibility = () => {
    
    if(window.scrollY >= 500 ) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return() => {
      window.removeEventListener('scroll', toggleVisibility);
    }
  },[])

  return (
    <div className={`scroll-to-top ${visible ? 'show' : ''}`} onClick={scrollToTop} data-aos='fade-up'
    >
      <HiChevronDoubleUp />
    </div>
  )
}

export default ScrollTop

