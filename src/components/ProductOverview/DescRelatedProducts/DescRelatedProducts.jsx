import React from 'react';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import './DescRelatedProducts.css';
import { UserContext } from '../../../UserContext';
// import pic from '../../../Static/Images/pic3.jpg';
import Card from '../../NewCardComponent/NewCardComponent';

function DescRelatedProducts(props) {
  function getRelatedProducts(currentProduct,fp) {
    // Get the current product's category
    const currentCategory = currentProduct.Category;
    // Get the current product's sub-category
    const currentSubCategory = currentProduct.SubCategory;
    // Filter the list of products to find products in the same category
    const relatedProducts =fp.filter(product => product.category === currentCategory && product.SubCategory === currentCategory && product.itemNo !== currentProduct.itemNo);
    // Return an array of related products
    return relatedProducts;
  }
  const { filterprice } = useContext(UserContext);
  const relatedProducts = getRelatedProducts(props.product,filterprice);
  return (
    <div className="descRelatedProducts">
        <h2>Related Products</h2>
        <div className="relatedCards">
        {relatedProducts.map(product => (
          
          <div className="col-sm-4" key={product.itemNo}>
           <Link to={`/product/${product.itemNo}`} className="text-decoration-none">
                        <div className="card">
                          <Card Brand={product.Brand} No={product.No}
                            price={product.unitprice} Description={product.Description}
                            weight={product.weight} quantity={product.quantity} picture={product.SystemId} />
                        </div>
                      </Link>
          </div>
        ))}
        
        {/* <NewCardComponent pic={pic}/>
        <NewCardComponent pic={pic}/>
        <NewCardComponent pic={pic}/> */}
        </div>
    </div>
  )
}

export default DescRelatedProducts