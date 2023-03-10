import React from 'react';
import './Add3.css';

function Add3(props) {
  return (
    <div className="add3">
        <div className="add3text">
        <h5>Weekly Discount {props.discount} %</h5>
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
        <button>Shop</button>
        </div>
        <img src={props.pic} alt="banner" />
    </div>
  )
}

export default Add3