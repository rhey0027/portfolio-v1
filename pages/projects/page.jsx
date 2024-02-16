import React from 'react'
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
      img: require ('../../public/projects/bucketList.png'), 
      icon: require ('../../public/projects/git.png'), 
      link: "https://github.com/jay-jay/bucket-list-app",
      icon2: require ('../../public/projects/share.png'),
      link: "https://bucket-list-app",
    } 
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
            <div className="p-7 lg:grid grid-cols-2 lg:p-16" key={card.id}>
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
              <div className="share-online flex justify-end gap-5 mt-5" data-aos= 'fade-up'>
                <Link href={card.link}>
                <Image 
                  src={card.icon} 
                  alt='icon'
                  width={25}
                />
                </Link>
                <Link href={card.link}>
                <Image 
                  src={card.icon2} 
                  alt='icon'
                  width={25}
                />
                </Link>
              </div>
              </div>
            </div>
          );
        })}
      </div>
  );
}

export default Projects
