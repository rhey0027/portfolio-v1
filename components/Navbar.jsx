import React from 'react'
import Image from 'next/image'
import NavLinksButton from './NavLinksButton';


export const Navbar = () => {

  return (
    <div className="px-5 w-full navbar flex justify-between items-center h-[70px] shadow-md" data-aos= 'slide-down'>
      <Image src="/logo.png" width={60} height={60} alt="photo" />
      <NavLinksButton />
    </div>
  );
}

export default Navbar


