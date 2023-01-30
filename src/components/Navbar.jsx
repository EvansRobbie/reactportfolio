import React from 'react'
import ThemeToggler from './ThemeToggler'
import light from '../assets/light.png'
import dark from '../assets/dark.png'
import { useThemeContext } from '../context/ThemeContex'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import {BsAwardFill} from 'react-icons/bs'
import {RiComputerFill} from 'react-icons/ri'
import { useGlobalContext } from '../context/GlobalContext'
const Navbar = () => {
    const {theme} = useThemeContext()
    const {nav} = useGlobalContext()
    
  return (
    <div className=''>
       <div  className=' rounded-div flex items-center justify-between h-20 py-14 z-20 '>
        <div>
            <img className='w-[200px] h-full object-cover' src={theme === 'dark' ? light : dark} alt="/" />
        </div>
        <ThemeToggler/>

        {/* Mobile Menu */}
        <div className={`${nav ? 'left-0 duration-300' : '-left-full duration-500' } md:hidden absolute top-0  w-full h-screen z-20 bg-primary ease-in delay-100 `}>
            <div className='flex flex-col justify-center items-center w-full h-full'>
            <ul className=''>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#techstack">Tech Stack</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <ThemeToggler />
            </div>
        </div>
       </div>
        {/* Main menu */}
        <div className='hidden absolute top-[30%] left-0 md:flex flex-col z-50 '>
           <ul className='duration-300 ease-in delay-100'>
            <li className='w-[160px] mx-auto h-[20px] flex items-center ml-[-100px] hover:text-accent md:hover:ml-[10px] duration-300 ease-in'>
                <a href="/" className='flex items-center justify-between w-full text-2xl'> Home<AiFillHome size={30} className= {`${theme === 'dark' ? 'bg-[var(--primary-light)]': 'bg-[var(--primary-dark)]' } text-btnText rounded-full p-1 w-10 h-10 `}/>
                </a>
            </li>
            <li className='w-[160px] m-auto h-[20px] flex items-center  ml-[-100px] hover:text-accent md:hover:ml-[10px] duration-300 ease-in'>
                <a href="#about"  className='flex items-center justify-between w-full text-xl '>About<RiComputerFill size={30} className= {`${theme === 'dark' ? 'bg-[var(--primary-light)]': 'bg-[var(--primary-dark)]' } text-btnText rounded-full p-1 w-10 h-10 `}/>
                </a>
            </li>
            <li className='w-[180px] mx-auto h-[20px] flex items-center justify-between hover:text-accent ml-[-120px]  md:hover:ml-[10px] duration-300 ease-in'>
                <a href="#techstack"  className='flex items-center justify-between w-full  text-xl '>Tech Stack<FaCode size={30} className= {`${theme === 'dark' ? 'bg-[var(--primary-light)]': 'bg-[var(--primary-dark)]' } text-btnText rounded-full w-10 h-10`}/> 
                </a>
            </li>
            <li className='w-[160px] mx-auto h-[20px] flex items-center justify-between hover:text-accent ml-[-100px] md:hover:ml-[10px] duration-300 ease-in'>
                <a href="#portfolio"  className='flex items-center justify-between w-full  text-xl '>PortFolio<BsAwardFill size={30} className= {`${theme === 'dark' ? 'bg-[var(--primary-light)]': 'bg-[var(--primary-dark)]' } text-btnText rounded-full p-1 w-10 h-10 `}/> 
                </a>
            </li>
            <li className='w-[160px] mx-auto h-[20px] flex items-center justify-between hover:text-accent ml-[-100px] md:hover:ml-[10px] duration-300 ease-in'>
                <a href="#contact"  className='flex items-center justify-between w-full  text-xl '>Contact<IoMdContact size={30} className= {`${theme === 'dark' ? 'bg-[var(--primary-light)]': 'bg-[var(--primary-dark)]' } text-btnText rounded-full p-1 w-10 h-10 `}/> 
                </a>
            </li>
           </ul>
          
        </div>
        {/* Social Icons */}
        <div className='absolute top-[40%] flex flex-col justify-between z-10 right-0'>
           <ul >
            <li className='w-[130px] mx-auto h-[20px] flex items-center mr-[-70px] hover:text-accent md:hover:mr-[10px] duration-300 ease-in'>
                <a href="/" className='flex items-center justify-between w-full text-base'><FaLinkedin size={30}/>LinkedIn 
                </a>
            </li>
            <li className='w-[114px] m-auto h-[20px] flex items-center  mr-[-54px] hover:text-accent md:hover:mr-[10px] duration-300 ease-in'>
                <a href="/"  className='flex items-center justify-between w-full text-base '><FaGithub size={30}/> GitHub
                </a>
            </li>
            <li className='w-[150px] mx-auto h-[20px] flex items-center justify-between hover:text-accent mr-[-90px]  md:hover:mr-[10px] duration-300 ease-in'>
                <a href="/"  className='flex items-center justify-between w-full text-base '><FaInstagram size={30}/>Instagram 
                </a>
            </li>
            <li className='w-[110px] mx-auto h-[20px] flex items-center justify-between hover:text-accent mr-[-55px] md:hover:mr-[10px] duration-300 ease-in'>
                <a href="/"  className='flex items-center justify-between w-full text-base '><FaTwitter size={30}/>Twitter 
                </a>
            </li>
           </ul>
          
        </div>
        
    </div>
  )
}

export default Navbar