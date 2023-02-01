import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {IoIosBrowsers} from 'react-icons/io'
import {PortfolioData} from '../data/PortfolioData'

const Portfolio = () => {
    const portfolioElement = PortfolioData?.map((item) =>{
        const {id, image} = item
        return(
            <div key={id} className=' w-[320px] h-[200px] lg:w-full lg:h-full relative mx-auto my-6 rounded-xl border-primary  overflow-hidden group shadow-2xl hover:shadow-teal-500'>
            <div className='w-full h-[80%] lg:h-[70%] absolute -bottom-full group-hover:bottom-0 left-0  group-hover:bg-gradient-to-tr from-teal-500 to-[var(--color-bg-primary)]  duration-300 ease-in z-10'/>
                <img className='w-full h-full object-cover group-hover:translate-y-[-50px] duration-300 ease-in group-hover:blur-sm' src={image} alt="/" />
            
            <div className='absolute -bottom-full z-50 left-0 group-hover:bottom-[10px] duration-300'>
            
            <p className='text-primary w-full px-8 py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, reiciendis!</p>
            <div className='flex gap-4 px-8 lg:pb-2'>
                <div className='flex gap-2 bg-primary hover:border-l-4 hover:border-r-4 border-white justify-between items-center rounded-2xl px-2 py-3 duration-300'><a href="/" className='text-sm'>Sourcecode</a><FaGithub size={20}/></div>
                <div className='flex gap-2  bg-primary justify-between items-center rounded-2xl px-2 py-3 hover:scale-105 duration-300'><a href="/" className='text-sm'>Website</a><IoIosBrowsers size={20}/></div>
            </div>
        </div>
        </div>
        )
    })
  return (
    <div className='rounded-div drop-shadow-xl'>
        <h2 className='text-3xl font-bold py-8 px-4 text-center md:text-left underline underline-offset-8 decoration-teal-400 durarion-300 '>Portfolio</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {portfolioElement}
        </div>
    </div>
  )
}

export default Portfolio