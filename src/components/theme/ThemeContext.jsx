// importing necessary modules
import { createContext, useContext, useState } from "react";

// Creating context
const themeContext=createContext();

// Accessing theme context value
function useThemeValue(){
    const value=useContext(themeContext);
    return value;
}

// theme context function
function ThemeContext({children}){
    const [theme,setTheme]=useState('light');

    // Function that toggles the theme between light and dark
    const toggleTheme=()=>{
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return(
        <>
            <themeContext.Provider value={{theme,setTheme,toggleTheme}}>
                {children}
            </themeContext.Provider>
        </>
    )
}

// named export statement
export {useThemeValue};

// default export statement
export default ThemeContext;
