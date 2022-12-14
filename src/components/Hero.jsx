import React from 'react';
import terminal from '../assets/PepeGod.png'
import heroVid from '../assets/gom.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[120px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div id="about" className='w-full h-[100%] flex flex-col justify-center items-center text-white px-4 text-center'>
      <img className='justify-center h-3/4 mb-34' src={terminal} alt="/" />
      <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-lg px-16 py-5 text-center mr-2 mb-2"><a href="https://app.uniswap.org/#/swap?outputCurrency=0x4c57dFF92DB3cBB7071E8159960A3b2c488d33C7" target="_blank" rel="noopener noreferrer">BUY</a></button>
      <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-lg px-14 py-5 text-center mr-2 mb-2"><a href="https://www.dextools.io/app/ether/pair-explorer/0x0dd5b33bbcbab5ff92b442f83a0e007a0a583e12" target="_blank" rel="noopener noreferrer">CHART</a></button>
      </div>
    </div>
  );
};

export default Hero;
