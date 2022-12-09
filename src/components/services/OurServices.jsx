import React from 'react'
import imgCard1 from '../../img/juicio.jpg'
import imgCard2 from '../../img/documento.jpg'
import imgCard3 from '../../img/salario.jpg'
import imgCard4 from '../../img/juridico.jpg'

const OurServices = () => {
  return (
    <div className="containerPagServices">
        <h2>Nuestros Servicios</h2>
            <div className="containerOurServices">      
                <a   className="cardOurService" href="#" >
                    <img src={imgCard1} /> 
                    <p>Elaboración, radicación y seguimiento de la tutela.</p>
                </a>

                <a   className="cardOurService" href="#" >
                    <img src={imgCard2} /> 
                    <p>Elaboración, radicación y seguimiento de procesos laborales de única instancia. (cuantía inferior a 20 salarios mínimos mensuales) </p>
                </a>

                <a   className="cardOurService" href="#" >
                    <img src={imgCard3} /> 
                    <p>Elaboración, radicación y seguimiento de procesos civiles - ejecutivo singular. (cuantía inferior a 20 salarios mínimos mensuales) </p>
                </a>
                
                <a   className="cardOurService" href="#" >
                    <img src={imgCard4} /> 
                    <p>Asesorías Jurídicas</p>
                </a>
            </div>
    </div>
  )
}

export default OurServices