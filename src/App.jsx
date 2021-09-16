import React, { useLayoutEffect, useReducer } from 'react'
import DashboardRoute from './routers/DashboardRoute'
import { ContextDarkMode } from './contexts/contextDarkMode/ContextDarkMode'
import { reducerDarkMode } from './contexts/contextDarkMode/reducerDarkMode'

const init = () => {
    
    return JSON.parse(localStorage.getItem('dark')) || { dark: false }
}

const App = () => {

    const [darkMode, dispatch] = useReducer(reducerDarkMode, {}, init)

    useLayoutEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkMode));
        if(darkMode.dark){
            document.documentElement.setAttribute('data-theme', 'dark');
        }else{
            document.documentElement.setAttribute('data-theme', 'light');
        }
        
    },[darkMode])

    return (
        <div className="rickandmortyapi">
            <ContextDarkMode.Provider value={{darkMode, dispatch}}>
                <DashboardRoute/>
            </ContextDarkMode.Provider>
        </div>
    )
}

export default App
