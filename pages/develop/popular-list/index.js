import { Card, Button, Label } from 'flowbite-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Favorite() {
  // const [ data, setData ] = useState([])


  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const response = await fetch('http://127.0.0.1:8000/api/get-post-data', {
  //     method: 'GET',
  //   });
  //   const result = await response.json();
  //   setData(result);
  // };


  return (
    <div className="">
      <div className='bg-white rounded-t-sm'>
        <h1 className='mx-7 text-black'>Popular Today</h1>
      </div>
        <hr className='bg-black border-1'></hr>
      <div className='flex min-w-max bg-white rounded-b-sm'>
        <div className='flex gap-4  flex-wrap mt-2'>
          <br/>
          <div >
                <Image className='border-radius-90'
                  src="/image/Shinomiya.jpg"
                  width={100}
                  height={100}
                  alt="Picture of the Author"
                /> 
                <p className='text-black' >Judul 1</p>
          </div>

          <div >
          <Image 
                  src="/image/Tuna.png"
                  width={100}
                  height={100}
                  alt="Picture of the Author"
                /> 
              <p className='text-black' >Judul 2</p>
          </div>

          <div>
          <Image 
                  src="/image/Shinomiya.jpg"
                  width={100}
                  height={100}
                  alt="Picture of the Author"
                /> 
              <p className='text-black' >Judul 3</p>
          </div>

          <div className='mr-4'>
          <Image 
                  src="/image/Shinomiya.jpg"
                  width={100}
                  height={100}
                  alt="Picture of the Author"
                /> 
          <p className='text-black' >Judul 4</p>
          </div>
        </div>
      </div>
    </div>
  )
}




