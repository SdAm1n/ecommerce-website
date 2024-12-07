import React from 'react'
import SectionHeading from './SectionsHeadings/SectionHeading'
import Card from '../Card/Card'
import DenimJacket from '../../assets/Images/denim-jacket.png'
import jacket from '../../assets/Images/jacket.png'
import RedDress from '../../assets/Images/red-dress.png'
import ShirtWoman from '../../assets/Images/shirt-woman.png'

const items = [{
    'title': 'Denim Jacket',
    imagePath:DenimJacket
}, {
    'title': 'Leather Jacket',
    imagePath:jacket
}, {
    'title': 'Women Red Dress',
    imagePath:RedDress
},{
    'title': 'Women Shirt',
    imagePath:ShirtWoman
},
]

const Trending = () => {
  return (
    <>
        <SectionHeading title={'Trending Now'}/>
        <div className='flex flex-wrap '>
            {items && items?.map((item, index) => <Card key={item?.title + index} title={item?.title} imagePath={item?.imagePath}/>)}
        </div>
    </>
  )
}

export default Trending