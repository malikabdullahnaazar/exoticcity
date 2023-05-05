import React from 'react'
import './ListItems.css'

function ListItems(props) {
  return (
    <div className="listItem">
        <img src={props.pic} alt="product" />
        <p id='name'>{props?.name?.slice(0, 10) || 'Default Name'}</p>
        <p id='price' >{props?.price?.toFixed(3)}</p>
        <p id='quantity' >
            <button id="minus">-</button>
            <span>{props.quantity}</span>
            <button id="plus">+</button>
        </p>
        <p id='subtotal' >${props?.subtotal?.toFixed(3)}</p>
        <p id='cross' >&#x2716;</p>
    </div>
  )
}

export default ListItems