import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import terminal from '../assets/dogethstylenav.png'
import './dev.css';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='bg-[#85ce56] bg-opacity-25'>
      <div className='bg-[#85ce56] bg-opacity-0 max-w-auto mx-auto flex justify-between items-center h-full'>
        <div className=''>
        <a href="/"><img className='max-w-[300px]' src={terminal} alt="/" /></a>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-[#276400] items-center'>
            <li><a href="/" target="_blank" rel="noopener noreferrer">TELEGRAM</a></li>
            <li><a href="https://twitter.com/GodofMemesERC20" target="_blank" rel="noopener noreferrer">TWITTER</a></li>
            <li><a href="https://medium.com/@PepeFrog/god-of-memes-24c05f8b07ec" target="_blank" rel="noopener noreferrer">MEDIUM</a></li>
           <li><a href="mailto:godofmemespepe2022@gmail.com" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 mt-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><a href="https://pepegodapp.com/" target="_blank" rel="noopener noreferrer">DASHBOARD</a></button>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <li className='text-2xl'>Road Map</li>
            <li className='text-2xl'>Twitter</li>
            <li className='text-2xl'>Telegram</li>
            <li className='text-2xl'>About</li>
            <button className='m-8'>Buy</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
