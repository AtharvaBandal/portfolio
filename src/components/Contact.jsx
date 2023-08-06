import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4 text-gray-300'>
        <form method='POST' action='https://getform.io/f/06825ffc-7eca-4919-9a34-08edc5c3cd6b' className='flex flex-col max-w-[600px] w-full pl-[80px]'>
            <div className=''>
                <p className=' text-4xl font-bold inline border-b-4 border-bg-[#3a4658]'>Contact</p>
                <p className='py-6'>Submit the form below or email me.......</p>
            </div>
            <input className=' p-2 bg-[#ccd6f6]  text-black' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]  text-black' type="email" placeholder='Email'  name='email' />
            <textarea className=' p-2 bg-[#ccd6f6] text-black' name="message" placeholder='Message' id="" cols="30" rows="10"></textarea>
            <button className='border-2 text-white py-4 px-4 my-8 hover:bg-[#ccd6f6] mx-auto flex items-center  hover:text-black'>Say Hello </button>

            

         </form>
    </div>

  )
}

export default Contact