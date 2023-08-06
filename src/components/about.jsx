import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen  bg-[#0a192f] text-gray-300'>

        <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1000px] w-full px-4 pl-16 grid grid-cols-2 gap-8'>
               <div className='md:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-bg-[#3a4658] '>About</p>                   
                </div>

                <div>                 
                </div>
            </div>

            <div className='max-w-[1000px] w-full px-4 pl-16 sm:grid grid-cols-2 gap-8'>
                
                <div className='pl-3 text-[25px] text-left font-bold'>
                    <p >Hi. I'm Atharva, nice to meet you. Please take a look around.  </p>
                </div>

                <div className='pl-3  text-left pt-4 '>
                    <p>I am passionate and creative web developer with a knack for turning ideas into captivating digital experiences. With a strong foundation in coding and an eye for design, I specialize in crafting websites that are not only visually appealing but also highly functional.</p>
                     
                </div>


                 
           


            </div>


        </div>

    </div>
  )
}

export default About