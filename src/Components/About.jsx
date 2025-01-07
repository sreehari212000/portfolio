import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a0a0a] text-gray-300 pt-32'>
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'> 
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, i am Sreehari, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>I am a final year Master of Computer Applications (MCA) student from Gods Own Country Kerala, India. I am always on the lookout for new technologies and trends in the industry to stay ahead of the game and provide the best solutions possible. Thank you for taking the time to explore my portfolio, and I look forward to the opportunity to work with you.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About