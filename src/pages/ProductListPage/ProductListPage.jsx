import React, { useMemo } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import FilterIcon from '../../components/Common/FilterIcon'
import content from '../../data/content.json'
import Categories from '../../components/Filters/Categories'

const categories = content?.categories


// display all products for all the categories
const ProductListPage = ({categoryType}) => {
  
    const categoryContent = useMemo(() => {
        return categories?.find((category) => category.code === categoryType)
    }, [categoryType]) 
  
    return (
    <div>
        <div className='flex'>
            
            <div className='w-[20%] p-[20px] border rounded-lg m-[20px]'>
                {/* // filter part */}

                <div className='flex justify-between'>
                <p className='text-[16px] text-gray-600'>Filter</p>
                <FilterIcon /> 
                </div>

                <div>
                    {/* // filter options */}
                <p className='text-[16px] text-black mt-5'>Categories</p>
                    

                </div>

            </div>

            <div className='p-[15px]'>
                {/* // product list */}
                <p className='text-black text-lg'>{categoryContent?.description}</p>
            </div>

        </div>
        
    </div>
  )
}

export default ProductListPage