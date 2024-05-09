import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons'
import Token from './Token';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


const Swap = () => {
  return (
    <div className='swapTabs'>
        <div className="swapTab">
          <div className='swap'>
            <div>Swap</div>
            <FontAwesomeIcon icon={faGear} />
          </div>
          <div className='tokens'>
            <Token className="from" children={from} />
            <span className='conversion'><FontAwesomeIcon icon={faArrowDown} /></span>
            <Token className="to" children={to} />
            <Token className="amount" children={amount} />
          </div>
        </div>
    </div>
  )
}

export default Swap;