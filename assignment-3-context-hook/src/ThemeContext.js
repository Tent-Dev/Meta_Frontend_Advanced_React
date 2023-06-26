import { createContext, useContext, useState } from "react";

const themeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    }

    return <themeContext.Provider value={{ theme, toggleTheme }}>{ children }</themeContext.Provider>
};

export const useTheme = () => useContext(themeContext);
