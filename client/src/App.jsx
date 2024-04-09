import React,{ useState, createContext } from 'react'
import viteLogo from '/vite.svg'
import bar from './assets/bar.svg'
import './Styles/components/app.css'
import { Routes, Route, createBrowserRouter,
   createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Servicios from './components/Servicios'
import Contrato from './components/Contrato'
import Portafolio  from './components/Portafolio'

export const priceContext =createContext();


function App({routes}) {
  const [price, setprice] = useState(0);

  const [count, setCount] = useState(0)

  return (
    <priceContext.Provider value={{price, setprice}}>  
    <Navbar/>
   
   <Routes>

<Route index path='/' element={<Home/>}/>
<Route path='/servicios' element={<Servicios/>}/>
<Route path='/contrato/:id' element={<Contrato/>}/>
<Route path='/port' element={<Portafolio/>}/>



</Routes>
    
    </priceContext.Provider>
  )
}

export default App
