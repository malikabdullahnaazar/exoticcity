import {React, useState, useEffect} from 'react';
import './Right.css';
import banner1 from '../../Static/Images/banner1.jpg';
import BestSeller from './BestSeller/BestSeller';
import banner from '../../Static/Images/banner-box2.jpg';
import HotProducts from './HotProducts/HotProducts';
import NewProducts from './NewProducts/NewProducts';
import banner3 from '../../Static/Images/banner3.jpg';
import banner4 from '../../Static/Images/banner4.jpg';
import Add3 from './Add3/Add3';

function Right() {
  return (
    <div className="rightSide">
        <div className='banner1' >
            <img src={banner1} alt="banner1" />
        </div>
        <BestSeller/>
        <div className="add1">
          <div className="add1Heading">
          <p>Always Taking Care</p>
          <h5>In store or online your health and safety is our top priority.</h5>
          </div>
          <div className="add1Image">
            <img src={banner} alt="banner2" />
          </div>
        </div>
        <HotProducts/>
        <div className="add2">
          <h5>Super Discount for our <a href="/">First Purchase.</a><span>FREE25BAC</span>Use discount code in checkout.</h5>
        </div>
        <NewProducts/>
        <div className="adds">
        <Add3 discount={40} name={"Legumes and Cereals"} desc={"Feed your Family"} pic={banner3} />
        <Add3 discount={40} name={"Dairy and Eggs"} desc={"Feed your family"} pic={banner4} />
        </div>
    </div>
  )
}

export default Right