import React from 'react'
import "./css/HederBanner2.css"
import  { Link } from "react-router-dom";
import {MdOutlineVerifiedUser} from 'react-icons/md';
import dutch from '../Static/Images/dutch.png';
import uk from '../Static/Images/uk.png';
import french from '../Static/Images/french.png';
import german from '../Static/Images/german.png';
const HeaderBanner2 = () => { 
    return ( 
        <div className="hadder-banner firstNavbar "  >
            <span className=' d-md-block d-none'>
               <Link to="/my-account" className="herobanner2 list-elememts">My account</Link> 
                <Link to="/order-tracking" className="herobanner2 list-elememts">Order Tracking</Link> 
                 <Link to="/"className="herobanner2 list-elememts">Scan Barcode</Link> 
                <Link to="/wishlist" className="herobanner2 list-elememts"> Wishlist</Link>
            </span>
            <p className=' d-md-block d-none'><MdOutlineVerifiedUser/> 100% Secure delivery without contacting the courier</p>
        <p id='firstNavbarContact'className=' d-md-block d-none' >Call Us: <a href="/"><strong>+92 32 5698 765</strong></a></p>
        <p id='firstNavbarFlags' className=' d-md-block d-none'>
            <button><img src={dutch}  height="20" alt="flag" /></button>
            <button><img src={uk} alt="flag" /></button>
            <button><img src={french} alt="flag" /></button>
            <button><img src={german} alt="flag" /></button>
        </p>
        </div>
       
    )
}

export default HeaderBanner2