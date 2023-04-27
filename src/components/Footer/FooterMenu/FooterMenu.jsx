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
          <Link to="" className='text-decoration-none text-black'><li>Legal Notice</li></Link>
          <Link to="" className='text-decoration-none text-black'><li>Privacy Policy</li></Link>
          <Link to="/services" className='text-decoration-none text-black'><li>Service</li></Link>
          <Link to="/contact" className='text-decoration-none text-black'><li>Contact US</li></Link>
          <Link to="/brands" className='text-decoration-none text-black'><li>Brands</li></Link>
        
        </ul>
      </div>
      <div className="col-md-2">
        <ul>
          <p>COSMETICS PRODUCTS</p>
          <li><a href="/">Body Oils</a></li>
          <li><a href="/">Men Care</a></li>
          <li><a href="/">Child Care</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <ul>
          <p>HAIR PRODUCTS</p>
          <li><a href="/">Hair Care Products</a></li>
          <li><a href="/">Accessoires</a></li>
          <li><a href="/">Other Mixed Hair</a></li>
          <li><a href="/">SYNTHETIC HAIRS</a></li>
          <li><a href="/">Natural Hair</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <ul>
          <p>MEN CARE</p>
          <li><a href="/">Body Oils</a></li>
          <li><a href="/">Body Spry & Perfum</a></li>
          <li><a href="/">Lotions & Scrubs</a></li>
          <li><a href="/">Creams & Serum</a></li>
        </ul>
      </div>
      <div className="col-md-2">
        <ul>
          <p>NATURAL HAIR</p>
          <li><a href="/">Body Oils</a></li>
          <li><a href="/">Men Care</a></li>
          <li><a href="/">Child Care</a></li>
        </ul>
      </div>
    </div>
  </div>
  
  )
}

export default FooterMenu