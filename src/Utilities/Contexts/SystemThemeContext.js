import React, { createContext, useEffect, useState } from 'react'

export const SystemThemeContext = createContext();

const SystemThemeProvider = ({ children }) => {
    const [systemTheme, setSystemTheme] = useState('light');

    const setCurrentTheme = () => {
        if (localStorage.getItem('selected-theme') === 'light') {
            document.documentElement.setAttribute('selected-theme', 'light');
            localStorage.setItem('selected-theme', 'light');
            setSystemTheme('light');
        } else if (localStorage.getItem('selected-theme') === 'dark') {
            document.documentElement.setAttribute('selected-theme', 'dark');
            localStorage.setItem('selected-theme', 'dark');
            setSystemTheme('dark');
        } else if (localStorage.getItem('selected-theme') === null) {
            document.documentElement.setAttribute('selected-theme', 'light');
            localStorage.setItem('selected-theme', 'light');
            setSystemTheme('light');
        }
    }

    const changeSystemTheme = () => {
        if (localStorage.getItem('selected-theme') === 'light') {
            document.documentElement.setAttribute('selected-theme', 'dark');
            localStorage.setItem('selected-theme', 'dark');
            setSystemTheme('dark');
        } else if (localStorage.getItem('selected-theme') === 'dark') {
            document.documentElement.setAttribute('selected-theme', 'light');
            localStorage.setItem('selected-theme', 'light');
            setSystemTheme('light');
        }
    }

    const getCurrentTheme = () => {
        return systemTheme;
    }

    useEffect(() => {
        setCurrentTheme();
    }, [])

    const methods = { changeSystemTheme, getCurrentTheme, setCurrentTheme, systemTheme };

    return (
        <SystemThemeContext.Provider value={ methods }>
            { children }
        </SystemThemeContext.Provider>
    )
}

export default SystemThemeProvider