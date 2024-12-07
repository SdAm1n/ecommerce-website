import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Shop from './Shop.jsx'
import 'react-multi-carousel/lib/styles.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import ShopAppWrapper from './pages/ShopAppWrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}>
      <ShopAppWrapper />
      {/* <Shop /> */}
    </RouterProvider>

  </StrictMode>
)
