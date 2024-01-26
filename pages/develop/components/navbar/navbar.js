import { Navbar, Card, Button, Label } from 'flowbite-react';
import Link from 'next/link';

export default function Navbar3() {

  return (
    <Navbar fluid className='bg-purple-500'>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Manga Reader</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" className='text-white'>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#" className='text-white'>
          Bookmarks
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white'>
          Comics
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white'>
          Recruitement
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
