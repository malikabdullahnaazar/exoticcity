import React from 'react'
import CardComponent from '../CardComponent/CardComponent';
import ViewAll from '../ViewAllComponent/ViewAll';
import './NewProducts.css';
import pic1 from '../../../Static/Images/pic1.png';

function NewProducts() {
  return (
    <div className="newProducts">
        <div className="newProductsHeading">
            <div className="newProductsText">
                <h2>New Products</h2>
                <p>New Products with Updated Stocks.</p>
            </div>
            <ViewAll/>
        </div>
        <div className="newProductGrid">
            <CardComponent pic={pic1}/>
            <CardComponent pic={pic1}/>
            <CardComponent pic={pic1}/>
            <CardComponent pic={pic1}/>
            <CardComponent pic={pic1}/>
            <CardComponent pic={pic1}/>
            <CardComponent pic={pic1}/>
            <CardComponent pic={pic1}/>
            <CardComponent pic={pic1}/>
        </div>
    </div>
  )
}

export default NewProducts