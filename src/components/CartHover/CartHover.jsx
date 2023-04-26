import React from 'react';
import './CartHover.css'
import HoverProduct from './HoverProduct/HoverProduct';
import img from '../../Static/Images/pic1.png'

function CartHover() {
  return (
    <div className="cartHover">
        <div className="hoverProducts">
            <HoverProduct img={img} name="REGAL TOASTED CORN 8x250G" quantity='1' price='0.00'/>
            <HoverProduct img={img} name="REGAL TOASTED CORN 8x250G" quantity='1' price='0.00'/>
            <HoverProduct img={img} name="REGAL TOASTED CORN 8x250G" quantity='1' price='0.00'/>
            <HoverProduct img={img} name="REGAL TOASTED CORN 8x250G" quantity='1' price='0.00'/>
            <HoverProduct img={img} name="REGAL TOASTED CORN 8x250G" quantity='1' price='0.00'/>
        </div>
        <div id="total">
            <p>SubTotal:</p>
            <p>$0.00</p>
        </div>
        <button id='hoverViewCart' >View Cart</button>
        <button id='hovercheckoutCart' >Checkout</button>
        <p>We reduce shipping prices to only 2.49 €!</p>
    </div>
  )
}

export default CartHover