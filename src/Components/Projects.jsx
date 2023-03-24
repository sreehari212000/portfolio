import React from 'react'
import RealEstate from "../Assets/RealestateGenie.png"
import IPTracker from "../Assets/IpAdressTracker.png"
import CountryAPI from "../Assets/country-api.png"
import Connectify from "../Assets/connectify.png"
import ecart from "../Assets/ecart.png"
import yt from "../Assets/mytube.png"
import chitchat from "../Assets/chitchat.png"
import calculator from "../Assets/calculator.png"

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a0a0a]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4  border-pink-600'>Projects</p>
                <p className='py-6'>These are some of the projects i built</p>
            </div>

            {/* grid container  */}
            <div 
             className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {/* grid single item */}
                <div style={{backgroundImage: `url(${RealEstate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            RealEstate Genie
                        </span>
                        <div>
                            <a href="https://real-estate-genie.vercel.app/" target='_blank'> 
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/sreehari212000/RealEstate-Genie" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* end of single item */}
                {/* grid single item */}
                <div style={{backgroundImage: `url(${IPTracker})`, objectFit:'contain'}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Ip Tracker Master
                        </span>
                        <div>
                            <a href="https://sreehari212000.github.io/IP-Adress-Tracker/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/sreehari212000/IP-Adress-Tracker" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* end of single item */}
                {/* grid single item */}
                <div style={{backgroundImage: `url(${CountryAPI})`, objectFit:'contain'}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Country API
                        </span>
                        <div>
                            <a href="https://sj-country-api.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/sreehari212000/CountryAPI" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* end of single item */}
                {/* grid single item */}
                <div style={{backgroundImage: `url(${Connectify})`, objectFit:'contain'}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Connectify
                        </span>
                        <div>
                            <a href="https://sj-connectify.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/sreehari212000/connectify" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* end of single item */}
                {/* grid single item */}
                <div style={{backgroundImage: `url(${ecart})`, objectFit:'contain'}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            e-CART
                        </span>
                        <div>
                            <a href="https://sj-ecart.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/sreehari212000/eCart" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* end of single item */}
                {/* grid single item */}
                <div style={{backgroundImage: `url(${yt})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            My Tube
                        </span>
                        <div>
                            <a href="https://sj-mytube.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/sreehari212000/yt-clone" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* end of single item */}
                {/* grid single item */}
                <div style={{backgroundImage: `url(${chitchat})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ChitChat
                        </span>
                        <div>
                            <a href="https://sj-chitchat.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/sreehari212000/chitchat" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* end of single item */}
                {/* grid single item */}
                <div style={{backgroundImage: `url(${calculator})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Calculator
                        </span>
                        <div>
                            <a href="https://sreehari212000.github.io/CalculatorApp/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/sreehari212000/CalculatorApp" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* end of single item */}
            </div>

        </div>

    </div>
  )
}

export default Projects