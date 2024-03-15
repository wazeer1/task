import React from 'react'
import HeroImage from '../assets/fortnite-pictures-b5kfcchwazwiz3cs 1.png'

const HeroSect = () => {
  return (
    <div className='py-10'>
      <div>
        <h4 className='text-center text-3xl'>Epic Games : An American video game and software developer<br/> and publisher based in Cary, North Carolina.</h4>
      </div>
      <div className='mt-10'>
        <img src={HeroImage} alt="Hero"/>
      </div>
      <div className='mt-8'>
        <p className='text-center'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
        <div className='flex justify-center mt-8'>
            <button className='py-2 px-10 bg-white text-black mx-auto'>Visit Website</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSect
