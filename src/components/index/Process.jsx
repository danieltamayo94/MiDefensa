import React from 'react'
import ButtonGuardianship from './ButtonGuardianship'
import TakeYourAppoiment from './TakeYourAppoiment'

const Process = () => {
  return (
    <div className="containerProcess">
        <div className="cardProcess">
            <h3>¡Inicia con la elaboración de la Tutela Digitalizada sin ningún costo!</h3>
            <p>¿Qué estás esperando?</p>
            <ButtonGuardianship/>
        </div>

        <div className="cardProcess">
            <h3>Puedes preguntar también por nuestros demás servicios</h3>
            <p>Agenda tu cita ya mismo.</p>
            <TakeYourAppoiment/>
        </div>
    </div>
  )
}

export default Process