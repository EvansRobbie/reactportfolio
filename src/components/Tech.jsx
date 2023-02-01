import React from 'react'
import { TechData } from '../data/TechData'
const Tech = () => {

    const techElement = TechData?.map((item)=>{
        const {id, image, name} = item
        return(
            <div key={id} className='rounded-div py-2 px-4 drop-shadow-xl w-[300px]  hover:scale-105 hover:shadow-teal-500 flex items-center justify-between'>
            <div className='w-[100px]  px-2 rounded-2xl overflow-hidden ' >
                <img className='w-full h-full object-cover ' src={image} alt={name} />
            </div>
            <p className='text-xl font-bold'>{name}</p>
        </div>
        )
    })
  return (
    <div className='rounded-div py-8 my-8  '>
        <h2 className='text-3xl font-bold py-8 px-4 text-center md:text-left underline underline-offset-8 decoration-teal-400 durarion-300 '>My Tech Stack</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-4'>

       {techElement}
        </div>
    </div>
  )
}

export default Tech