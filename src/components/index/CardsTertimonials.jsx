import React from 'react'
import PictureTestimonial from '../../img/fotoPrueba.jpg'

const CardsTertimonials = () => {
  return (
    <div className="containerTestimonials">
            <div className="containerCardTestimonials">
                <p>La app me ayudó a hacer valer mis derechos. Datacredito eliminó mi reporte negativo haciendo valer el derecho de Habeas Data</p>
                <img src={PictureTestimonial} className="pictureTestimonial"/>
            </div>
            
            <div className="containerCardTestimonials">
                <p>Con su ayuda la empresa donde laboro no me despidió estando embarazada. hice valer mi derecho a la estabilidad laboral reforzada. estamos muy agradecidos por su buen trabajo.</p>
                <img src={PictureTestimonial} className="pictureTestimonial"/>
            </div>

            <div className="containerCardTestimonials">
                <p>Gracias a la plataforma se hizo y presentó la tutela, la E.P.S le autorizó su tratamiento mejorando su calidad de vida. Altamente agradecidas </p>
                <img src={PictureTestimonial} className="pictureTestimonial"/>
            </div>
    </div>
  )
}

export default CardsTertimonials