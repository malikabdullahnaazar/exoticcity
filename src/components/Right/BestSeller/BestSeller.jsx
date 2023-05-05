import React, { useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import './BestSeller.css';
import pic1 from '../../../Static/Images/pic1.png';
import pic2 from '../../../Static/Images/pic2.jpg';
import pic3 from '../../../Static/Images/pic3.jpg';
import pic4 from '../../../Static/Images/pic4.jpg';
import ViewAll from '../ViewAllComponent/ViewAll';
import {Link} from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
function BestSeller() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="bestSeller">
        <div className="bestSellerHeading">
        <div className="bestSellerText">
            <h3>BEST SELLERS</h3>
            <p>Do not miss the current offers until the end of March.</p>
        </div>
            <ViewAll/>
        </div>
        <div className="bestSellerCrousel">
            <div className="prevButton">
            <p>&#8249;</p>
            </div>
            <div className="bestSellerCards">
              <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item  >
        <div className="crouselItem">
      <Link to="Product" className='Link'><CardComponent pic={pic1}/></Link>
      <Link to="Product" className='Link'><CardComponent pic={pic1}/></Link>
      <Link to="Product" className='Link'><CardComponent pic={pic1}/></Link>
      </div>
      </Carousel.Item>
      <Carousel.Item  >
        <div className="crouselItem">
      <Link to="Product" className='Link'><CardComponent pic={pic1}/></Link>
      <Link to="Product" className='Link'><CardComponent pic={pic1}/></Link>
      <Link to="Product" className='Link'><CardComponent pic={pic1}/></Link>
      </div>
      </Carousel.Item>
      <Carousel.Item  >
        <div className="crouselItem">
      <Link to="Product" className='Link'><CardComponent pic={pic1}/></Link>
      <Link to="Product" className='Link'><CardComponent pic={pic1}/></Link>
      <Link to="Product" className='Link'><CardComponent pic={pic1}/></Link>
      </div>
      </Carousel.Item>
    </Carousel>
            </div>
            <div className="nextButton">
            <p>&#8250;</p>
            </div>
        </div>
    </div>
  )
}

export default BestSeller