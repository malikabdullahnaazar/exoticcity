import React from 'react'
import './ProductList.css'
import Layout from '../../Layout'
import ListItems from './ListItems/ListItems'
import pic from '../../../Static/Images/milk.png';
import { Link } from 'react-router-dom';

function ProductList() {
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
                <ListItems pic={pic} name="OPALYA GEL DOUCHE GOMMANT AMANDE DOUCE 300ML" price="0.00" quantity='1' subtotal='0.00' />
                <ListItems pic={pic} name="OPALYA GEL DOUCHE GOMMANT AMANDE DOUCE 300ML" price="0.00" quantity='1' subtotal='0.00' />
                <ListItems pic={pic} name="OPALYA GEL DOUCHE GOMMANT AMANDE DOUCE 300ML" price="0.00" quantity='1' subtotal='0.00' />
                <ListItems pic={pic} name="OPALYA GEL DOUCHE GOMMANT AMANDE DOUCE 300ML" price="0.00" quantity='1' subtotal='0.00' />
            </div>
        </div>
    </div>
    <div className="proceed">
        <h1>CART TOTALS</h1>
        <h5>
            <h6>Subtotal</h6>
            <p>$12.00</p>
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