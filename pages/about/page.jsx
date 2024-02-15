import React from 'react'
import Image from 'next/image'
import { FcReadingEbook } from "react-icons/fc";

const About = () => {
  return (
    <div id='about' className="mb-20 w-full text-slate-400">
      <div className="about flex items-center mb-3 pl-4 lg:pl-20">
        <FcReadingEbook
          size={30}
          className=''
          />
          <h1 className='text-slate-00 font-semibold text-yellow-400 text-[28px] ml-2'>About me.</h1>
      </div>
      <div className='wrapper grid md:grid-cols-1 lg:grid-cols-2 gap-10 lg:px-20'>
        <div className='profile-wrapper mx-auto'>
        <Image
          src={'/myProfile.jpg'}
          width={300}
          height={250}
          className='absolute border-4 border-orange-500 cursor-pointer'
          alt='profile-picture'
        />
        <Image
          src={'/myProfile.jpg'}
          width={300}
          height={250}
          className='img border-4 border-white cursor-pointer mix-blend-color-dodge hover:mix-blend-normal hover:rotate-6 duration-150 '
          alt='profile-picture'
        />
      </div>
      <div className='p-5'>
        <p>I started my computer career early 2000 (year 2000) I took Computer Programming at that time Windows 95 was not yet born. Programming lessons were Cobol, Fortran, Pascal I think this were the early birds in computer programming.Sadly I work as a salesman in a company.</p>
        <br />
        <p>Fast forward in 2013. I was able to start a small print shop in my hometown and I was able to got a hands-on again in Graphic Design and in 2022 while watching youtube videos I learn about the mighty VS-CODE that helps programmers, developer simplifying coding, error handling and testing, and that&apos;s it that gave me the boost to continue my programming path.</p> <br />
        <p>
            I just finished my bootcamp last April of 2023 as a <span className="font-bold text-red-400 uppercase tracking-wider">Full Stack Web Developer</span> and currently looking for a position as a Junior Web Developer to enhanced my skillset. Highly organized, responsible. With good communication skills, able to work as independent or with a team.Everysince at a young age, Im always curious about how things work when clicking something in my computer. I love to read  Tech books, watching tutorils and how stuff works. Right now I do graphic designs for walk-in clients and enhancing my skills.
          </p>
        </div>
    </div>
</div>
  )
}

export default About
