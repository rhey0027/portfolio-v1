'use client';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import PortfolioButton from '@components/PortfolioButton';
import ScrollTop from '@components/ScrollTop';
import About from '@pages/about/page';
import Contact from '@pages/contact/page';
import Projects from '@pages/projects/page';

import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Page = () => {

  useEffect(() => {
    AOS.init({ duration:1000 })
  },[])

  return (
    <>
    <Navbar />
      <div className="home px-4 pt-10 md:px-8 xl:px-20">
        <code className="text-[#C1FFC1] text-md font-bold"data-aos='fade-up'>
          Hello! my name is
        </code>
        <h1 className="text-3xl md:text-5xl mb-3 font-bold text-yellow-400" data-aos='fade-up'>
          Rhey Yu.
        </h1>
        <div className="mb-10 text-[30px]">
          <span className="font-bold text-slate-300 md:text-[50px]" data-aos='fade-up'>
            I&#39;m a Full Stack Web Developer000.
          </span>
          <h3 className=" font-bold text-slate-400 md:text-[45px] " data-aos='fade-up'>
            A Graphic Artist.
          </h3>
        </div>
        <div className="text-slate-400 text-md md:w-4/5 mb-10 lg:text-2xl">
        <p data-aos='fade-up'>
          I have always been interested by how things work on the web and how it forms graphics, clickable buttons,routing to another page, fetching data by using only codes, and it gives me the desire
          to learn more. Creative and Detailed Software Developer. Eager to
          learn more about the latest
          <code className="text-[#c1ffc1] text-2xl">
            <br /> Web Application.
          </code>
        </p>
        </div>
          <PortfolioButton />
          <About />
          <Projects />
          <Contact />
          <ScrollTop />
          <Footer />
      </div>
    </>
  );
}

export default Page
