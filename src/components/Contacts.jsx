import React, { useRef } from 'react'
import {FaFacebookF, FaWhatsapp} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import emailjs from 'emailjs-com';

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('SERVICE_ID ', 'TEMPLATE_ID', form.current, 'PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset()
    };
  return (
    <div id='contact' className='rounded-div drop-shadow-xl my-20'>
        <h2 className='text-3xl font-bold py-8 px-4 text-center md:text-left underline underline-offset-8 decoration-teal-400 durarion-300 '>Contact</h2>
        <div className='grid md:grid-cols-2 '>
            <div className='flex flex-row md:flex-col  items-center justify-between gap-y-4 mb-10'>
                <div className='rounded-div w-[100px] group  h-[100px] md:w-[150px] md:h-[150px] flex flex-col items-center justify-center hover:border-4  hover:shadow-teal-500 duration-300 hover:drop-shadow-xl'>
                    <HiOutlineMail size={30} className=' group-hover:scale-110 duration-300 ease-in delay-100'  />
                    <h4 className='hidden md:block text-xs py-2'>Evanrobby Macharia</h4>
                    <a href="mailto:evansrobbie5311@gmail.com" target ='_blank'  rel="noreferrer" className='text-sm hidden md:block text-teal-500'>Send a message</a>
                </div>
                <div className='rounded-div w-[100px] group h-[100px] md:w-[150px] md:h-[150px] flex flex-col items-center justify-center hover:border-4  hover:shadow-teal-500 duration-300 hover:drop-shadow-xl'>
                    <FaWhatsapp size={30} className=' group-hover:scale-110 duration-300 ease-in delay-100'  />
                    <h4 className='hidden md:block text-sm py-2'>+254 704 563 123</h4>
                    <a href="https://wa.me/254704563123" target ='_blank'  rel="noreferrer" className='text-sm hidden md:block text-teal-500'>Send a message</a>
                </div>
                <div className='rounded-div w-[100px] group  h-[100px] md:w-[150px] md:h-[150px] flex flex-col items-center justify-center hover:border-4   hover:shadow-teal-500 duration-300 hover:drop-shadow-xl'>
                    <FaFacebookF size={30} className=' group-hover:scale-110  duration-300 ease-in delay-100'  />
                    <h4 className='hidden md:block text-sm py-2'>Evans Robbie</h4>
                    <a href="/" className='text-sm hidden md:block text-teal-500'>Send a message</a>
                </div>      
            </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='grid grid-cols-2 '>
                        <input type="text" name='first' placeholder='First Name' className=' border border-input rounded-xl p-2 m-2 bg-white/10 ' required />
                        <input type="text" name='last' placeholder='Last Name' className=' border border-input rounded-xl p-2 m-2  bg-white/10' required />
                        <input type="email" name='email' placeholder='email' className=' border border-input rounded-xl p-2 m-2 bg-white/10 ' required />
                        <input type="tel" name='phone' placeholder='Phone' className= 'border border-input rounded-xl p-2 m-2 bg-white/10 ' required />
                        <input type="text" name='address' placeholder='Address' className='border border-input bg-white/10  rounded-xl p-2 m-2 col-span-2 ' required />
                        <textarea cols="30" rows="10" name='message' placeholder='Enter Message..' className=' rounded-xl bg-white/10 border-input border col-span-2 p-2 m-2' required/>
                        <button className='col-span-2 m-4 shadow-xl hover:scale-105 duration-300'>Submit</button>
                    </div>
                </form>
            
        </div>
    </div>
  )
}

export default Contacts