import React from 'react'
import SvgFav from '../../components/Common/SvgFav'
import { Link } from 'react-router-dom'

const ProductCard = ({id, title, description, price, discount, rating, brand, thumbnail}) => {
  return (
    <div className='flex flex-col hover:scale-105 relative'>
      <Link to={`/product/${id}`}>
        <img className={`h-[350px] w-[280px] 
        border rounded cursor-pointer object-cover block`} src={thumbnail} alt="Product Card Image"/>
      </Link>
      

        <div className='flex justify-between items-center'>
          <div className='flex flex-col pt-2'>
            <p className='text-[16px] font-semibold p-1'>{title}</p>
            {description && <p className='text-[12px] px-1 text-gray-600'>{brand}</p>}
          </div>

          <div>
            <p>৳{price}</p>
          </div>
        </div>

        {/* Favourite Button */}
        <button onClick={() => console.log("Click button")} className='absolute top-0 right-0 pt-4 pr-4 cursor-pointer'><SvgFav /></button>

    </div>
  )
}

export default ProductCard