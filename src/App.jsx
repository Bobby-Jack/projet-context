
import { ThemeContextProvider } from './contexts/ThemeContext'
import { createBrowserRouter,RouterProvider  } from 'react-router-dom'
import Home from './Home'
import About from './About'
import './App.css'

function App() {


  const rooter = createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'about/',element:<About/>},
  ])

  return (
    <ThemeContextProvider>
      <RouterProvider router={rooter}/>
    </ThemeContextProvider>
  )
}

export default App
