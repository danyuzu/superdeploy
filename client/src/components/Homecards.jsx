

import React,{useContext, useState} from 'react';
import PayPal from './PayPal';
//import '"../node_modules/bootstrap/scss/bootstrap";'
import { priceContext } from '../App';
import '../Styles/components/homecards.css'
import {items} from './Alldata'
import { Link } from 'react-router-dom';


const Homecards =()=>
{


  const [checkout, setcheckout] = useState(false);
const filtereditems = items.filter(item => item.id <= 3)
const {price, setprice} = useContext(priceContext);
    return(<div className='homecard-container px-4'> 


<div className='row'>

  {
    filtereditems.map((item)=>(

      <div className="col">
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

    {/* {checkout ?  (  <PayPal/>
  ) : (  <button className='contratar' onClick={() => {setcheckout(true), setprice(13999.00)}}> 
 CONTRATAR</button>)} */}

<button className='contratar' onClick={() =>{} }> 
<Link className='enlace' to={`/contrato/${item.id}`}> CONTRATAR</Link>
</button>
      
          </div>
    </div>
     ) )
  }
       
        </div>
        </div>)
    
}

export default Homecards;