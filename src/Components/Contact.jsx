import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a0a0a] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/cc3f795c-b0e6-45b5-ab7f-e5c5bcd66947" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact Me</p>
                <p className='text-gray-300 p-4'>Submit the form below or shoot me an email - sreeharijayaram21@gmail.com</p>
            </div>
            <input className='py-2 text-black' type="text" placeholder='Name' name='name'/>
            <input type="email" placeholder='Email' name='email' className='text-black my-4 p-2 bg-[#ccd6f6]'/> 
            <textarea placeholder='Message' className='text-black p-2 bg-[#ccd6f6]' name='message' cols={30} rows={10}></textarea>

            <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8'>Let's Collaborate</button>
        </form>
    </div>  
  )
}

export default Contact