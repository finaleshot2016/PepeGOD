import React from 'react';
import './dev.css';
import terminal from '../assets/roadmap.png'
import terminal4 from '../assets/pepegod3.png'

const Developers = () => {
  return (
    <div id="tokenomics" className='hero-image'>
 <img className='justify-center' src={terminal} alt="/" />

 <div> <img className='justify-center' src={terminal4} alt="/" />
<iframe className='justify-center py-4 w-full aspect-video' src="https://dexscreener.com/ethereum/0xe0f908154395f0ba4a80d85f0c41fb6909e4ec8f" title="dexchart"></iframe>
          </div>

    </div>
  );
};

export default Developers;
