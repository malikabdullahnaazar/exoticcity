import React from 'react'
import "./css/HederBanner2.css"
import  { Link } from "react-router-dom";
const HeaderBanner2 = () => {
    return ( 
        <div className="hadder-banner" >
            <span>
               <Link to="/my-account" className="herobanner2 list-elememts">My account</Link> 
                <Link to="/order-tracking" className="herobanner2 list-elememts">Order Tracking</Link> 
                 <Link to="/"className="herobanner2 list-elememts">Scan Barcode</Link> 
                <Link to="/wishlist" className="herobanner2 list-elememts"> Wishlist</Link>
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