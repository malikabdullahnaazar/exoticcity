import React from 'react';
import './Left.css';
import LeftBanner from './LeftBanner/LeftBanner';
import banner from '../../Static/Images/left-banner1.jpg';
import banner2 from '../../Static/Images/left-banner2.jpg';
import TrendingProducts from './TrendingProducts/TrendingProducts';
import CustomerComment from './CustomerComment/CustomerComment';

function Left() {
  return (
    <div className="leftSide">
        <div className="leftSideBanners">
          <LeftBanner pic={banner} txt1={"Bacola Natural Foods"} txt2={"Special Organic"} txt3={"Roats Burger"} price={14.99}/>
          <LeftBanner pic={banner2} txt1={"Best Bakery Products"} txt2={"Fresh Products"} txt3={"every hour"} price={24.99}/>
        </div>
        <TrendingProducts/>
        <CustomerComment/>
    </div>
  )
}

export default Left