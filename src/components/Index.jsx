import React, { useContext, useEffect } from 'react';
import Left from './Left/Left';
import "../components/css/Index.css";
import ProductGrid from './ProductGrid/ProductGrid';
import Right from './Right/Right';
import Categorie from '../components/Categories/Categories';
import Layout from './Layout';
import ExclusiveBrands from './ExclusiveBrands/ExclusiveBrands';
import { UserContext } from '../UserContext';

const Index = () => {
  const { setSearch } = useContext(UserContext);

  useEffect(() => {
    setSearch('');
  });

  return (
    <>
      <Layout>
        <div className="App">
          <div className='appBody'>
            <Left />
            <Right />
          </div>
          <ProductGrid />
          <Categorie />
          <ExclusiveBrands />
        </div>
      </Layout>
    </>
  );
};

export default Index;