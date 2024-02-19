import React from 'react'
import Image from 'next/image'
import NavLinksButton from './NavLinksButton';


export const Navbar = () => {

//   window.onscroll = function () {
//     scrollFunction()
//   }
// function scrollFunction() {
//     if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
//     document.getElementById('navbar').style.top = "0"; 
//     }else {
//     document.getElementById('navbar').style.top = '-70px';
//     }   
//   }

  return (
    <div id='navbar' className="px-5 w-full flex justify-between items-center h-[70px] shadow-md" data-aos= 'slide-down'>
      <Image src="/logo.png" width={60} height={60} alt="photo" />
      <NavLinksButton />
    </div>
  );
}

export default Navbar


