/* eslint-disable */
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

export const Home = () => {
   
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] '>
         {/* constainer */}
        <div className='max-w-[1000px] mx-auto px-[80px] flex flex-col  justify-center h-full text-gray-300 '>
            <p className='text-[#9cbcea]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Atharva Bandal</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]' >I'm a Mern Stack Developer</h2>
            <p className='text-[#9cbcea] py-4 max-w-[700px]'>
               I am a mern stack web developer learning and building new projects. current, I'm focused on building responsive websites with end-to-end application.
            </p>
            <div>
               
                <Link  to='projects' smooth={true} duration={500}>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:text-[#0a192f]'>
                 View Projects
                    <span className='group-hover:rotate-90 duration-300' >
                        <HiArrowNarrowRight className='ml-3 ' />
                    </span>
                </button>
                 </Link>
            </div>
        </div>
    </div>
  )
}

