import React from 'react';
import './CopyRightMenu.css';
import payments from '../../../Static/Images/payments.jpg';

function CopyRightMenu() {
  return (
    <div className="copyRightMenu">
        <div className="copyRightClaim">
            <p>Copyright 2022 &#169; Exotic City.</p>
        </div>
        <div className="privacyPolicyMenu">
            <ul>
                <li><a href="/">Service</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Legal Notice</a></li>
                <li><a href="/">Cookies Policy</a></li>
                <li><a href="/"><img src={payments} alt="payment" /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default CopyRightMenu