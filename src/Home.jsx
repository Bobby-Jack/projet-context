import { useContext } from "react"
import myContext from "./contexts/ThemeContext"
import { Link } from "react-router-dom"

export default function Home() {
    const {theme, changerTheme} = useContext(myContext)

   

    return (
        <div className={theme}>
            <Link to='about'>go to about</Link>
            <h1>
                Home PAGE
            </h1>
            <h2>theme: {theme}</h2>
            <button onClick={()=>{changerTheme()}}>change theme</button>
        </div>
    )
}