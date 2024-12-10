import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumbs/BreadCrumb'
import Category from '../../components/Sections/Categories/Category'
import content from '../../data/content.json'
import Rating from '../../components/Ratings/Rating'
import SizeFilter from '../../components/Filters/SizeFilter'
import ProductColors from './ProductColors'
import CartIcon from '../../components/Common/CartIcon'
import SvgCreditCard from '../../components/Common/SvgCreditCard'
import SvgCloth from '../../components/Common/SvgCloth'
import SvgShipping from '../../components/Common/SvgShipping'
import SvgReturn from '../../components/Common/SvgReturn'
import SectionHeading from '../../components/Sections/SectionsHeadings/SectionHeading'
import ProductCard from '../ProductListPage/ProductCard'

const categories = content?.categories

const extraSections = [
    {
        icon:<SvgCreditCard/>,
        label:'Secure Payment'
    },
    {
        icon:<SvgCloth />,
        label:'Size & Fit'
    },
    {
        icon:<SvgShipping />,
        label:'Free Shipping'
    },
    {
        icon:<SvgReturn />,
        label:'Easy Returns & Exchanges'
    }
]

const ProductDetails = () => {

    const {product} = useLoaderData()
    const [image, setImage] = useState()
    // const [BreadCrumbLinks, setBreadCrumbLinks] = useState([{title: 'Shop',path:'/'}])
    const [breadCrumbLinks, setBreadCrumbLink] = useState([]);

    const similarProducts = useMemo(() => {
        return content?.products?.filter((item) => item?.type_id === product?.type_id && item?.id !== product?.id)
    }, [product])

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
        setImage(product?.images[0]?.startsWith('http') ? product?.images[0] : product?.thumbnail);
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
    <>
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

                {/* // product title */}
                <p className='text-3xl pt-4'>{product?.title}</p>

                {/* // product rating */}
                <Rating rating={product?.rating}/>
                
                {/* // product price */}
                <p className='text-xl bold py-2'>৳{product?.price}</p>

                <div className='flex flex-col'>
                    <div className='flex gap-2'>
                        <p className='text-sm bold'>Select Size</p>
                        <Link className='text-sm text-gray-500 hover:text-gray-900' 
                        to={'https://en.wikipedia.org/wiki/Clothing_sizes'}>{'Size Guide -> '}</Link>
                    </div>
                </div>

                <div className='mt-2 '>
                    <SizeFilter sizes={product?.size} hideTitle/>

                </div>
                <div>
                    <p className='text-lg bold'>Colors Available</p>
                    <ProductColors colors={product?.color}/>
                </div>
                
                <div className='flex pt-4'>
                    <button className='bg-black rounded-lg w-[155px] px-2'>
                        <div className='flex items-center bg-black text-white rounded-lg'>
                            <CartIcon bgColor={'black'}/>
                            Add to cart
                        </div>
                        </button>
                </div>

                <br />
                <hr />

                <div className='grid grid-cols-2 gap-4 pt-4'>
                    {
                        extraSections?.map((section)=>(
                            <div className='flex items-center'>
                                {section?.icon}
                                <p className='px-2'>{section?.label}</p>
                            </div>
                        )
                    )
                    }
                </div>
            </div>

            
            
        </div>

        <SectionHeading title={'Product Description'}/>
        <div className='md:w-[50%] w-full p-4'>
            {/* // product description */}  
            
            <p className='px-8'>{product?.description}</p>

        </div>
        <SectionHeading title={'Similar Products'}/>
        <div className='flex px-10'>
            {/* // product description */}  
            
            <div className='pt-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8 px-2 pb-10'>
                    {similarProducts?.map((item, index)=>(
                        <ProductCard key={index} {...item}/>
                    ))}
                {!similarProducts?.length && <p>No Products Found!</p>}
                </div>
        </div>

    </>
  )
}

export default ProductDetails