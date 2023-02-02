import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import CV from '../assets/Evanrobby.pdf'


const Hero = () => {
  return (
    <div className='w-full h-screen mx-auto'>
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center w-full mt-20 max-w-[500px]'>
            <h6 className='text-sm font-semibold italic'>Lets Build Together</h6>
            <h1 className='text-4xl py-4'> Hello, I'm <span className='text-accent font-bold'>Robbie</span></h1>
            <h3 className='text-xl font-semibold py-4 '>React Developer</h3>
            <p className='max-w-[350px] md:max-w-[600px] text-center md:text-base'>I'm a Frontend Developer Specializing in building ( and occationally designing) exceptional digital experience. Currently, 
              I'm focused on building responsive frontend applications.
            </p>
        <div className='flex gap-2 py-16'>
            <button className='hover:border-l-8 hover:border-r-8 border-accent hover:border-teal-500 duration-300'>
              <a href={CV} download>Download CV</a>
            </button>
            <div className=' border border-secondary bg-button px-2 rounded-xl group shadow-2xl text-btnText hover:scale-105 transition flex items-center justify-between gap-2'>
                <div>
                <a href="#contact">Let's talk </a>
                </div>
                <BsArrowRight size={20} className='group-hover:rotate-90 transition transform origin-left duration-300'/>
            </div>
        </div>
    </div>
     
    </div>
  )
}

export default Hero