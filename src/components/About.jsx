import React from 'react';
import terminal from '../assets/gom1.png'
import terminal1 from '../assets/pepegod3.png'
import terminal2 from '../assets/gom22.png'
const About = () => {
  return (
    <div className='w-full bg-[#ecffdf] text-white text-center mt-20 hero-image'>
      <div className='max-w-[1240px] mx-auto px-10 py-16 '>
        <div id="roadmap">
        <img className='justify-center' src={terminal1} alt="/" />

         <p className='text-black text-4xl'>Contract Address: 0x4c57dFF92DB3cBB7071E8159960A3b2c488d33C7 </p>   <br /> <br />
 <p className='text-black text-lg'>
There was this theory that this God is called PepeGod or God of Memes. <br />Early depictures of PepeGod 
         are widely spread around the earth, with all of his <br />Glory and Greatness in every ancient story behind it.<br />
         <br />
         Now it is up to us to spread the word about PepeGod, also known as the God of Memes,<br /> and use His teachings of memes to find that peace we’re all looking for.<br /><br />

         God of Memes, $PEPE, the God memecoin that will dominate the ETH chain.
</p>      <br/>  <img className='justify-center mt-2 mb-10' src={terminal} alt="/" /><br/>
<img className='justify-center mt-2 mb-10' src={terminal2} alt="/" />
        </div>
        <p className='text-lime-400 text-7xl text-italic'>Let's worship the God of Memes...</p> 
      </div>
    </div>
  );
};
export default About;
