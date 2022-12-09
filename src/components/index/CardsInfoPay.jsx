import React from 'react'
import LogoPSE from '../../img/logoPSE.png'
import { faGavel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardsInfoPay = () => {
  return (
    <div className="containerCardsInfoPay">

            <div className="cardPay">
                <FontAwesomeIcon className="iconBenefice" icon={faGavel} />
                <p>Transferencia Bancaria</p>
            </div>
            <div className="cardPay">
                <img src={LogoPSE} className="logoPSE"/>
                <p>PSE</p>
            </div>
        
    </div>
  )
}

export default CardsInfoPay