import React from 'react';
import {useEffect} from 'react';
import DescRelatedProducts from './DescRelatedProducts/DescRelatedProducts';
import ProductDesc from './ProductDesc/ProductDesc';
import './ProductOverview.css';
import Reviews from './Reviews/FloatingActionButtonZoom';
import Layout from '../Layout'
import { useParams } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
function ProductOverview(props) {
  let prams=useParams();
useEffect(() => {
  

  return () => {
    console.log(prams.Brand);
  }
}, [prams])

  return (
    <Layout>
    <div className="productOverview">
        <h2 style={{ fontWeight: 600}} >OPALYA GEL DOUCHE GOMMANT ECLEC. VANILLE 300ML</h2>
        <ProductDesc />
        <Reviews  />
        <DescRelatedProducts  />
    </div>
    </Layout>
  )
}

export default ProductOverview