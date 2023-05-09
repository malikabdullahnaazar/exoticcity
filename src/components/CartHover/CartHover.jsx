import React, { useContext } from 'react';
import './CartHover.css'
import HoverProduct from './HoverProduct/HoverProduct';
import img from '../../Static/Images/pic1.png'
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';

function CartHover() {

  const CartItem = useContext(UserContext);

  return (
    <div className="cartHover">
        <div className="hoverProducts">
            {
              CartItem?CartItem.CartItem.map((i)=>{
                return <HoverProduct img={i.img} picture={i.picture} name={i.Description} quantity={i.quantity} itemno={i.itemNo} price={i.price.toFixed(3)}/>
              }):''
            }
        </div>
        <div id="total">
            <p>SubTotal:</p>
            <p>$0.00</p>
        </div>
        <Link to='/checkout'><button id='hoverViewCart' >View Cart</button></Link>
        <Link to='/checkout/fill-info' ><button id='hovercheckoutCart' >Checkout</button></Link>
        <p>We reduce shipping prices to only 2.49 €!</p>
    </div>
  )
}

export default CartHover