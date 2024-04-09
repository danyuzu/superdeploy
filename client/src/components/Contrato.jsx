
import React,{useContext,useState} from "react";
import Homecards from "./Homecards";
import { MdMiscellaneousServices } from "react-icons/md";
import { GrHost } from "react-icons/gr";
import { FaFileUpload } from "react-icons/fa";
import Footer from "./Footer";
import  '../Styles/components/contrato.css'
// import  '../Styles/components/homecards.css'
import { priceContext } from "../App";
import { useParams } from "react-router";
import { items } from "./Alldata";
import PayPal from "./PayPal";

const Contrato =()=>{

const {id} =useParams();
const filtereditems = items.filter((item)=> item.id === parseInt(id))
const {price, setprice} = useContext(priceContext);
const [checkout, setcheckout] = useState(false);

    return(<>
        <div className="contrato-container">

{filtereditems.map((item)=>(
    <div className='homecard-container px-4'> 



<div className='card'>    
    <p className='type'>{item.type}</p>
             
    <p className='price'>${item.price}</p>         
         

    <div className='caracteristics'> 
    
    <ul>
      <li>✅ Secciones: {item.secciones}</li>
      <li>✅ Revisiones y Cambios:{item.revisiones}</li>
      <li>✅ Chat, Formuslarios y Maps</li>
      <li>✅ Certificado SSL</li>
      <li>✅ Aceleracion y Responsiva</li>
      <li>✅ Manual de Uso</li>
      <li>✅ Hosting: {item.hosting}</li>
      <li>🆇 SEO On page</li>
      <li>🆇 Dominio</li>
      <li>✅ Tiempo de entrega: 3 a 4 semanas</li>




    </ul>
    </div>

{checkout ?  ( <div className="paypalbtns"> <PayPal/> </div>
  ) : (  <button className='contratar' onClick={() => {setcheckout(true), setprice(item.price)}}> 
 CONTRATAR</button>)}

    </div>

</div>
) )}


<div className='extra-services'>
<h3>servicio no disponible temporalmente</h3>
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

        </>
    )
}
export default Contrato;