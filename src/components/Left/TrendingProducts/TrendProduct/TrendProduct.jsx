import React from 'react';
import './TrendProduct.css';

function TrendProduct(props) {
  return (
    <div className="trendProduct">
        <img src={props.pic} alt="po" />
        <div className="trendProductHeading">
            <p>{props.name}<span><br></br>${props.price}</span></p>
        </div>
    </div>
  )
}

export default TrendProduct