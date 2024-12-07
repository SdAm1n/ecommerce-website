import { useState } from 'react'
import './Shop.css'
import Navigation from './components/Navigation/Navigation'
import HeroSection from './components/HeroSection/HeroSection'
import Trending from './components/Sections/Trending'
import Category from './components/Sections/Categories/Category'
import content from './data/content.json'

function Shop() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <Trending />
      {content?.categories && content?.categories?.map((item, index) => <Category key={item?.title + index} {...item}/>)}
    </>
  )
}

export default Shop
