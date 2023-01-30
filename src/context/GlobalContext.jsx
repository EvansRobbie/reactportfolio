import {useContext, createContext, useState} from 'react'
const GlobalContext = createContext()
const GlobalContextProvider = ({children}) => {
    const [nav, setNav] =  useState()
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <GlobalContext.Provider value={{nav, handleNav}}>
        {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}
export default GlobalContextProvider