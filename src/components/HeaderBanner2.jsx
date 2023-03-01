import React from 'react'
import "./css/HeroBanner2.css"
const HeaderBanner2 = () => {
    return (
        <div >
            <span>
               <a href="/" className="herobanner2 list-elememts">My account</a> 
                <a href="/" className="herobanner2 list-elememts">Order Tracking</a> 
                 <a href="/"className="herobanner2 list-elememts">Scan Barcode</a> 
                <a href="/" className="herobanner2 list-elememts"> Wishlist</a>
            </span>
            <span className="padded-span1">
            100% Secure delivery without contacting the courier
            </span>
            <span  className="padded-span">
                Call Us:   +324   228   04   00
            </span>
            <hr />
        </div>
       
    )
}

export default HeaderBanner2