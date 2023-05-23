import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './PromoAd.css';
import coupon from '../../../Static/Images/coupon.png';
import { FiMail } from 'react-icons/fi';

function PromoAd() {
  return (
    <div className="promoAd row align-items-center">
      <div className="col-lg-6">
        <h6 style={{ fontSize: 'large', fontWeight: 400, color: 'white' }}>Exotic City</h6>
        <h3 style={{ fontSize: 'x-large', color: 'white' }}>Join our Business now</h3>
        <p style={{ fontSize: 'smaller', color: 'rgb(173, 173, 173)' }}>Join our email subscription now to get updates on promotions and coupons.</p>
        <InputGroup className="mb-3 d-flex align-items-center">
          <InputGroup.Text id="basic-addon1" style={{ color: 'rgb(118, 117, 117)' ,height:'8vh'}} ><FiMail size={30}/></InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id='inputFooter'
          />
          <button className="btn btn-primary ml-3">Subscribe</button>
        </InputGroup>
      </div>
      <div className="col-lg-6 ">
        <img src={coupon} alt="coupon" style={{ maxWidth: '100%', height: '50vh' }} />
      </div>
    </div>

  )
}

export default PromoAd