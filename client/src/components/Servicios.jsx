import React ,{useState} from 'react'
import { BsTools } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { GrHost } from "react-icons/gr";
import { FaFileUpload } from "react-icons/fa";
import Footer from './Footer';
import img from '/src/assets/images/landing.png'
import { Link } from 'react-router-dom';
import Wa from '/src/assets/whatsapp-svgrepo-com.svg'


const Servicios = () => {

const [abrir, setabrir] =useState('');
  
const open = () =>{
setabrir((i)=>i=" open-modal")
return( console.log("open"))
}

const cerrar =() =>{
setabrir((i)=>i=" close-modal")
return( console.log("close"))
  
}

  return (
    <div className='servicios_container'>


<div className='hero'>
  
<div ><p className='static-text'> Diseño y Desarrollo de
   páginas web y landing pages:</p></div>

  <nav>
  
  <div className='wrapper'>


   <ul className='dynamic-txts'>
    <li><span>funcionales</span></li>
    <li><span>intuitivas</span></li>
    <li><span>atractivas</span></li>
    <li><span>modernas</span></li>

   </ul>
</div>
<BsTools className='toolicon'/>
  </nav>
</div>

<div className='first-card'>  
  <p>Creamos paginas web  y landing pages atractivas, modernas, 
    optimizadas, responsivas y compatibles con computadoras de 
    escritorio y dispositivos moviles (smartphones y tablets).
    <br></br>
    Todas las paginas web y landing pages que desarrollamos cuentan 
    con las siguientes caracteristicas:

    
    </p>

    <ul>
      <li>✅ 100% compatibles con computadoras de escritorio y dispositivos moviles.</li>
      <li>✅ Optimizacion para motores de busqueda y posicionamiento en Google.
        <li>✅ Boton de whatsapp</li>
        <li>✅ Formulario de Contacto</li>
        <li>✅ Enlace a Redes Sociales</li>
        <li>✅ Metodos de Contacto</li>
      </li>
    </ul>
     
    <Link  to="/contrato"> <button> !Contrata ahora</button></Link>
</div>

<img className='landing' src={img}/>



{/* <button className='wabtn' onClick={open}>whatsapp</button> */}



<div className={`modal-overlay +  ${abrir}`}>
<div className='modal-container' >
  <div className='modulo'>
<h1>Como te podemos ayudar?</h1>


<select className='options'>
  <option>Landing Page</option>
  <option>Pagina Web</option>
  <option>Tienda en linea</option>
  <option>Cotizador y pedidos en linea</option>
  <option>Software a la medida</option>
  <option>Web hosting</option>
  <option>Registro de dominios</option>

</select>

<button className='send-btn'>Enviar mensaje</button>
<button className='close-btn' onClick={cerrar}>close</button>
</div>
</div>
</div>

<img className='wabtn'  src={Wa} onClick={open}/>

  
<div className='first-card'>  
  <p>Diseñamos y Desarrollamos tu pagina web, landing page, sistema en la nube y software a la medida
    <br></br>
  Te ayudamos a desarrollar tu proyecto:
    
    </p>

    <ul>
      <li>Landing page (Desde <span>$7000 MXN + IVA)</span></li>
      <li>Pagina Web informativa/ corporativa (Desde <span>$15,000MXM+ IVA</span>)</li>
        <li>Aplicacion web a la medida (en base a tus necesidades)</li>
        <li>Catalogos de producto y servicios</li>
        <li>Cotizador en linea</li>
        <li>Tiendas en linea</li>
        <li>ERP Y CRM</li>
        <li>Agenda y Reservas en linea</li>
        <li>Blog</li>
        <li>Sistema de pagos en linea (Paypal, Tarjetas, SPEI, Mercado Pago, OXXO, 7-eleven, stripe)</li>
        <li>API's/ Webservice</li>

      
    </ul>
    <button> !Contrata ahora!</button>
</div>

<div className='extra-services'>
   <h1>SOMOS LOS MEJORES EN:</h1>
 <h2>Nuestros servicios adicionales</h2>
 <h2>Contrata nuestros servicios adicionales  (Desde<span>$599/Mes</span>)</h2>

<div className='row'>

   <div className='col'>

      <MdMiscellaneousServices className='icon'/>
<h1>Mantenimiento</h1>
<p>Nos mantenemos disponibles para agregar nuevos productos a tu inventario 
y  modificar precos, paquetes especiales, promocionales, descuentos por fechas festivas.</p>
      
   </div>

   <div className='col'>

<GrHost  className='icon'/>
<h1>Alojamiento</h1>
<p>Ofrecemos alojamiento para que tu sitio este activo y  cualquier usuario
pueda acceder y adquirir tus productos desde todos los dispositivos</p>

</div>

<div className='col'>

<FaFileUpload className='icon'/>
<h1>Modificacion</h1>
<p>Modificacion mensual de precios, cantidades en stock de cada producto, Diseño 
basico, actualizacion de contenido visual.</p>

</div>
</div>
   </div>
   <Footer/>
    </div>
  )
}

export default Servicios;