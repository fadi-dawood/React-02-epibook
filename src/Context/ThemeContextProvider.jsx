import React, { createContext, useState } from 'react'

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState("dark");

    const value = {
        theme,
        setTheme
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}
