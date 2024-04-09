import React from 'react'
import '../Styles/components/portafolio.css'
import lslenceria from '../assets/images/lslenceria.png'
import lslfurniture from '../assets/images/lsfurniture.png'


function Portafolio() {
  return (
    <div className='main-container'>
<div className='second-container'>
        <div>
            <h1>Proyectos en los que hemos trabajado</h1>
            <h2>E-commerce de lenceria con sistema de cobro paypal integrado</h2>
            <p>Con un flow de seguimiento sencillo, interactivo e intuitivo para el usuario, 
                mostrando las distintas categorias de productos y sus productos lideres,
                enfocandose en la simpleza para influir en en el cierre de venta
            </p>

                <div className='imgcontainer'>
            <img src={lslenceria} />
            </div>

        </div>

        <div>
           
            <h2>E-commerce de muebles/arts para hogar con sistema de cobro paypal integrado</h2>
            <p>Dando exposicion a las caracteristicas del producto, creando una atmosfera amena de navegacion 
                para el comprador y facilitando la transaccion
            </p>

                <div className='imgcontainer'>
            <img src={lslfurniture} />

            <img/>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Portafolio
