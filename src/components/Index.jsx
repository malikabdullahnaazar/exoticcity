import React from 'react'
import HeadderBanner from "./HeaderBanner";
import HeadderBanner2 from "./HeaderBanner2";
import HeaderSection from "./HeaderSection";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Left from './Left/Left';
import ProductGrid from './ProductGrid/ProductGrid';
import Right from './Right/Right';

const Index = () => {
  return (
   <>
   < HeadderBanner />
   < HeadderBanner2 />
   <HeaderSection />
   <NavBar/>
   <Footer/>
   <div className="App">
      <div className='appBody'>
      <Left/>
      <Right/>
      </div>
      <ProductGrid/>
    </div>
   </>
  )
}

export default Index