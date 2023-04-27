import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import './DescRelatedProducts.css';
import { UserContext } from '../../../UserContext';
// import pic from '../../../Static/Images/pic3.jpg';
import Card from '../../NewCardComponent/NewCardComponent';

function DescRelatedProducts(props) {
  const { filterprice } = useContext(UserContext);
  const {product}=props;
  // const relatedProducts = getRelatedProducts(props.product,filterprice);
  const [relatedProducts, setrelatedProducts] = useState(null);
  useEffect(() => {
    
    return () => {
      if (filterprice && product) {
        console.log(filterprice,product);
        // Filter the list of products to find products in the same category
        const relatedProducts = filterprice.filter(p => p.Category === product.Category && p.SubCategory === product.SubCategory && p.itemNo !== product.itemNo);
        // Check if any related products were found
        if (relatedProducts.length > 0) {
          // Return an array of related products
          console.log("Related products:", relatedProducts);
        } else {
          console.log("No related products found.");
        }
      } else {
        console.log("Filter or product is null.");
      }
    // console.log(relatedProducts);
    }
  }, [filterprice,product])
  
  // function getRelatedProducts(currentProduct,fp) {
    
  // }
  return (
    <div className="descRelatedProducts">
        <h2>Related Products</h2>
        <div className="relatedCards">
        {relatedProducts?relatedProducts.map(product => (
          
          <div className="col-sm-4" key={product.itemNo}>
           <Link to={`/product/${product.itemNo}`} className="text-decoration-none">
                        <div className="card">
                          <Card Brand={product.Brand} No={product.No}
                            price={product.unitprice} Description={product.Description}
                            weight={product.weight} quantity={product.quantity} picture={product.SystemId} />
                        </div>
                      </Link>
          </div>
        )):''}
        
        {/* <NewCardComponent pic={pic}/>
        <NewCardComponent pic={pic}/>
        <NewCardComponent pic={pic}/> */}
        </div>
    </div>
  )
}

export default DescRelatedProducts