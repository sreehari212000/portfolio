import React from 'react'

import CSS from "../Assets/css.png"
import HTML from "../Assets/html.png"
import Next from "../Assets/NextJS.png"
import JAVASCRIPT from "../Assets/javascript.png"
import TAILWIND from "../Assets/tailwind.png"
import REDUX from "../Assets/Redux.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a0a0a] text-gray-300'>
    
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies i've worked with</p>
            </div>

            {/* containers for icons */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap4 text-center py-8'>
                {/* html div */}
                <div className='shadow-md shadow-[#363b41] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="" />
                    <p className='my-4'>HTML</p>
                </div>

                {/* css div */}
                <div className='shadow-md shadow-[#363b41] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="" />
                    <p className='my-4'>CSS</p>
                </div>

                {/* js div */}
                <div className='shadow-md shadow-[#363b41] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JAVASCRIPT} alt="" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>

                {/* react div */}
                <div className='shadow-md shadow-[#363b41] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Next} alt="" />
                    <p className='my-4'>NextJS</p>
                </div>

                {/* firebase div */}
                <div className='shadow-md shadow-[#363b41] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REDUX} alt="" />
                    <p className='my-4'>REDUX</p>
                </div>

                {/* tailwind div */}
                <div className='shadow-md shadow-[#363b41] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TAILWIND} alt="" />
                    <p className='my-4'>TAILWIND CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills