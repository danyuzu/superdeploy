import React from 'react';
import texturablanca from '/src/assets/textblanca.jpg';
import Homecards from './Homecards';
import video from '/src/assets/IMG_2450.mp4'
import Footer from './Footer';
import Infocards from './Infocards';
const  Home =()=>{



  return (
      <div className="home_container">

<div className='hero'>

<video  src={video} type='video/mp4' playsInline  autoPlay loop muted className='backvideo'>
    </video> 
  <nav>


            


            {/* <img className="fondouno"alt='img' src={texturablanca}/> */}
<div className='wrapper'>
<div className='static-txt'>Sitios web para: </div>
   <ul className='dynamic-txts'>
    <li><span>Empresas</span></li>
    <li><span>Marca Personal</span></li>
    <li><span>Comercio </span></li>
    <li><span>Educacion </span></li>

   </ul>
</div>

           
          

           <button className="contrata">CONTRATA TU SITIO AHORA ↓ </button>
           
           </nav>

           </div>
           <Homecards/>
          <Infocards/>
          <Footer/>
      </div>
  )
}

export default Home