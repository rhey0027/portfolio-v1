import React from 'react'
import Image from 'next/image'
const Projects = () => {

  const cards = [
    {id: '1', title: "Bucket List", desc: "A bucket list app that allows users to create, edit, and delete bucket lists. Users can also add items to their bucket lists.", tech: "React, JavaScript, HTML, CSS", img: require('../../public/projects/bucketList.png')},
    
  ]

  return (
    <div className="container md:grid grid-cols-2 bg-red-300">
      <div className="card-wrapper w-full">
        {cards.map((card) => {
          return (
            <div className="p-2" key={card.id}>
              <div>
                <Image src={card.img} width='auto' height='auto' alt={card.img} className='objectFit hover:scale-105 duration-150 cursor-pointer'  />
              </div>
              <div className='bg-green-300'>
                <h1>description</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects
