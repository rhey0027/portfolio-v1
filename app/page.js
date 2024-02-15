import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import PortfolioButton from '@components/PortfolioButton';
import ScrollTop from '@components/ScrollTop';
import About from '@pages/about/page';
import Contact from '@pages/contact/page';
import Projects from '@pages/projects/page';




const page = () => {
  return (
    <>
    <Navbar />
      <div className="home w-full p-8 lg:p-20">
        <code className="text-[#C1FFC1] text-md font-bold">
          Hello! my name is
        </code>
        <h1 className="text-3xl md:text-5xl mb-3 font-bold text-yellow-400">
          Rhey Yu.
        </h1>
        <div className="h-[35px] mb-16 text-[30px] md:text-[50px]">
          <h1 className=" font-bold text-slate-400">
            A Full Stack Web Developer.
          </h1>
        </div>
        <p className="text-slate-400 text-md md:w-4/5">
          I have always been fascinated by things work on the web and how they
          came to take the form by using only codes, and it gives me the desire
          to learn more. Creative and Detailed Software Developer. Eager to
          learn more about the latest
          <code className="text-[#c1ffc1] text-2xl">
            <br /> Web Application.
          </code>
        </p>
        <PortfolioButton />
      </div>
      <About />
      <Projects />
      <Contact />
      <ScrollTop />
      <Footer />
    </>
  );
}

export default page
