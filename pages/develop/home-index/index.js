import { Navbar, Card, Button, Label } from 'flowbite-react';
import Link from 'next/link';
import Navbar3 from '../components/navbar/navbar';
import MangaList from '../manga-list';

export default function HomeIndex() {

  return (
    <div>
      {/* navbar */}
      <div className='mb-4'>
        <Navbar3></Navbar3>
      </div>

      {/* content */}
      <div className='grid grid-cols-[7fr,3fr] my-4 gap-4 mx-60'>
          <MangaList></MangaList>        
          <Navbar3></Navbar3>
      </div>

      {/* footer */}
      <div>
      </div>
    </div>
  )
}
