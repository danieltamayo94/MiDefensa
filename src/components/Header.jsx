import React from 'react'
import imageHeader from '../img/ciberSeguridad.jpg'
import Menu from './Menu'
import CardCallRegister from './index/CardCallRegister'


const Header = () => {
  return (
    <div className="containerHeader">
      
        <img src={imageHeader} className="imageHeader"/>
        
        <CardCallRegister/>
    </div>
  )
}

export default Header