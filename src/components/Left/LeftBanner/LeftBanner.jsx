import React from 'react';
import './LeftBanner.css';

function LeftBanner(props) {
  return (
    <div className="leftBanner">
        <div className="leftBannerHeading">
            <p>{props.txt1}</p>
            <h2>{props.txt2}</h2>
            <h3>{props.txt3}</h3>
            <p>only-from</p>
            <h1>${props.price}</h1>
        </div>
            <img src={props.pic} alt="banner" />
    </div>
  )
}

export default LeftBanner