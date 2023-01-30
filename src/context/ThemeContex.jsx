import { useState,useEffect, useContext, createContext} from 'react'

// store theme in local storage when selected
const getInitialTheme = () =>{
    if(typeof window !== 'undefined' && window.localStorage){
        const storedPref = window.localStorage.getItem('color-theme')
        if (typeof storedPref === 'string'){
            return storedPref
        }
        const useMedia = window.matchMedia('(prefs-color-scheme: dark)')
        if(useMedia.matches){
            return 'dark'
        }
    }
    return 'light'
}
const ThemeContext = createContext()
const ThemeContexProvider = ({initialTheme, children}) => {
    const [theme, setTheme] = useState(getInitialTheme)

    const rawSetTheme = (theme) =>{
        const root = window.document.documentElement;
        const isDark = theme === 'dark'
        root.classList.remove(isDark ? 'light': 'dark')
        root.classList.add(theme)

        localStorage.setItem('color-theme', theme)
    }
    if(initialTheme){
        rawSetTheme(initialTheme)
    }
    //It should only run whenever there is a change in theme
    useEffect(()=>{
        rawSetTheme(theme)
    }, [theme])

    const themeToggle = () =>{
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }
  return (
    <ThemeContext.Provider value = {{theme, themeToggle}}>
        {children}
    </ThemeContext.Provider>
  )
}
export const useThemeContext = () =>{
    return useContext(ThemeContext)
}
export default ThemeContexProvider