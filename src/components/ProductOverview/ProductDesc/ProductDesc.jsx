import React from 'react';
import {useEffect} from 'react';
import './ProductDesc.css';
import { AiFillHeart } from'react-icons/ai';
import { BsFacebook } from'react-icons/bs';
import { BsPinterest } from'react-icons/bs';
import { BsLinkedin } from'react-icons/bs';
import { AiFillTwitterCircle } from'react-icons/ai';
import { AiFillRedditCircle } from'react-icons/ai';
import { FaWhatsappSquare } from'react-icons/fa';
import { TbTruckDelivery } from'react-icons/tb';
import { GiMilkCarton } from'react-icons/gi';
import { CiDollar } from'react-icons/ci';
import pic4 from '../../../Static/Images/pic4.jpg';
import paly from '../../../Static/Images/paly.png';

function ProductDesc(props) {
    const {product}=props;
    // useEffect(() => {
      
    
    //   return () => {
    //     console.log(product);
    //   }
    // }, [product])
    
  return (
    <div className="productDesc">
        <div className="descImage">
        <img src={pic4} alt="pic" />
        </div>

        <div className="descPricing">
            <h2 style={{ color: '#d51243' }} >$ {product?(product.unitprice):("Nill")}</h2>
            <p style={{ color: '#00b853', padding: '0.4rem', backgroundColor: '#e5f8ed', width: '5rem', borderRadius: '2rem', fontSize: 'small', textAlign: 'center' }} >{product&&product.minimumquantity>=1?("IN STOCK"):"OUT OF STOCK"}</p>
            <p style={{ border: '0.4px solid rgb(196, 196, 196)', padding: '0.3rem' }}>Packaging: <span style={{ borderLeft: '0.4px solid rgb(196, 196, 196)', marginLeft: '2rem' }} >300ML x 0.5KG pcs</span></p>
            <p style={{ color: 'rgb(167, 167, 167)', border: '0.8px solid rgb(170, 170, 170)', padding: '0.5rem', width: '10rem', borderRadius: '1.3rem', textAlign: 'center', marginBottom: '2rem', borderBottom: '0.8px solid rgb(173, 173, 173)' }} ><AiFillHeart/> Add To Wishlist</p>
            <p style={{ fontSize: 'smaller', color: 'rgba(173, 173, 173)' }} >Categories: <span><a href="/" style={{ textDecoration: 'none', color: 'rgba(130, 130, 130)' }} > {product?(product.Category,product.SubCategory):"Nill"}</a></span></p>
            <img src={paly} alt="paly" />
            <div className="descIcons">
                <BsFacebook id='fb' />
                <AiFillTwitterCircle id='twtr' />
                <BsPinterest id='pntrst' />
                <BsLinkedin id='ln' />
                <AiFillRedditCircle id='rddt' />
                <FaWhatsappSquare id='wa' />
            </div>
            </div>

        <div className="descPrecautions">
            <p style={{ color: '#be143c', backgroundColor: '#ffeef2', padding: '0.9rem', fontSize: 'small', textAlign: 'center' }} >Covid-19 Info: <span>We Keep Delivering</span></p>
            <div style={{ backgroundColor: '#e7e7e7', fontSize: 'smaller', borderRadius: '0.8rem' }} >
                <p><TbTruckDelivery className='precautionsIcons' /> <span>Free Shipping apply to all orders over $100</span></p>
                <p><GiMilkCarton className='precautionsIcons' /> <span>Guranteed 100% Organic from natural farmas</span></p>
                <p><CiDollar className='precautionsIcons' /> <span>1 Day Returns if you change your mind</span></p>
            </div>

        
        </div>
    </div>
  )
}

export default ProductDesc