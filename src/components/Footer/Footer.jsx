import React from 'react'
import PromoAd from './PromoAd/PromoAd';
import './Footer.css';
import Quality from './QualityFooter/Quality';
import FooterMenu from './FooterMenu/FooterMenu';
import ContactMenu from './ContactMenu/ContactMenu';
import CopyRightMenu from './CopyRightMenu/CopyRightMenu';

function Footer() {
  return (
    <div className="footer">
        <PromoAd/>
        <Quality/>
        <FooterMenu/>
        <ContactMenu/>
        <CopyRightMenu/>
    </div>
  )
}

export default Footer