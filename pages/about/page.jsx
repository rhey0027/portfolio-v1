import Skillset from '@components/Skillset';
import Image from 'next/image'
import { FcReadingEbook } from "react-icons/fc";


const About = () => {
  return (
    <div id='about' className="mb-20 w-full text-slate-400">
      <div className="about flex items-center mb-3 sm:pl-4 pt-5 md:pt-10 lg:pl-10"data-aos='fade-up'>
        <FcReadingEbook
          size={30}
          />
          <h1 className='text-slate-00 font-semibold text-yellow-400 text-[28px] ml-2'>About me.</h1>
      </div>
      <div className='wrapper grid md:grid-cols-1 lg:grid-cols-2 gap-10 lg:px-20'>
        <div className='profile-wrapper mx-auto'data-aos='fade-up'>
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
        <p data-aos='fade-up'>I started my computer career early 2000 (1997) I took Computer Programming after taking Marine Engineering. At that time Windows 95 was not yet born. Programming lessons were Cobol, Fortran, C, Pascal, DOS, I think this were the early birds in computer programming.</p>
        <br />
        <p data-aos='fade-up'>
            Fast forward in 2023 as a <span className="font-bold text-red-400 uppercase tracking-wider">Full Stack Web Developer</span> and currently looking for a position as a Web Developer, Freelance, Part-time or Full-Time. Highly organized, responsible. With good communication skills, able to work as independent or with a team. Everysince at a young age, Im always curious about how things work when clicking something in my computer. I love to read Tech books, watching tutorials and just coding most of my time. Right now I do graphic designs for walk-in clients and enhancing my skills in programming.
          </p>
        </div>
    </div>
        <Skillset />
    </div>
  )
}

export default About
