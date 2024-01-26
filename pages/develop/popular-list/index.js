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
    <div className="flex justify-center items-center">
    <Card className='flex max-w-max bg-gray-900'
      >
      
      <h1 className='mx-7 text-gray-100'>Favorite</h1>
      <hr className='bg-purple-100'/>
      <div className='flex gap-4 mx-3 justify-center my-10 flex-wrap'>
       
       <br/>
        <Card >
              <Image className='border-radius-90'
                src="/image/Shinomiya.jpg"
                width={100}
                height={100}
                alt="Picture of the Author"
              /> 
              <p className='text-gray-300' >Judul 1</p>
        </Card>

        <Card >
        <Image 
                src="/image/Tuna.png"
                width={100}
                height={100}
                alt="Picture of the Author"
              /> 
            <p className='text-gray-300' >Judul 2</p>
        </Card>

        <Card>
        <Image 
                src="/image/Shinomiya.jpg"
                width={100}
                height={100}
                alt="Picture of the Author"
              /> 
            <p className='text-gray-300' >Judul 3</p>
        </Card>

        <Card className='mr-4'>
        <Image 
                src="/image/Shinomiya.jpg"
                width={100}
                height={100}
                alt="Picture of the Author"
              /> 
        <p className='text-gray-300' >Judul 4</p>
        </Card>

      </div>
      </Card>
      </div>
   
    
  )
}




