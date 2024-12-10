import React from 'react'
import ArrowIcon from '../Common/ArrowIcon'

const Card = ({imagePath, title, description, actionArrow,height, width}) => {
  return (
    <div className='flex flex-col p-6'>
        <img className={`h-[${height? height:'240px'}] max-h-[${height? height:'240px'}] w-[${width? width:'220px'}] 
        max-w-[${width? width:'220px'}] bg-cover bg-center border rounded hover:scale-105 cursor-pointer object-cover`}  
        width={width??"220px"} height={height?? "240px"} src={imagePath} 
        alt="Men Jacket"/>
        
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <p className='text-[16px] font-semibold p-1'>{title}</p>
            {description && <p className='text-[12px] px-1 text-gray-600'>{description}</p>}
          </div>
            {actionArrow && <span className='cursor-pointer pr-2 items-center'><ArrowIcon /></span> }
        </div>

    </div>
  )
}

export default Card