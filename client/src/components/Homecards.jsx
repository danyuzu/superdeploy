

import React,{useContext, useState} from 'react';
import PayPal from './PayPal';
//import "../node_modules/bootstrap/scss/bootstrap";
import { priceContext } from '../App';

const Homecards =()=>
{

  const [checkout, setcheckout] = useState(false);

const {price, setprice} = useContext(priceContext);
    return(<div className='homecard-container px-3'> 


<div className='row'>
        <div className="col">
          <div className='card'>    
              <p className='type'>Prime</p>
                       
              <p className='price'>$13,999 mx</p>         
                   
    
              <div className='caracteristics'> 
              
              <ul>
                <li>✅ Secciones: 3</li>
                <li>✅ Revisiones y Cambios:3</li>
                <li>✅ Correos Corporativos: 5</li>
                <li>✅ Cupon en publicidad digital: 15% OFF</li>
                <li>✅ Chat, Formuslarios y Maps</li>
                <li>✅ Certificado SSL</li>
                <li>✅ Aceleracion y Responsiva</li>
                <li>✅ Manual de Uso</li>
                <li>✅ Hosting: 3 meses</li>
                <li>🆇 SEO On page</li>
                <li>🆇 Dominio</li>
                <li>✅ Tiempo de entrega: 3 a 4 semanas</li>
    
    
    
    
              </ul>
              </div>

        {checkout ?  (  <PayPal/>
      ) : (  <button className='contratar' onClick={() => {setcheckout(true), setprice(13999.00)}}> 
     CONTRATAR</button>)}
          
              </div>
        </div>
        <div className="col">
          <div className='card'>    
              <p className='type'>Elite</p> 

              <p className='price'>$19,999 mx</p>         

    
              <div className='caracteristics'> 
              
              <ul>
                <li>✅ Secciones: 5</li>
                <li>✅ Revisiones y Cambios: 4</li>
                <li>✅ Chat, Formuslarios y Maps</li>
                <li>✅ Certificado SSL</li>
                <li>✅ Correos Corporativos: 10</li>
                <li>✅ Cupon en publicidad digital: 10% OFF</li>
                <li>✅ Aceleracion y Responsiva</li>
                <li>✅ Manual de Uso</li>
                <li>✅ Hosting: 6 meses</li>
                <li>🆇 SEO On page</li>
                <li>🆇 Dominio</li>
                <li>✅ Tiempo de entrega: 3 a 4 semanas</li>
    
    
    
    
              </ul>
              </div>
              {checkout ?  (  <PayPal/>
      ) : (  <button className='contratar' onClick={() => setcheckout(true)}> 
      CONTRATAR</button>)}
          
              </div>
        </div>
        <div className="col">
          <div className='card'>    
              <p className='type'>Gold</p>         
              <p className='price'>$24,999 mx</p>         
                   
    
              <div className='caracteristics'> 
              
              <ul>
                <li>✅ Secciones: 10</li>
                <li>✅ Revisiones y Cambios:5</li>
                <li>✅ Chat, Formuslarios y Maps</li>
                <li>✅ Certificado SSL</li>
                <li>✅ Correos corporativos</li>
                <li>✅ Cupon en publicidad digital: 15% OFF</li>
                <li>✅ Aceleracion y Responsiva</li>
                <li>✅ Manual de Uso</li>
                <li>✅ Hosting: 9 meses</li>
                <li>🆇 SEO On page</li>
                <li>🆇 Dominio</li>
                <li>✅ Tiempo de entrega: 3 a 4 semanas</li>
    
    
    
    
              </ul>
              </div>
              {checkout ?  (  <PayPal/>
      ) : (  <button className='contratar' onClick={() => setcheckout(true)}> 
      CONTRATAR</button>)}
          
              </div>
        </div>
     
        </div>
        </div>)
    
}

export default Homecards;