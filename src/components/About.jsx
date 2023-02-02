import React from 'react'
import aboutImage from '../assets/evans.jpg'
import robbie from '../assets/robbie.jpg'
import { useThemeContext } from '../context/ThemeContex'
const About = () => {
    const {theme} =  useThemeContext()
  return (
    <div className='rounded-div drop-shadow-xl ' id='about'>
        <h3 className='text-3xl font-bold py-8 px-4 text-center md:text-left underline underline-offset-8 decoration-teal-400 durarion-300 '>About</h3>
        <div className='grid md:grid-cols-2 gap-4 px-4 group py-16 items-center justify-center'>
            <div className={` ${theme === 'dark' ? 'group-hover:border-teal-500 border-none group-hover:shadow-teal-500 ': 'border-primary group-hover:shadow-gray-900/70  '} group-hover:shadow-xl w-[200px] md:w-[300px] mx-16 bg-gradient-to-tr from-teal-500 to-[var(--color-bg-primary)]  rounded-xl`}>
                <img className='w-full h-full -rotate-[45deg] hover:rotate-0 rounded-xl duration-300' src={theme === 'dark' ? aboutImage : robbie} alt="/" />
            </div>
            <div className='py-10 md:pl-10 lg:pl-0 '>
               <p>React developer with a great passion for accessibility and creating excellent sites. I’m passionate about software development and look forward to working on new projects in the near future. Over the years, I have worked with professionals in this field to produce in-house and off-the-shelf software and applications.</p>
            </div>
        </div>
    </div>
  )
}

export default About