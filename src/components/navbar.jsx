import React,{useState} from 'react';
import {FaBars , FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'; 
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

import logo from '../assets/logo1.png';


export const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img className='w-[30px] h-[30px] top-[5px]' src={logo} alt="" />
        </div>
        {/* menu */}
        <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

       


        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {nav ? <FaTimes/> : <FaBars/>}
        </div>


         {/* Mobile menu */}
        <ul  className={nav? 'md:hidden absolute top-0 left-0 w-full h-screen flex flex-col bg-[#0a192f] justify-center items-center': 'hidden'} >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
            </ul>
       
        {/* social icons */}
        <div className='fixed flex flex-col top-[30%] left-0'>
             <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[1px] duration-300 bg-[#3a4658]'> 
                    <a className='flex justify-between items-center w-full text-gray-300 ' href="https://www.linkedin.com/in/atharva-bandal-026a24230">LinkedIn 
                        <FaLinkedin className='' size={25} />
                    </a>
                    
                </li>
            
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[1px] duration-300 bg-[#3a4658]'> 
                    <a className='flex justify-between items-center w-full text-gray-300 ' href="https://github.com/AtharvaBandal/Natours">GitHub 
                        <FaGithub className='' size={25} />
                    </a>
                    
                </li>
             
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[1px] duration-300 bg-[#3a4658]'> 
                    <a className='flex justify-between items-center w-full text-gray-300 '  href = "mailto: bandalatharva@gmail.com">Mail 
                        <HiOutlineMail className='' size={25} />
                    </a>
                    
                </li>
            
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[1px] duration-300 bg-[#3a4658]'> 
                    <a className='flex justify-between items-center w-full text-gray-300 ' href="/">Resume 
                        <BsFillPersonLinesFill className='' size={25} />
                    </a>
                    
                </li>
            
             </ul>
        </div>

        
    </div>
    

    )
}
