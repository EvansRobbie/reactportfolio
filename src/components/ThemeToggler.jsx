import React from 'react'
import {HiSun, HiMoon} from 'react-icons/hi'
import { useThemeContext } from '../context/ThemeContex'
const ThemeToggler = () => {
    const { theme, themeToggle} = useThemeContext()
  return (
    <div>
        {theme === 'dark' ? (
            <div onClick={themeToggle} className='flex items-center'>
                <HiSun size={25} className='mr-2'/> Light Mode
            </div>
        ) : (<div onClick={themeToggle}  className='flex items-center'>
            <HiMoon size={25} className='mr-2'/> Dark Mode
        </div>)}
    </div>
  )
}

export default ThemeToggler