import React from 'react'
const today = new Date()
const Footer = () => {
  return (
    <div className='max-w-[1140px] border-t-2 border-teal-500 px-4 py-16 mx-auto'>
        <div>
            <p className='text-center text-xl'>&copy; Copyright Robbievans <span className='text-teal-500'>{today.getFullYear()}</span></p>
        </div>
    </div>
  )
}

export default Footer