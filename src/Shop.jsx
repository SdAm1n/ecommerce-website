import { useState } from 'react'
import './Shop.css'
import Navigation from './components/Navigation/Navigation'
import HeroSection from './components/HeroSection/HeroSection'
import Trending from './components/Sections/Trending'

function Shop() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <Trending />
    </>
  )
}

export default Shop
