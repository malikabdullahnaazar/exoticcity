import React from 'react'
import Left from './Left/Left';
import "../components/css/Index.css"
import ProductGrid from './ProductGrid/ProductGrid';
import Right from './Right/Right';
import Layout from './Layout';
import ExclusiveBrands from './ExclusiveBrands/ExclusiveBrands';

const Index = () => {
  return (
   <>
   <Layout>
   <div className="App">
      <div className='appBody'>
      <Left/>
      <Right/>
      </div>
      <ProductGrid/>
      <ExclusiveBrands/>
    </div>
     </Layout>
   </>
  )
}

export default Index