import React from 'react';
import './css/Footer.css';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { TbTruckDelivery } from 'react-icons/tb';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { TbDiscount2 } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <Container>
          <Row>
            <Col xs={12} md={6} className="footer-banner">
              <h5>Exotic City</h5>
              <h2>Join our business now</h2>
              <p>Join our email subscription now to get updates on promotions and coupons.</p>
              <InputGroup className="mb-3" >
                <InputGroup.Text>
                  <FiMail />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Your email address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className="input-cupon"
                />
                <Button variant="outline-secondary input-cupon py-3 border rounded p-2 py-2 text-white" id="button-addon2">
                  Subscribe
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col col-12 col-md-6 col-lg-3">
            <div className="iconbox">
              {/* <div className="iconbox-icon"><Icon icon={milkIcon} /></div> */}
              <div className="iconbox-detail">
                <span className="px-2">Everyday fresh products</span>
                 <div className="vertical-line"></div>
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-6 col-lg-3">
            <div className="iconbox">
              <div className="iconbox-icon"><TbTruckDelivery /></div>
              <div className="iconbox-detail">
                <span className="px-2">Free delivery for order over $70</span>
                <div className="vertical-line"></div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-3">
            <div className="iconbox">
              <div className="iconbox-icon flex"> <TbDiscount2 /></div>
              <div className="iconbox-detail flex">
                <span className="px-2">Daily Mega Discounts</span>
                <div className="vertical-line"></div>
                
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-3">
            <div className="iconbox">
              <div class="iconbox-icon"><HiOutlineCurrencyDollar/></div>
              <div className="iconbox-detail">
                <span className="px-2">Best price on the market</span>
                <div className="vertical-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="navigation-container">
      <div className="container">
  <div className="row">
    <div className="col-sm-12 col-md-3">
      <h5>NAVIGATION</h5>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/legal">Legal Notice</Link></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/brands">Brands</Link></li>
      </ul>
    </div>
    <div className="col-sm-12 col-md-3">
      <h5>COSMETICS PRODUCTS</h5>
      <ul>
        <li><Link to="/body-oils">Body Oils</Link></li>
        <li><Link to="/men-care">Men Care</Link></li>
        <li><Link to="/child-care">Child Care</Link></li>
      </ul>
    </div>
    <div className="col-sm-12 col-md-3">
      <h5>HAIR PRODUCTS</h5>
      <ul>
        <li><Link to="/hair-care-products">Hair Care Products</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
        <li><Link to="/other-mixed-hair">Other Mixed Hair</Link></li>
        <li><Link to="/synthetic-hairs">Synthetic Hairs</Link></li>
        <li><Link to="/natural-hair">Natural Hair</Link></li>
      </ul>
    </div>
    <div className="col-sm-12 col-md-3">
      <h5>MEN CARE</h5>
      <ul>
        <li><Link to="/body-oils">Body Oils</Link></li>
        <li><Link to="/body-sprays-perfumes">Body Spry &amp; Perfum</Link></li>
        <li><Link to="/lotions-scrubs">Lotions &amp; Scrubs</Link></li>
        <li><Link to="/creams-serums">Creams &amp; Serum</Link></li>
      </ul>
    </div>
    <div className="col-sm-12 col-md-3">
      <h5>NATURAL HAIR</h5>
      <ul>
        <li><Link to="/body-oils">Body Oils</Link></li>
        <li><Link to="/men-care">Men Care</Link></li>
        <li><Link to="/child-care">Child Care</Link></li>
      </ul>
    </div>
  </div>
</div>
    </div>
    </footer>
  );
};

export default Footer;
