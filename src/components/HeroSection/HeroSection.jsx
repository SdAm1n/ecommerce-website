import React from 'react'
import Banner from '../../assets/Images/Banner.jpg'

const HeroSection = () => {
    return (
        <div className='relative flex items-center bg-cover flext-start bg-center text-left h-svh w-full' style={{backgroundImage
            : `url(${Banner})`}}>
                <div className='absolute top-0 right-0 bottom-0 left-0'></div>
                    <main className='px-10 lg:px-24 z-10'>
                        <div className='text-left'>
                            <h2 className='text-2xl text-white'>T-shirt / Tops</h2>
                        </div>
                        <p className='mt-3 text-white sm:mt-5 sm:max-w-xl text-6xl'>
                        Winter 
                        Sales Festival
                        </p>
                        <p className='mt-3 text-white sm:mt-5 sm:max-w-xl text-2xl'>
                        Get 50% off for all products and free shipping
                        </p>
                        <button className='border rounded mt-6 border-black hover:bg-white hover:text-black hover:border-black text-white bg-black w-44 h-12'>
                            Shop Now
                        </button>
                    </main>
                
            </div>
    )
}

export default HeroSection