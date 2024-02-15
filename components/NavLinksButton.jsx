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
        <ul className="flex text-slate-300">
          <div className="flex items-center naviLinks">
            <span className="text-[#C1FFC1] font-semibold">R.</span>
            <li>Home</li>
          </div>
          <Link href="#about">
            <div className="flex items-center naviLinks">
              <span className="text-[#C1FFC1] font-semibold">H.</span>{" "}
              <li>About</li>
            </div>
          </Link>
          <Link href="#projects">
            <div className="flex items-center naviLinks">
              <span className="text-[#C1FFC1] font-semibold">E.</span>{" "}
              <li>Projects</li>
            </div>
          </Link>
          <Link href="#contact">
            <div className="flex items-center naviLinks">
              <span className="text-[#C1FFC1] font-semibold">Y.</span>{" "}
              <li>Contact</li>
            </div>
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
      <div
        className="flex flex-col absolute right-2 top-[72px] bg-zinc-800 bg-opacity-40 shadow-md rounded-md md:hidden z-10"
        onClick={() => setShowLinks(false)}
      >
        <ul className="text-end">
          <li>Home</li>
          <Link href='#about'>
            <li>About</li>
          </Link>
          <Link href='#projects'>
            <li>Projects</li>
          </Link>
          <Link href='#contact'>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    )}
    </>
  )
}

export default NavLinksButton
