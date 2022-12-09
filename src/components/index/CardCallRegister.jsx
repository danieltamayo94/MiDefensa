import React from 'react'
import Services from './Services'
import ButtonRegister from './ButtonRegister'


const CardCallRegister = () => {
  return (
    <div className="containerCard">
      <h2>Juntos en la defensa de tus derechos</h2>
      <p>Para defender tus propios derechos no requieres de un abogado.</p>
      <p>Accede a la justicia através de la acción de tutela digitalizada.</p>
      <Services/>
      <ButtonRegister/>
      
    </div>
  )
}

export default CardCallRegister