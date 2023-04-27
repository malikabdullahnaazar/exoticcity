import React from 'react';
import {Link} from 'react-router-dom';
import './DescRelatedProducts.css';
// import pic from '../../../Static/Images/pic3.jpg';
import Card from '../../NewCardComponent/NewCardComponent';

function DescRelatedProducts(props) {

  const {relatedProducts}=props;
 
  return (
    <div className="descRelatedProducts">
        <h2>Related Products</h2>
        <div className="relatedCards">
        {relatedProducts ? relatedProducts.slice(0, 4).map(product => (
  <div className="col-sm-4" key={product.itemNo}>
    <Link to={`/product/${product.itemNo}`} className="text-decoration-none">
      <div className="card">
        <Card Brand={product.Brand} No={product.No}
          price={product.unitprice} Description={product.Description}
          weight={product.weight} quantity={product.quantity} picture={product.itemSystemid} />
      </div>
    </Link>
  </div>
)) : ''}
        </div>
    </div>
  )
}

export default DescRelatedProducts