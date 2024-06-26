import React from 'react'
import natours from '../assets/natours.png';
import talk from '../assets/talk.png';
import byte from '../assets/byte.png';
import retina from '../assets/retina.png';
const Work = () => {
  return (
    <div name='projects' className=' w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pl-[80px] pr-[50px]'>
            <div className=' pb-8' >
                <p className='text-4xl font-bold inline border-b-4  text-gray-300 border-bg-[#3a4658]'>Projects</p>
                <p className='py-6 '>Check Out my projects...! </p>
            </div> 
            {/* container */}
            <div  className=' grid sm:grid-cols-2 md:grid-cols-3 gap-9'>

                {/* grid Item */}
                
                <div 
                    style={{ backgroundImage: `url(${natours})`}}  
                    className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover effect */}

                        {/* <span className='text-2xl font-bold text-black tracking-wider '>
                            Tour application
                        </span> */}
                    <div className='opacity-0 group-hover:opacity-100'>   
                        
                        <div className='pt-[190px]  md:pt-[150px] text-center'>
                            <a  target="_blank" rel="noopener noreferrer" href="http://natours-atharva.onrender.com/">
                                <button className='text-center px-4 rounded-lg py-3 m-2 bg-[#040c16] font-bold text-lg text-gray-100'>Explore</button>
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AtharvaBandal/Natours">
                                <button className='text-center px-4 rounded-lg py-3 m-2 bg-white font-bold text-lg text-gray-800'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid Item */}
                <div 
                    style={{ backgroundImage: `url(${talk})`}}  
                    className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover effect */}

                    <div className='opacity-0 group-hover:opacity-100'>   
                        {/* <span className='text-2xl font-bold text-black tracking-wider '>
                            Tour application
                        </span> */}
                        
                        <div className='pt-[190px]  md:pt-[150px] text-center'>
                            <a target="_blank" rel="noopener noreferrer" href="https://project-talk-cn6eypksd-atharvabandal.vercel.app/">
                                <button className='text-center px-4 rounded-lg py-3 m-2 bg-[#040c16] font-bold text-lg text-gray-100'>Explore</button>
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AtharvaBandal/project_talk">
                                <button className='text-center px-4 rounded-lg py-3 m-2 bg-white font-bold text-lg text-gray-800'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                    style={{ backgroundImage: `url(${byte})`}}  
                    className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover effect */}

                    <div className='opacity-0 group-hover:opacity-100'>   
                        {/* <span className='text-2xl font-bold text-black tracking-wider '>
                            Tour application
                        </span> */}
                        
                        <div className='pt-[190px]  md:pt-[150px] text-center'>
                            <a target="_blank" rel="noopener noreferrer" href="https://byte-solvers.netlify.app/">
                                <button className='text-center px-4 rounded-lg py-3 m-2 bg-[#040c16] font-bold text-lg text-gray-100'>Explore</button>
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AtharvaBandal/byte-solver-backend">
                                <button className='text-center px-4 rounded-lg py-3 m-2 bg-white font-bold text-lg text-gray-800'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>



                {/* grid Item */}
                
                <div 
                    style={{ backgroundImage: `url(${retina})`}}  
                    className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover effect */}

                        {/* <span className='text-2xl font-bold text-black tracking-wider '>
                            Tour application
                        </span> */}
                    <div className='opacity-0 group-hover:opacity-100'>   
                        
                        <div className='pt-[190px]  md:pt-[150px] text-center'>
                            <a target="_blank" rel="noopener noreferrer" href="https://retinal-segmentation.netlify.app/">
                                <button className='text-center px-4 rounded-lg py-3 m-2 bg-[#040c16] font-bold text-lg text-gray-100'>Explore</button>
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AtharvaBandal/Retina_backend">
                                <button className='text-center px-4 rounded-lg py-3 m-2 bg-white font-bold text-lg text-gray-800'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 

                
            </div>

        </div>
    </div>
  )
}

export default Work