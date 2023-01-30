import React from 'react'

const Hero = () => {
  return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center w-full my-10'>
            <h6 className='text-sm font-semibold italic'>Lets Build Together</h6>
            <h1 className='text-4xl py-4'> Hello, I'm <span className='text-accent font-bold'>Robbie</span></h1>
            <h3 className='text-xl font-semibold py-4 '>React Developer</h3>
            <p className='max-w-[400px] md:max-w-[600px] text-center mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae incidunt quibusdam delectus fuga, deserunt necessitatibus voluptatum architecto. Labore doloribus adipisci inventore aliquam animi! Pariatur inventore ab velit vel! Voluptatem, dolorum!</p>
        <div className='flex gap-2 py-16'>
            <button className='hover:border-l-8 hover:border-t-8 border-accent hover:border-teal-500'>Download Cv</button>
            <button className='bg-button text-btnText hover:scale-105 transition'><a href="#contact">View Work</a></button>
        </div>
       
    </div>
  )
}

export default Hero