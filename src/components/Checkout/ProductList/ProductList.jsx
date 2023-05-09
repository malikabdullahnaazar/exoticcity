import React, { useContext,useState } from 'react'
import './ProductList.css'
import Layout from '../../Layout'
import ListItems from './ListItems/ListItems'
import pic from '../../../Static/Images/milk.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import pic4 from '../../../Static/pic4.png';

function ProductList() {

    const CartItem = useContext(UserContext);
function calculateSubtotal(cartItems) {
    let subtotal = 0;
    cartItems.forEach(item => {
      subtotal += item.price * item.quantity;
    });
    return subtotal;
  }
  const subtotal = calculateSubtotal(CartItem.CartItem);
  return (
   <Layout>
    <div className="ProductList">
    <div className="listView">
        <div className="list">
            <div className="heading">
                <p id='empty' ></p>
                <p id='Product' >Product</p>
                <p id='Price' >Price</p>
                <p id='Quantity' >Quantity</p>
                <p id='SubTotal' >SubTotal</p>
            </div>
            <div className="item">
                {CartItem.CartItem?CartItem.CartItem.map((i)=>{
                    return <ListItems pic={i.picture?i.picture:pic4} name={i.Description} subtotal={i.price*i.quantity} price={i.price} quantity={i.quantity} itemno={i.itemNo}   />
                }):''}
            </div>
        </div>
    </div>
    <div className="proceed">
        <h1>CART TOTALS</h1>
        <h5>
            <h6>Subtotal</h6>
            <p>${subtotal?subtotal.toFixed(3):0}</p>
        </h5>
        <h6>
                <h6>Total</h6>
                <p>$12.00</p>
        </h6>
        <Link to='/checkout/fill-info' >
        <button id='proceedButton' >Proceed To Checkout</button></Link>
    </div>
    </div>
    </Layout>
  )
}

export default ProductList