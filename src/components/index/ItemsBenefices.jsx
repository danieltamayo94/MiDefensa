import React from 'react'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons'
import { faScaleUnbalancedFlip } from '@fortawesome/free-solid-svg-icons'
import { faGavel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ItemsBenefices = () => {
  return (
    <div className="containerItemsBenefices">
        <div className="itemBenefices">
                <div className="iconCard">
                    <FontAwesomeIcon className="icon" icon={faUsers} />
                </div>
            <p>Defiende tus derechos fundamentales a traves de una tutela totalmente automatizada </p>
        </div>
        <div className="itemBenefices">
                <div className="iconCard">
                    <FontAwesomeIcon className="icon" icon={faArrowPointer} />
                </div>
            <p>Accede a la justicia digital</p>
        </div>
        <div className="itemBenefices">
                <div className="iconCard">
                    <FontAwesomeIcon className="icon" icon={faScaleUnbalancedFlip} />
                </div>
            <p>Disminuye la brecha social a la justicia en Colombia.</p>
        </div>
        <div className="itemBenefices">
                <div className="iconCard">
                    <FontAwesomeIcon className="icon" icon={faGavel} />
                </div>
            <p>Haz efectivo el goce de tus derechos a la salud, a la vida digna, al trabajo, a la petición y entre otros.</p>
        </div>
    </div>
  )
}

export default ItemsBenefices