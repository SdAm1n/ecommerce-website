import { useState } from 'react'
import './Shop.css'
import HeroSection from './components/HeroSection/HeroSection'
import Trending from './components/Sections/Trending'
import Category from './components/Sections/Categories/Category'
import content from './data/content.json'
import Footer from './components/Footer/Footer'

function Shop() {

  return (
    <>
      <HeroSection />
      <Trending />
      {content?.pages?.shop?.sections && content?.pages?.shop?.sections?.map((item, index) => <Category key={item?.title+index} {...item} />)}
      <Footer content={content?.footer}/>
    </>
  )
}

export default Shop
