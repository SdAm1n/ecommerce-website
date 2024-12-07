import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'

const ShopAppWrapper = () => {
  return (
    <>
        <Navigation />
        <Outlet />
    </>
  )
}

export default ShopAppWrapper