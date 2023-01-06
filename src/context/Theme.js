import React, {useState} from "react";
export const ThemeContext = React.createContext(null);
export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(false)
    const onChangeTheme = () => {
        setTheme(!theme);
        document.body.className = !theme ? `dark` : '';
    }

    return (
        <ThemeContext.Provider value={{theme, onChangeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}