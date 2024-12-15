import { useEffect, useState } from 'react'
import './Shop.css'
import HeroSection from './components/HeroSection/HeroSection'
import Trending from './components/Sections/Trending'
import Category from './components/Sections/Categories/Category'
import content from './data/content.json'
import Footer from './components/Footer/Footer'
import { fetchCategories } from './api/FetchCategories.js'
import { useDispatch } from 'react-redux'
import { loadCategories } from './store/features/Category.js'
import { setLoading } from './store/features/Common.js'


function Shop() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    fetchCategories().then(res => {
      // console.log("Categories: ", res);
      dispatch(loadCategories(res));
    }).catch(err => {
      console.log("Error: ", err);
    }).finally(() => {
      dispatch(setLoading(false));
    })
  }, [dispatch])

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
