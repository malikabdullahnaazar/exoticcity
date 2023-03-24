import React from 'react';
import DescRelatedProducts from './DescRelatedProducts/DescRelatedProducts';
import ProductDesc from './ProductDesc/ProductDesc';
import './ProductOverview.css';
import Reviews from './Reviews/FloatingActionButtonZoom';

function ProductOverview() {
  return (
    <div className="productOverview">
        <h2 style={{ fontWeight: 600}} >OPALYA GEL DOUCHE GOMMANT ECLEC. VANILLE 300ML</h2>
        <ProductDesc/>
        <Reviews />
        <DescRelatedProducts/>
    </div>
  )
}

export default ProductOverview