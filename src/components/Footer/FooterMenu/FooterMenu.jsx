import React from 'react';
import {Link} from 'react-router-dom';
import './FooterMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function FooterMenu() {
  return (
    <div className="container-fluid footerMenu ">
    <div className="row">
      <div className="col-md-2 ">
        <ul>
          <p>Navigation</p>
          <Link to="/legal-notice" className='text-decoration-none text-black'><li>Legal Notice</li></Link>
          <Link to="/privacy-policy" className='text-decoration-none text-black'><li>Privacy Policy</li></Link>
          <Link to="/services" className='text-decoration-none text-black'><li>Service</li></Link>
          <Link to="/contact" className='text-decoration-none text-black'><li>Contact US</li></Link>
          <Link to="/brands" className='text-decoration-none text-black'><li>Brands</li></Link>
      
        
        </ul>
      </div>
      <div className="col-md-2">
        <ul>
          <p>COSMETICS PRODUCTS</p>
          <Link to="/shop/BODY OILS" className='text-decoration-none text-black'><li>Body Oils</li></Link>
          <Link to="/shop/HAIR CARE PRODUCTS" className='text-decoration-none text-black'><li>Men Care</li></Link>
          <Link to="/shop/CHILD CARE" className='text-decoration-none text-black'><li>Child Care</li></Link>
        </ul>
      </div>
      <div className="col-md-3">
        <ul>
          <p>HAIR PRODUCTS</p>
          <Link to="/shop/HAIR CARE PRODUCTS" className='text-decoration-none text-black'><li>Hair Care Products</li></Link>
          <Link to="/shop/ACCESSOIRES" className='text-decoration-none text-black'><li>Accessoires</li></Link>
          <Link to="/shop/HAIR COLOUR" className='text-decoration-none text-black'><li>Other Mixed Hair</li></Link>
          <Link to="/shop/SYNTHETIC HAIRS" className='text-decoration-none text-black'><li>SYNTHETIC HAIRS</li></Link>
          <Link to="/shop/NATURAL CONCENTRATES" className='text-decoration-none text-black'><li>Natural Hair</li></Link>
        </ul>
      </div>
      <div className="col-md-3">
        <ul>
          <p>MEN CARE</p>
          <Link to="/shop/BODY OILS" className='text-decoration-none text-black'><li>Body Oils</li></Link>
          <Link to="/shop/BODY SPRY & PERFUM" className='text-decoration-none text-black'><li>Body Spry & Perfum</li></Link>
          <Link to="/shop/LOTIONS & SCRUBS" className='text-decoration-none text-black'><li>Lotions & Scrubs</li></Link>
          <Link to="/shop/CREAMS & SERUMS" className='text-decoration-none text-black'><li>Creams & Serum</li></Link>
        </ul>
      </div>
      <div className="col-md-2">
        <ul>
          <p>NATURAL HAIR</p>
          <Link to="/shop/BODY OILS" className='text-decoration-none text-black'><li>Body Oils</li></Link>
          <Link to="/shop/HAIR CARE PRODUCTS" className='text-decoration-none text-black'><li>Men Care</li></Link>
          <Link to="/shop/CHILD CARE" className='text-decoration-none text-black'><li>Child Care</li></Link>
        </ul>
      </div>
    </div>
  </div>
  
  )
}

export default FooterMenu