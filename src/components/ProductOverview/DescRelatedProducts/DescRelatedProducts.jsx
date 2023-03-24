import React from 'react';
import './DescRelatedProducts.css';
import pic from '../../../Static/Images/pic3.jpg';
import NewCardComponent from '../../Right/NewProducts/NewCardComponent/NewCardComponent';

function DescRelatedProducts() {
  return (
    <div className="descRelatedProducts">
        <h2>Related Products</h2>
        <div className="relatedCards">
        <NewCardComponent pic={pic}/>
        <NewCardComponent pic={pic}/>
        <NewCardComponent pic={pic}/>
        <NewCardComponent pic={pic}/>
        </div>
    </div>
  )
}

export default DescRelatedProducts