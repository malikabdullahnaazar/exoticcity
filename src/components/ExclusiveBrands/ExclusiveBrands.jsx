import React from 'react';
import './ExclusiveBrands.css';
// import Slider from "react-slick";
import brand1 from '../../Static/Images/brand-1.png';
import brand2 from '../../Static/Images/brand-2.png';
import brand3 from '../../Static/Images/brand-3.png';
import brand4 from '../../Static/Images/brand-4.png';
import brand5 from '../../Static/Images/brand-5.png';
import brand6 from '../../Static/Images/brand-6.png';
import brand7 from '../../Static/Images/brand-7.png';
import brand8 from '../../Static/Images/brand-8.png';
import brand9 from '../../Static/Images/brand-9.png';

function ExclusiveBrands() {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    //   };
      

  return (
    <div className="exclusiveBrands">
        <h1>Our Exclusive Brands</h1>

      <div className="carouselSlider">
        {/* <Slider {...settings} className='exbSlider' > */}
        <marquee behavior="" direction="">

        <img src={brand1} alt="brands" />
        <img src={brand2} alt="brands" />
        <img src={brand3} alt="brands" />
        <img src={brand4} alt="brands" />
        <img src={brand5} alt="brands" />
        <img src={brand6} alt="brands" />
        <img src={brand7} alt="brands" />
        <img src={brand8} alt="brands" />
        <img src={brand9} alt="brands" />
        </marquee>
    {/* </Slider> */}
      </div>

    </div>
  )
}

export default ExclusiveBrands