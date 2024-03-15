import React from 'react'
import Widj1 from '../assets/scroll1.png'
import Widj2 from '../assets/scroll2.png'
import Widj3 from '../assets/scroll3.png'

const SlickSection = () => {
    const datas = [
        {
            id:1,
            image:Widj1,
            description:"Explore large, destructible environments where no two games are ever the same."
        },
        {
            id:2,
            image:Widj2,
            description:"Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale"
        },
        {
            id:1,
            image:Widj3,
            description:"Discover even more ways to play across thousands of creator-made game genres"
        },
    ]
  return (
    <div className='py-10 flex space-x-10'>
      {
        datas.map((item)=> (
            <div className='w-1/3'>
                <img src={item.image} alt="widg" className='w-full object-contain'/>
                <h5 className='text-center mt-4'>{item.description}</h5>
            </div>
        ))
      }
    </div>
  )
}

export default SlickSection
