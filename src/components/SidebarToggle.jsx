import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import {RxCross2} from 'react-icons/rx'
import { useGlobalContext } from '../context/GlobalContext'
import { useThemeContext } from '../context/ThemeContex'
const SidebarToggle = () => {
    const {theme} = useThemeContext()
    const {nav, handleNav} = useGlobalContext()
  return (
    
        <div onClick={handleNav}>
        <div className= {`${theme === 'dark'? 'bg-[var(--primary-light)] ' : 'bg-[var(--primary-dark)]'} z-50 top-[70%] left-[80%] shadow-2xl  my-2 fixed flex flex-col justify-center text-btnText items-center w-12 h-12 rounded-full md:hidden ease-in duration-300`}>
        <div className='transition-all duration-700 delay-100'>
     {nav? (<div><RxCross2 className='text-xl '/></div>):   
      (<div className='m-0'>
          <IoIosArrowUp className=' text-xl  '/>
          <IoIosArrowDown className=' text-xl  '/>

          </div>)}
          </div>
          </div>
        </div>
  
  )
}

export default SidebarToggle