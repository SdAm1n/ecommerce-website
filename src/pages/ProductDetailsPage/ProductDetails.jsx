import React, { useEffect, useMemo, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumbs/BreadCrumb'
import Category from '../../components/Sections/Categories/Category'
import content from '../../data/content.json'

const categories = content?.categories

const ProductDetails = () => {

    const {product} = useLoaderData()
    const [image, setImage] = useState(product?.images[0]?.startsWith('http') ? product?.images[0] : product?.thumbnail)
    // const [BreadCrumbLinks, setBreadCrumbLinks] = useState([{title: 'Shop',path:'/'}])
    const [breadCrumbLinks, setBreadCrumbLink] = useState([]);


    const productCategory = useMemo(() => {
        return categories?.find((category) => category?.id === product?.category_id);
      }, [product,categories]);


    // useEffect(() => {

    //     const arrayLinks = [ {
    //         title: productCategory?.name,
    //         path: productCategory?.path
    //         }
    //     ]

    //     const productType = productCategory?.types?.find((type) => type?.id === product?.type_id)
    //     if (productType) {
    //         arrayLinks?.push({
    //             title: productType?.name,
    //             path: productType?.name
    //         })
    //     }
    //     setBreadCrumbLinks(...BreadCrumbLinks, ...arrayLinks)
    // }, [productCategory, product])

    useEffect(() => {
        setImage(product?.thumbnail);
        setBreadCrumbLink([]);
        const arrayLinks = [{ title: 'Shop', path: '/' }, {
          title: productCategory?.name,
          path: productCategory?.path
        }];
        const productType = productCategory?.types?.find((item)=> item?.type_id === product?.type_id);
        
        if(productType){
          arrayLinks?.push({
            title: productType?.name,
            path: productType?.name
          })
        }
        setBreadCrumbLink(arrayLinks);
      }, [productCategory, product]);

  return (
    <div className='flex flex-col md:flex-row px-10 '>
        <div className='w-[100%] lg:w-[50%] md:w-[40%]'>
            {/* // product image */}
            <div className='flex flex-col md:flex-row'>
                <div className='w-[100%] md:w-[20%] justify-center h-[40px] md:h-[420px]'>
                    {/* Stack Imagee*/}
                    
                    <div className='flex flex-row md:flex-col justify-center h-full'>
                        {
                            product?.images[0]?.startsWith('http') && product?.images?.map((item, index) => (
                                <button onClick={() => setImage(item)} className='rounded-lg w-fit p-2 mb-2'>
                                    <img src={item} className='h-[60px] w-[60px] rounded-lg bg-cover bg-center hover:scale-105' 
                                    alt={'sample: ' + index}/>
                                </button>
                            ))
                        }
                    </div>

                </div>
                <div className='w-full md:w-[80%] flex justify-center md:pt-0 pt-10'>
                        <img src={image} alt={product?.title} 
                        className='w-full h-full max-h-[520px] object-cover cursor-pointer border rounded-lg' />
                </div>
            </div>
        </div>

        <div className='w-[60%] px-10'>
            {/* // product details */}
            <BreadCrumb links={breadCrumbLinks}/>
        </div>
    </div>
  )
}

export default ProductDetails