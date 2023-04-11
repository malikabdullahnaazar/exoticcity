import React from 'react';
import DescRelatedProducts from './DescRelatedProducts/DescRelatedProducts';
import ProductDesc from './ProductDesc/ProductDesc';
import './ProductOverview.css';
import Reviews from './Reviews/FloatingActionButtonZoom';
import Layout from '../Layout'
import { useLocation } from 'react-router-dom';
function ProductOverview(props) {
  const location = useLocation();
  const {product }=location.state;
  return (
    <Layout>
    <div className="productOverview">
        <h2 style={{ fontWeight: 600}} >OPALYA GEL DOUCHE GOMMANT ECLEC. VANILLE 300ML</h2>
        <ProductDesc product={product}/>
        <Reviews  product={product} />
        <DescRelatedProducts  product={product}/>
    </div>
    </Layout>
  )
}

export default ProductOverview