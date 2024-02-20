import 'flowbite';
import Image from 'next/image'
import Link from 'next/link';
import { FcServices } from "react-icons/fc";

const Projects = () => {

  const cards = [
    {
      id: '1', 
      title: "Bucket List", 
      desc: "A bucket list app that allows users to create, edit, and delete bucket lists. Users can also add items to their bucket lists.", 
      tech: "React, JavaScript, Tailwind CSS, ExpressJs, Mongoose, MongoDb, DaisyUi", 
      img: require ('../../public/projects/bucketList.jpg'), 
      icon: require ('../../public/projects/git.png'), 
      link: "https://github.com/jay-jay/bucket-list-app",
      icon2: require ('../../public/projects/share.png'),
      link: "https://bucket-list-app",
    }, 
    {
      id: '2', 
      title: "Blackjact v1", 
      desc: "This is my first card game, you can find similar games online but my version is a bit different. I implement user input, credits will automatically be added when a player wins and credits will be subtracted when user lose. if credit is '0', buttons will be disabled. And a player cannot start a game if the player is empty.", 
      tech: "JavaScript,  CSS, html, localStorage", 
      img: require ('../../public/projects/blackjack.jpg'), 
      icon: require ('../../public/projects/git.png'), 
      link: "https://github.com/jay-jay/bucket-list-app",
      icon2: require ('../../public/projects/share.png'),
      link: "https://blackjact.vercel.app",
    }, 
    {
      id: '3', 
      title: "Database Management System", 
      desc: "A school Database equipped with Admin dashboard, students/registered users can view records like grades, payment, subjects and others. Only registered users can login to view updated records.", 
      tech: "JavaScript,Tailwindcss, Bootstrap, React, localStorage,mySql,ExpressJs,Dependencies for backend e.g. Bcrypt, jsonwebtoken to name a few...", 
      img: require ('../../public/projects/sdms.jpg'), 
      icon: require ('../../public/projects/git.png'), 
      link: "https://github.com/jay-jay/bucket-list-app",
      icon2: require ('../../public/projects/share.png'),
      link: "https://blackjact.vercel.app",
    }, 
    {
      id: '4', 
      title: "Yutube Photo Gallery", 
      desc: "A youtube alike design to store pictures. I build this when I was still learning for a couple of weeks. Getting to know the structure of the Document Object Model (DOM) and the responsiveness when viewing in different screen size.", 
      tech: "html, css, javascript", 
      img: require ('../../public/projects/yutube.jpg'), 
      icon: require ('../../public/projects/git.png'), 
      link: "https://github.com/jay-jay/bucket-list-app",
      icon2: require ('../../public/projects/share.png'),
      link: "https://blackjact.vercel.app",
    }, 
    {
      id: '5', 
      title: "Sweetcake Alabama", 
      desc: "A first mini project from bootcamp. An online ordering application focuses on different types of cakes. I'm still updating this to Nextjs and finishing implementing the backend logic with database and user authentication system.", 
      tech: "html, css, javascript", 
      img: require ('../../public/projects/sweetcake.jpg'), 
      icon: require ('../../public/projects/git.png'), 
      link: "https://github.com/jay-jay/bucket-list-app",
      icon2: require ('../../public/projects/share.png'),
      link: "https://sweetcakesss.000webhostapp.com"
    }, 
    {
      id: '6', 
      title: "Counter Tracker v-2", 
      desc: "A minified counting assistant, this can be used in a game, or anything that needs counting. This i my updated version with list of each number that you want to store and a total output. I also implement localStorage to save inputs. Equipped with disabled functions in buttons to disregard zeros", 
      tech: "html, css, tailwindcss, javascript", 
      img: require ('../../public/projects/counter-tracker.jpg'), 
      icon: require ('../../public/projects/git.png'), 
      link: "https://github.com/jay-jay/bucket-list-app",
      icon2: require ('../../public/projects/share.png'),
      link: "https://counter-tracker.vercel.app/",
    }, 
    {
      id: '7', 
      title: "MyEx", 
      desc: "It's not what you think it is:-). This is a web url storage application, works like a bookmark in a web browser.You can save your favorite website by clicking the save url button and you can also type your preferred web url manually, with a customized photo", 
      tech: "html, css, javascript", 
      img: require ('../../public/projects/my-chrome-ex.jpg'), 
      icon: require ('../../public/projects/git.png'), 
      link: "https://github.com/jay-jay/bucket-list-app",
      icon2: require ('../../public/projects/share.png'),
      link: "https://blackjact.vercel.app",
    }, 
    {
      id: '8', 
      title: "Reanna's Deli", 
      desc: "I build this 2 years ago when I'm still in my early days of practicing web development. An online food ordering application. I'm still updating this to ver-2, this is hard coded in html and I want to build this in dynamic mode with nextjs and database models together with payment method. ", 
      tech: "html, css, javascript, bootstrap", 
      img: require ('../../public/projects/rheanna.jpg'), 
      icon: require ('../../public/projects/git.png'), 
      link: "https://github.com/jay-jay/bucket-list-app",
      icon2: require ('../../public/projects/share.png'),
      link: "https://blackjact.vercel.app",
    }, 
    {
      id: '9', 
      title: "24-hour Clock format with links", 
      desc: "I build this because I want to have a custom web everytime I open a browser. Implement a clock function with my links ready on the fly. ", 
      tech: "html, css, javascript", 
      img: require ('../../public/projects/customClock.jpg'), 
      icon: require ('../../public/projects/git.png'), 
      link: "https://github.com/jay-jay/bucket-list-app",
      icon2: require ('../../public/projects/share.png'),
      link: "https://eps-clock-rhey0027.vercel.app/",
    }, 
    {
      id: '10', 
      title: "Your Daily Horoscope", 
      desc: "For those who wants to be updated with their horoscope,I build this just for you.", 
      tech: "html, css, javascript", 
      img: require ('../../public/projects/horoscope.jpg'), 
      icon: require ('../../public/projects/git.png'), 
      link: "https://github.com/jay-jay/bucket-list-app",
      icon2: require ('../../public/projects/share.png'),
      link: "https://horoscop-rhey0027.vercel.app/",
    }, 
  ]

  return (
      <div id='projects' className="card-wrapper mb-20">
        <div className="about flex items-center mb-3 pl-4 lg:pl-20 "data-aos='fade-up'>
        <FcServices
          size={30}
          />
          <h1 className='text-slate-00 font-semibold text-yellow-400 text-[28px] ml-2'>Projects I Build.</h1>
      </div>
        {cards.map((card) => {
          return (
            <div className="card lg:grid grid-cols-2 lg:p-16" key={card.id}>
              <div className='flex justify-center' data-aos= 'fade-up'>
                <Image src={card.img}  alt={card.img} className='objectFit hover:scale-105 duration-150 cursor-pointer'  />
              </div>
              <div className="details px-3 lg:text-end">
              <div className='my-3' data-aos= 'fade-up'>
                <p className='font-thin text-white'>Latest Build</p>
                <h3 className='text-orange-400 text-[22px] font-bold'>{card.title}</h3>
              </div>
              <div className="description bg-[#07233d] rounded-md shadow-md text-slate-300 text-base p-5" data-aos= 'fade-up'>
                <p>{card.desc}</p>
              </div>
              <div  className="tech text-sm mt-2 text-[#C1FFC1]" data-aos= 'fade-up'>
              <code>{card.tech}</code>
              </div>
              <div className="share-online flex justify-between gap-5 mt-5 p-2 mb-5 bg-gradient-to-r from-indigo-800" data-aos= 'fade-up'>
                <div>
                <code className='text-start'>Go to live site</code>
                </div>
                <div className='flex'>
                <Link href={card.link}
                  className='pr-4'
                >
                <Image 
                  src={card.icon} 
                  alt='icon'
                  width={25}
                />
                </Link>
                  <Link 
                    href={card.link} 
                    rel='noopener noreferrer'
                    target='_blank'
                    className='hover:-translate-y-1 duration-150 pr-4'
                    >
                    <Image 
                      src={card.icon2} 
                      alt='icon'
                      width={25}
                      data-tooltip-target="live-website"
                    />
                    <div id='live-website' role='tooltip' className="absolute z-10 invisible inline-block px-3 py-1 text-sm text-black duration-150 opacity-0 bg-yellow-300 rounded-lg shadow-sm">
                      <p>website</p>
                      <div className='tooltip-arrow' data-popper-arrow>
                      </div>
                  </div>
                  </Link>
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
  );
}

export default Projects
