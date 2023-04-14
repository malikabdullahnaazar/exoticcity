import React from 'react';
import {useState,useContext,useEffect} from 'react';
import DescRelatedProducts from './DescRelatedProducts/DescRelatedProducts';
import ProductDesc from './ProductDesc/ProductDesc';
import './ProductOverview.css';
import Reviews from './Reviews/FloatingActionButtonZoom';
import Layout from '../Layout'
import { useParams } from "react-router-dom";
import { UserContext } from '../../UserContext';
// import { useLocation } from 'react-router-dom';
function ProductOverview(props) {
  const { filterprice } = useContext(UserContext);
  const [product, setproduct] = useState(null)
  let prams=useParams();
  let pram=parseInt(prams.slug);
 
  useEffect(() => {
    
    
     
    return () => {
      if (filterprice && prams) {
        const filteredProduct = filterprice.findIndex(prod => prod.itemNo === prams.slug);
         setproduct(filterprice[filteredProduct])

      }
      return null;
    }
    
  }, [filterprice,prams,pram])
  

  return (
    <Layout>
    <div className="productOverview">
    
        <h2 style={{ fontWeight: 600}} >{product?(product.Description):("product")}</h2>
        <ProductDesc product={product} />
        <Reviews product={product} />
        <DescRelatedProducts product={product} />
    </div>
    </Layout>
  )
}

export default ProductOverview