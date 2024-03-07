
import React from "react";
import Homecards from "./Homecards";
import { MdMiscellaneousServices } from "react-icons/md";
import { GrHost } from "react-icons/gr";
import { FaFileUpload } from "react-icons/fa";
import Footer from "./Footer";

const Contrato =()=>{


    return(
        <div className="contrato-container">
<Homecards/>


<div className='extra-services'>

 <h1>Contrata nuestros servicios adicionales  (Desde<span>$599MX/mes</span>)</h1>

 <div class="container px-2 py-4">
<div className='row gx-10'>

   <div className='col'>
    <div className="p-3">

      <MdMiscellaneousServices className='icon'/>
<h1>Mantenimiento</h1>
<p>Nos aseguramos de hacer testing mensualmente para que tu sitio cargue de forma veloz y actualizamos las versiones de las herramientas.</p>
      
      <button>Contratar</button>
      </div>
   </div>

   <div className='col'>
   <div className="p-3">
<GrHost  className='icon'/>
<h1>Alojamiento</h1>
<p>Ofrecemos alojamiento para que tu sitio este activo y  cualquier usuario
pueda acceder y adquirir tus productos desde todos los dispositivos.</p>
<button>Contratar</button>
</div>
</div>

<div className='col'>
<div className="p-3">
<FaFileUpload className='icon'/>
<h1>Modificaciones</h1>
<p>Modificaciones personalizadas en el  diseño y posicionamiento de los features internos o dashboard del administrador
.</p>

<button>Contratar</button>
</div>
</div>
</div>
</div>
   </div>
   <Footer/>
        </div>
    )
}
export default Contrato;