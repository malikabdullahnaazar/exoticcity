import React from 'react';
import './DescRelatedProducts.css';
import pic from '../../../Static/Images/pic3.jpg';
import NewCardComponent from '../../NewCardComponent/NewCardComponent';
import {Link } from "react-router-dom"
function DescRelatedProducts() {
  return (
    <div className="descRelatedProducts">
        <h2>Related Products</h2>
        <div className="relatedCards">
          <Link to="/product" className='Link'><NewCardComponent pic={pic}/></Link>
          <Link to="/product" className='Link'><NewCardComponent pic={pic}/></Link>
          <Link to="/product" className='Link'><NewCardComponent pic={pic}/></Link>
          <Link to="/product" className='Link'><NewCardComponent pic={pic}/></Link>
        </div>
    </div>
  )
}

export default DescRelatedProducts