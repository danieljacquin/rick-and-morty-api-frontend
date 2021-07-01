import React, { useLayoutEffect, useReducer } from 'react'
import Navbar from './components/navbar/Navbar'
import { ContextDarkMode } from './contexts/contextDarkMode/ContextDarkMode'
import { reducerDarkMode } from './contexts/contextDarkMode/reducerDarkMode'

const init = () => {
    
    return JSON.parse(localStorage.getItem('dark')) || { dark: false }
}

const App = () => {

    const [darkMode, dispatch] = useReducer(reducerDarkMode, {}, init)

    useLayoutEffect(() => {
        console.log('entre')
        localStorage.setItem('dark', JSON.stringify(darkMode));
        if(darkMode.dark){
            document.documentElement.setAttribute('data-theme', 'dark');
        }else{
            document.documentElement.setAttribute('data-theme', 'light');
        }
        
    },[darkMode])

    return (
        <div>
            <ContextDarkMode.Provider value={{darkMode, dispatch}}>
                <Navbar/>
            </ContextDarkMode.Provider>
        </div>
    )
}

export default App
