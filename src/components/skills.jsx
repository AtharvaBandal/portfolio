import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';


import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
        <div name='skills' className='w-full h-screen  bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto pl-14 flex flex-col justify-center w-full h-full '>
                <div className='pl-6 ' >
                    <p className='text-4xl font-bold inline  border-b-4 border-bg-[#3a4658]'>Skills</p>
                    <p className='py-4 '>The technologies I've worked with....</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pr-10 '>

                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={HTML} alt="Html_Icon" />
                        <p className='my-4 '> HTML</p>
                    </div>

                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={CSS} alt="Html_Icon" />
                        <p className='my-4 '> CSS</p>
                    </div>

                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="Html_Icon" />
                        <p className='my-4 '> React</p>
                    </div>

                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="Html_Icon" />
                        <p className='my-4 '> Javascript</p>
                    </div>


                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Node} alt="Html_Icon" />
                        <p className='my-4 '> Nodejs</p>
                    </div>

                    <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Mongo} alt="Html_Icon" />
                        <p className='my-4 '> MongoDb</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Skills