import React from 'react'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const services = () => {
  return (
    <div className="containerServices">
        <div className="containerIconCard">
            <div class="tagWrapIcon">
                <div className="iconCard">
                    <FontAwesomeIcon className="icon" icon={faPen} />
                </div>
            </div>
            <h5>Elabora</h5>
        </div>
        
        <div className="containerIconCard">
            <div className="iconCard"> 
                <div class="tagWrapIcon">
                    <FontAwesomeIcon className="icon" icon={faBookOpen} />
                </div>
            </div>
            <h5>Radica</h5>
        </div>

        <div className="containerIconCard">
        <div class="tagWrapIcon">
            <div className="iconCard">
                <FontAwesomeIcon className="icon" icon={faPenToSquare} />
            </div>
        </div>
        <h5>Haz seguimiento</h5>
        </div>
        

    </div>

  )
}

export default services