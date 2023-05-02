import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';

const NavbarComponent = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>CorpU.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
            <Link to={'/'} className="m-4 text-navMenu uppercase text-xl font-bold">
                    Home
            </Link>
        </li>
        <li className='p-4 whitespace-nowrap'>
            <Link to={'/jobAvailable'} className="mr-4 text-navMenu uppercase text-xl font-bold">
                    Job Available
            </Link>
        </li>
        <li className='p-4 whitespace-nowrap'>
            <Link to={'/ApplyJob'} className="mr-4 text-navMenu uppercase text-xl font-bold">
                    Apply Job
            </Link>
        </li>
        <li className='p-4'>
            <Link to={'/login'} className="text-navMenu uppercase text-xl font-bold">
                    Login
            </Link>
        </li>
        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>CorpU.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
    <Outlet />
    </>
  );
};

export default NavbarComponent;
