'use client';
import React from 'react'
import { TfiAlignRight, TfiAngleDoubleDown  } from "react-icons/tfi";
import { useState } from 'react';
import Link from 'next/link';

const NavLinksButton = () => {

  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className="nav-links hidden md:flex">
        <ul className="nav-ul flex text-slate-300">
            <li className='nav-li'>Home</li>
          <Link href="#about">
              <li className='nav-li'>About</li>
          </Link>
          <Link href="#projects">
              <li className='nav-li'>Projects</li>
          </Link>
          <Link href="#contact">
              <li className='nav-li'>Contact</li>
          </Link>
        </ul>
      </div>
    <button className="nav-icon md:hidden cursor-pointer text-[#C1FFC1]"
    onClick={() => setShowLinks(!showLinks)}>
    {showLinks ? (
      <TfiAngleDoubleDown size={30} />
    ) : (
      <TfiAlignRight size={30} />
    )}
  </button>
    {showLinks && (
      <div className="absolute flex flex-col w-[100px]  right-2 top-[72px] bg-zinc-800 shadow-md rounded-md md:hidden z-50"
        onClick={() => setShowLinks(false)}
      >
        <ul className="nav-ul ext-end">
          <li className='nav-li'>Home</li>
          <Link href='#about'>
            <li className='nav-li'>About</li>
          </Link>
          <Link href='#projects'>
            <li className='nav-li'>Projects</li>
          </Link>
          <Link href='#contact'>
            <li className='nav-li'>Contact</li>
          </Link>
        </ul>
      </div>
    )}
    </>
  )
}

export default NavLinksButton
