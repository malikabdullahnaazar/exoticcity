import React from 'react';
import './FooterMenu.css';

function FooterMenu() {
  return (
    <div className="container-fluid footerMenu ">
    <div className="row">
      <div className="col-md-2 ">
        <ul>
          <p>Navigation</p>
          <li><a href="/">Legal Notice</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Service</a></li>
          <li><a href="/">Contact US</a></li>
          <li><a href="/">Brands</a></li>
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