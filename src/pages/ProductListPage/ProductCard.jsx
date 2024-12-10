import React from 'react'
import SvgFav from '../../components/Common/SvgFav'

const ProductCard = ({title, description, price, discount, rating, brand, thumbnail}) => {
  return (
    <div className='flex flex-col hover:scale-105 relative'>
        <img className={`h-[350px] w-[280px] 
        border rounded cursor-pointer object-cover block`} src={thumbnail} alt="Product Card Image"/>
      

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
        <button onClick={() => console.log("Click button")} className='absolute top-0 right-0 pt-4 pr-4 '><SvgFav /></button>

    </div>
  )
}

export default ProductCard