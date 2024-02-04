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
      <div className='min-w-max my-5 bg-white rounded-sm'>
        <div className='mx-2 mt-2'>
          <p className='text-black bold'>Latest Update</p>
        </div>
        <hr className='min-w-max bg-gray-800 border-1'></hr>
        <div className="grid grid-cols-2">
          {/* Card */}
          {manga.map(({ title, image }, index) => {
            return (
                <>
                  <div className=''>
                    <div className='flex gap-4 mx-2 my-2'>
                      <Image
                        className="min-h-[160px] w-20 object-cover"
                        src={image}
                        width={500}
                        height={1000}
                        alt="Naruto Doang"
                      />                
                      
                      <p className="text-gray-900 mx-2 my-2">{title} </p>               
                    </div>
                    <hr className='my-4 bg-gray-800 min-w-max border-1'></hr>
                  </div>
                </>
            );
          })}
        </div>
      </div>
    );
  }


  
