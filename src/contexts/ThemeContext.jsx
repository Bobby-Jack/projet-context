import { createContext, useState } from "react";

//mon context
const myContext = createContext({
    theme: '',
    changerTheme: ()=>{}
})




export default myContext

//mon component Provider
function ThemeContextProvider({children}) {
    const [themeState, setThemeState] = useState("dark")

    const handleTheme = ()=>{
        if (themeState == 'dark') {
            setThemeState('light')
        }else{
            setThemeState('dark')
        }
    }

    return (
        <myContext.Provider value={{theme: themeState, changerTheme:handleTheme}}>
            {children}
        </myContext.Provider>
    )
}

export {ThemeContextProvider}


