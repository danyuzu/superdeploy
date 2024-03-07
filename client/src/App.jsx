import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import bar from './assets/bar.svg'
import './Styles/styles.scss'
import { Routes, Route, createBrowserRouter,
   createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Servicios from './components/Servicios'
import Contrato from './components/Contrato'


function App({routes}) {

  const [count, setCount] = useState(0)

  return (
    <>  
    <Navbar/>
   
   <Routes>

<Route index path='/' element={<Home/>}/>
<Route path='/servicios' element={<Servicios/>}/>
<Route path='/contrato' element={<Contrato/>}/>


</Routes>
    
    </>
  )
}

export default App
