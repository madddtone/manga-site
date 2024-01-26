import { Card, Button, Label } from 'flowbite-react';
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function MangaList() {
  
    const manga = [
      {
        title: "Naruto",
        image: "/images/naruto.jpg"
      },
      {
        title: "Boruto",
        image: "/images/boruto.jpg"
      },
      {
        title: "One Piece",
        image: "/images/wanpis.jpg"
      },
      {
        title: "Tokyo Ghoul",
        image: "/images/tokyogul.jpg"
      },
    ];

    return (
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-2 gap-6">
        {/* Card */}
  
        {manga.map(({ title, image }, index) => {
          return (
            <div key={index} className="rounded-xl relative">
              
              <Card className=''>
                <Image
                  className="max-h-[160px] w-20 object-cover"
                  src={image}
                  width={500}
                  height={1000}
                  alt="Naruto Doang"
                />                
                
                <p className="text-gray-900">{title} </p>               
              </Card>
            </div> 
          );
        })}
      </div>
    );
  }


  
