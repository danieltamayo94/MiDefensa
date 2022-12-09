import React from 'react'
import CardsTertimonials from './CardsTertimonials'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Testimonials = () => {
  return (
    <div className="FistContainerTestimonials">
        <CardsTertimonials/>
        <h3>Testimonios<FontAwesomeIcon className="iconButton" icon={faHandPointUp} /></h3>
    </div>
  )
}

export default Testimonials