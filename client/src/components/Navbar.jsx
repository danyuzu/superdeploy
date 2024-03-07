import { useState } from 'react'
import React from 'react'
import IconBars from '../assets/IconBars'
import {Link} from 'react-router-dom'
import { BrowserRouter, NavLink } from 'react-router-dom'

const Navbar = ()=> {

    const [click, setClick] = useState(false);
    const Handleclick =()=>(setClick(!click));

  return (  <>
    <div className=' navbar_container'>
    <Link className="enlace" to="/">WEBSERVICES</Link>
       <IconBars  className={!click ? "navtoggle" : "navtoggle-flip"} onClick={Handleclick}/>
             
   <div className={click? 'navlinks active' : "navlinks"}>
           
        <Link className="enlace" to="/servicios">Servicios</Link>
        <Link className="enlace" to="/login">Portafolio</Link>
        <Link className="enlace" to="/register">Acerca De</Link>
        <Link className="enlace" to="/portfolio">CONTACTAR</Link>

           </div>
          
    </div>
    
</>
  )
}

export default Navbar;