import React from 'react'
import aboutImage from '../assets/evans.jpg'
import robbie from '../assets/robbie.jpg'
import { useThemeContext } from '../context/ThemeContex'
const About = () => {
    const {theme} =  useThemeContext()
  return (
    <div className='rounded-div drop-shadow-xl '>
        <h3 className='text-3xl font-bold py-8 px-4 text-center md:text-left underline underline-offset-8 decoration-teal-400 durarion-300 '>About</h3>
        <div className='grid md:grid-cols-2 gap-4 px-4 group py-16 '>
            <div className={` ${theme === 'dark' ? 'border-teal-500 group-hover:shadow-teal-500 ': 'border-primary group-hover:shadow-gray-900/70  '} border-4 group-hover:shadow-xl w-[200px] md:w-[300px] mx-16  rounded-xl`}>
                <img className='w-full h-full -rotate-45 hover:rotate-0 rounded-xl duration-300' src={theme === 'dark' ? aboutImage : robbie} alt="/" />
            </div>
            <div className='py-10 md:pl-10 lg:pl-0 '>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque modi quaerat neque sequi fuga corrupti est voluptate eaque doloribus ducimus praesentium, omnis ut facilis aperiam rem quidem nobis fugiat necessitatibus dolorum asperiores dolore et. Ex, voluptas vero possimus nesciunt neque delectus esse accusantium quaerat saepe quam expedita consequatur eius.</p>
            </div>
        </div>
    </div>
  )
}

export default About