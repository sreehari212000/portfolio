import React, { useEffect, useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import {BsFilePersonFill, BsFillArrowUpSquareFill} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"
import {Link, } from "react-scroll"
import LOGO from "../Assets/Sj.png"
import RESUME from "../Assets/Resume.pdf"


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    const [position, setPosition] = useState(0)
    const handleClick = () => setNavOpen(!navOpen)
    function closeNav(){
        setNavOpen(false)
    }

    // setting scroll position
    function handleScroll(){
        setPosition(window.scrollY)
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)

        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a0a0a] text-gray-300'>
        <div>
            <img src={LOGO} alt="logo" style={{width:'50px'}}/>
        </div>

    {/* menu items */}
        <ul className='hidden md:flex'>
            <li>
                <Link to="home"  smooth={true}  duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about"  smooth={true} offset={-100} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="skills"  smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="projects" offset={-23}  smooth={true}  duration={500}>
                    Projects
                </Link>
            </li>
            <li>
                <Link to="contact"  smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
            {/* Hamburger menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {navOpen ? <FaTimes /> : <FaBars />}
        </div>



            {/* Modile menu */}
        <ul className={!navOpen? 'hidden': ' absolute top-0 left-0 w-full h-screen bg-black bg-opacity-70 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={closeNav}  to="home"  smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={closeNav} to="about"  smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={closeNav} to="skills" offset={-40}  smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={closeNav} to="projects" offset={-70}   smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={closeNav} to="contact" offset={-60}  smooth={true} duration={500}>
                    Contact
                </Link>
            </li>

            <div>
              <ul className='text-white lg:hidden flex mt-12'>
                <li><a href="https://github.com/sreehari212000" target='_blank'><FaGithub size='25px'/></a></li>
                <li><a href="https://www.linkedin.com" target='_blank'><FaLinkedin size='25px'/></a></li>
                <li><a href="https://www.twitter.com/_sreeri" target='_blank'><FiTwitter size='25px'/></a></li>
                <li><a href={RESUME} target='_blank'><BsFilePersonFill size='25px'/></a></li>
              </ul>
            </div>
        </ul>



            {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:translate-x-[90px] duration-500 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/sreehari-jayaram-85153b242/" target='_blank'>Linkedin <FaLinkedin size={30}/></a>
                </li>


                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:translate-x-[90px] duration-500 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.github.com/sreehari212000" target='_blank'>Github <FaGithub size={30}/></a>
                </li>


                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:translate-x-[90px] duration-500 bg-[#6fc2b0]'> 
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.twitter.com/_sreeri" target='_blank'>Twitter <FiTwitter size={30}/></a>
                </li>


                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:translate-x-[90px] duration-500 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={RESUME}  target='_blank'>Resume <BsFilePersonFill size={30}/></a>
                </li>
            </ul>
        </div>

        <div className={position < 800 ? 'hidden': 'fixed right-4 bottom-8 backtop'}>
            <Link to="home"  smooth={true} duration={500}>
                <BsFillArrowUpSquareFill size={25}/> 
            </Link>
            
        </div>
    </div>
  )
}

export default Navbar