import React from 'react'
import HeroSect from './HeroSect'
import SlickSection from './SlickSection'
import Contributer from './Contributer'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='py-20 px-80'>
      <HeroSect/>
      <SlickSection/>
      <Contributer/>
      <Footer/>
    </div>
  )
}

export default Layout
