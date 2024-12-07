import { useState } from 'react'
import './Shop.css'
import Navigation from './components/Navigation/Navigation'
import HeroSection from './components/HeroSection/HeroSection'
import Trending from './components/Sections/Trending'
import Category from './components/Sections/Categories/Category'
import content from './data/content.json'
import Footer from './components/Footer/Footer'

function Shop() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <Trending />
      {content?.categories && content?.categories?.map((item, index) => <Category key={item?.title + index} {...item}/>)}
      <Footer content={content?.footer}/>
    </>
  )
}

export default Shop
