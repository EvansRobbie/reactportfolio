import React from 'react'
import {FaFacebookF, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

const Contacts = () => {
  return (
    <div id='contact' className='rounded-div drop-shadow-xl my-20'>
        <h2 className='text-3xl font-bold py-8 px-4 text-center md:text-left underline underline-offset-8 decoration-teal-400 durarion-300 '>Contact</h2>
        <div className='grid md:grid-cols-2 '>
            <div className='flex flex-row md:flex-col  items-center justify-between gap-y-4 mb-10'>
                <div className='rounded-div w-[100px] group  h-[100px] md:w-[150px] md:h-[150px] flex items-center justify-center hover:border-4  hover:shadow-teal-500 duration-300 hover:drop-shadow-xl'>
                    <FaLinkedin size={30} className=' group-hover:scale-110 duration-300 ease-in delay-100'  />
                </div>
                <div className='rounded-div w-[100px] group h-[100px] md:w-[150px] md:h-[150px] flex items-center justify-center hover:border-4  hover:shadow-teal-500 duration-300 hover:drop-shadow-xl'>
                    <FaWhatsapp size={30} className=' group-hover:scale-110 duration-300 ease-in delay-100'  />
                </div>
                <div className='rounded-div w-[100px] group  h-[100px] md:w-[150px] md:h-[150px] flex items-center justify-center hover:border-4   hover:shadow-teal-500 duration-300 hover:drop-shadow-xl'>
                    <FaFacebookF size={30} className=' group-hover:scale-110  duration-300 ease-in delay-100'  />
                </div>
            </div>
                <form action="">
                    <div className='grid grid-cols-2 '>
                        <input type="text" placeholder='First Name' className=' border border-input rounded-xl p-2 m-2 ' />
                        <input type="text" placeholder='Last Name' className=' border border-input rounded-xl p-2 m-2 ' />
                        <input type="email" placeholder='email' className=' border border-input rounded-xl p-2 m-2 ' />
                        <input type="tel" placeholder='Phone' className= 'border border-input rounded-xl p-2 m-2 ' />
                        <input type="text" placeholder='Address' className='border border-input rounded-xl p-2 m-2 col-span-2 ' />
                        <textarea cols="30" rows="10" placeholder='Enter Message..' className=' rounded-xl border-input border col-span-2 p-2 m-2'/>
                        <button className='col-span-2 m-4 shadow-xl hover:scale-105 duration-300'>Submit</button>
                    </div>
                </form>
            
        </div>
    </div>
  )
}

export default Contacts