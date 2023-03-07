import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import {Link, } from "react-scroll"
import { TypeAnimation } from 'react-type-animation';

// bg-[#0a192f]
const Home = () => {
  return (
    <div name='home' className='bg-[#0a0a0a] w-full h-screen'>

        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-pink-600 text-3xl'>Hello there, </p>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> I am <TypeAnimation
              sequence={['Sreehari J.', 1500, 'a Frontend Developer.', 1500, 'from India.', 1500]}
              className="inline-block"
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em' }}/>
            </h2> 

          <p className='text-[#8892b0] max-w-[700px]'>As a front-end developer, I design and build immersive digital experiences that seamlessly blend functionality and aesthetics, to provide users with a unique and unforgettable journey.</p>
            <div className='my-4'>
              <Link to='projects' smooth={true} offset={-25}>
                <button className='text-white flex items-center border group border-red-100 px-4 py-2 hover:bg-pink-600 rounded-sm duration-300 hover:text-black'>View Projects <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300' /></button>
              </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Home