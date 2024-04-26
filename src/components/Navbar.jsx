import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className="nav">
         <div className="left">
            <div className="nadLogo"><img className="nadLogo" src="Monad-Logo.webp"></img></div>
            <div className='navItem'>Swap</div>
            <div className='navItem'>Tokens</div>
            <div className='navItem'>NFTs</div>
            <div className='navItem'>Pool</div>
        </div>
        <div className="right">
            <div className='navItem '><span className='spanNav'><select className='select'><option>USDT coin</option><opton>USDC</opton><option>USSD</option></select></span><span className='check'><FontAwesomeIcon icon={faClipboardCheck} />
</span></div>
            <div className='navItem'><span className='spanNav'><select className='select'><option>SHIBA INU</option><option>ETH</option><option>SOL</option></select></span><span className='check'><FontAwesomeIcon icon={faClipboardCheck} />
</span></div>
            <Button className="navItem navbtn" children="Connect Wallet" />
        </div>
    </div>
   
  );
};

export default Navbar