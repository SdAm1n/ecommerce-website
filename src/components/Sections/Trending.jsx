import React from 'react'
import SectionHeading from './SectionsHeadings/SectionHeading'
import Card from '../Card/Card'
import DenimJacket from '../../assets/Images/denim-jacket.jpg'
import jacket from '../../assets/Images/jacket.png'
import RedDress from '../../assets/Images/red-dress.jpg'
import ShirtWoman from '../../assets/Images/shirt-woman.png'
import SweaterWoman from '../../assets/Images/sweater-woman.jpg'
import Joggers from '../../assets/Images/Joggers.jpg'
import WhiteTshirt from '../../assets/Images/WhiteTshirt.jpg'
import WhiteDress from '../../assets/Images/WhiteDress.jpg'
import Carousel from 'react-multi-carousel'
import { responsive } from '../../utils/Section.constants.js'
import './Trending.css'

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
{
    'title': 'Women Sweater',
    imagePath:SweaterWoman
},
{
    'title': 'White Tshirt',
    imagePath:WhiteTshirt
},
{
    'title': 'White Dress',
    imagePath:WhiteDress
},
{
    'title': 'Joggers',
    imagePath:Joggers
},
]

const Trending = () => {
  return (
    <>
        <SectionHeading title={'Trending Now'}/>
        <Carousel 
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={false}
            showDots={false}
            infinite={false}
            partialVisible={false}
            itemClass={'react-slider-custom-item'}
            className='px-8'
        >
            {items && items?.map((item, index) => <Card key={item?.title + index} title={item?.title} imagePath={item?.imagePath}/>)}
        </Carousel>
        
    </>
  )
}

export default Trending