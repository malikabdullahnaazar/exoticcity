import React from 'react'
import TrendProduct from './TrendProduct/TrendProduct';
import './TrendingProducts.css';
import pic1 from '../../../Static/Images/trend1.jpg';
import pic2 from '../../../Static/Images/trend2.jpg';
import pic3 from '../../../Static/Images/trend3.jpg';
import pic4 from '../../../Static/Images/trend4.jpg';
import pic5 from '../../../Static/Images/trend5.jpg';

function TrendingProducts() {
  return (
    <div className="Trendingproducts">
        <h4>Trending Products</h4>
        <div className="productList">
            <TrendProduct name={"KTC COCONUT OIL 12X250ML"} price={12.00} pic={pic1} />
            <TrendProduct name={"KTC COCONUT OIL 12X250ML"} price={24.00} pic={pic2} />
            <TrendProduct name={"KTC COCONUT OIL 12X250ML"} price={24.00} pic={pic3} />
            <TrendProduct name={"KTC COCONUT OIL 12X250ML"} price={24.00} pic={pic4} />
            <TrendProduct name={"KTC COCONUT OIL 12X250ML"} price={24.00} pic={pic5} />
        </div>
    </div>
  )
}

export default TrendingProducts