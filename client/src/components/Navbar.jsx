import { useState } from 'react'
import React from 'react'
import IconBars from '../assets/IconBars'
import {Link} from 'react-router-dom'
import { BrowserRouter, NavLink } from 'react-router-dom'
import '../Styles/components/navbar.css'

const Navbar = ()=> {

    const [click, setClick] = useState(false);
    const Handleclick =()=>(setClick(!click));
    
  return (  <>
    <div className=' navbar_container'>
    <Link className="enlace" to="/">WEBSERVICES</Link>

       <IconBars  className={!click ? "navtoggle" : "navtoggle-flip"} onClick={Handleclick}/>
       
   <div className={click? 'navlinks active' : "navlinks"}>
           
        <Link className="enlace" to="/servicios" onClick={Handleclick}>Servicios</Link>
        <Link className="enlace" to="/port" onClick={Handleclick}>Portafolio</Link>
        <Link className="enlace" to="/contrato"onClick={Handleclick}>CONTRATAR</Link>
        <Link className="enlace" to="/portfolio" >CONTACTAR</Link>

           </div>
          
    </div>
    
</>
  )
}

export default Navbar;