import { Card, Button, Label } from 'flowbite-react';
import { useState, useEffect } from 'react';

export default function MangaList() {
  // const [ data, setData ] = useState([])
  //
  //
  // useEffect(() => {
  //   fetchData();
  // }, []);
  //
  // const fetchData = async () => {
  //   const response = await fetch('http://127.0.0.1:8000/api/get-post-data', {
  //     method: 'GET',
  //   });
  //   const result = await response.json();
  //   setData(result);
  // };


  return (
    <div className='grid grid-cols-3 mx-10 mt-10 gap-5'>
  
      {/* this is card elements */}
      
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card><Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card><Card>
        <p className='text-blue-900'>ngews</p>
      </Card><Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      <Card>
        <p className='text-blue-900'>ngews</p>
      </Card><Card>
        <p className='text-blue-900'>ngews</p>
      </Card>
      {/* card ends*/}

    </div>
  )
}
