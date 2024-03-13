import { Link } from "react-router-dom"
import myContext from "./contexts/ThemeContext"
import { useContext } from "react"

export default function About() {
    const {theme, changerTheme} = useContext(myContext)
    

    return (
        <div className={theme}>
        <Link to='/'>go to Home</Link>
            <h1>
                About PAGE
            </h1>
            <h2>theme: {theme}</h2>
            <button onClick={()=>{changerTheme()}}>change theme</button>

        </div>
    )
}