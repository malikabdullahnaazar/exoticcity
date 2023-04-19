import React from 'react'
import './HoverProduct.css'

function HoverProduct(props) {
  return (
    <div className="hoverProduct">
        <div className="img">
            <img src={props.img} alt="pro" />
        </div>
        <div id="desc">
        <p>{props.name}</p>
        <p>{props.quantity} × €{props.price}</p>
        </div>
    </div>
  )
}

export default HoverProduct