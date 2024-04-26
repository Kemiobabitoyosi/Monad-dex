import React from 'react'
import Button from './Button';

const Swap = () => {
  const handleClick = () => {
    alert('Button Clicked!')
  };
  return (
    <div className="bodySwap">
        <div className='exp'>
            <div className='trade'>Trade</div>
            <div className='securely'>Securely</div>
            <div className='res'>
              <div>Swap, earn, and build seamlessly on the future of finance. Powering Decentralized Exchange: Built for the Monad Community. The Fastest, Most Secure DEX on the Monad Network.</div>
              <div className="btn-con"><Button onClick={handleClick} className="btn1" children="Get Started" />
                  <Button onClick={handleClick} className="btn2" children="Swap ERC20" />
              </div>
              </div>
        </div>
        <div className='swapTab'>
          <div className='swap'>
            <div>Swap</div>
            <div>setting icon</div>
          </div>
          <div className='from'><span>0.0</span><select><option>Eth</option><option>Sol</option><option>Opt</option></select></div>
          <div className='to'><span>0.0</span><select><option>Select a token</option><option>USDC</option><option>USDT</option></select></div>
          <div className='amount'>Enter an amount</div>
        </div>
    </div>
  )
}

export default Swap;