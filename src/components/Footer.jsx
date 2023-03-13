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
import { AiFillInstagram } from 'react-icons/ai';
import { ImWhatsapp } from 'react-icons/im';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { RiFacebookCircleLine } from 'react-icons/ri';
import milk from "../Static/milk.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <Container>
          <Row>
            <Col xs={12} md={6} className="footer-banner">
              <h5>Exotic City</h5>
              <h2>Join our business now</h2>
              <p className="cu-color">Join our email subscription now to get updates on promotions and coupons.</p>
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
              <div className="iconbox-icon"><img src={milk} alt="product" width="20vw" height="20vh" className="img-fluid color-black" /></div>
              <div className="iconbox-detail">
                <span className="px-2">Everyday fresh products</span>
                <span className="d-none d-md-inline-block ">|</span>
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-6 col-lg-3">
            <div className="iconbox">
              <div className="iconbox-icon"><TbTruckDelivery /></div>
              <div className="iconbox-detail">
                <span className="px-2">Free delivery for order over $70</span>
                <span className="d-none d-md-inline-block ">|</span>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-3">
            <div className="iconbox">
              <div className="iconbox-icon flex"> <TbDiscount2 /></div>
              <div className="iconbox-detail flex">
                <span className="px-2">Daily Mega Discounts</span>
                <span className="d-none d-md-inline-block ">|</span>

              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-3">
            <div className="iconbox">
              <div className="iconbox-icon"><HiOutlineCurrencyDollar /></div>
              <div className="iconbox-detail">
                <span className="px-2">Best price on the market</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="px-5 row1 py-5">
        <div className="row px-5 py-5  ">
          <div className="col-sm-17 col-md-2 px-4 ">
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
          <div className="col-sm-12 col-md-2 px-4 ">
            <h5>COSMETICS PRODUCTS</h5>
            <ul>
              <li><Link to="/body-oils">Body Oils</Link></li>
              <li><Link to="/men-care">Men Care</Link></li>
              <li><Link to="/child-care">Child Care</Link></li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-2 px-4">
            <h5>HAIR PRODUCTS</h5>
            <ul>
              <li><Link to="/hair-care-products">Hair Care Products</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
              <li><Link to="/other-mixed-hair">Other Mixed Hair</Link></li>
              <li><Link to="/synthetic-hairs">Synthetic Hairs</Link></li>
              <li><Link to="/natural-hair">Natural Hair</Link></li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-2 px-4">
            <h5>MEN CARE</h5>
            <ul>
              <li><Link to="/body-oils">Body Oils</Link></li>
              <li><Link to="/body-sprays-perfumes">Body Spry &amp; Perfum</Link></li>
              <li><Link to="/lotions-scrubs">Lotions &amp; Scrubs</Link></li>
              <li><Link to="/creams-serums">Creams &amp; Serum</Link></li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-3 px-4">
            <h5>NATURAL HAIR</h5>
            <ul>
              <li><Link to="/body-oils">Body Oils</Link></li>
              <li><Link to="/men-care">Men Care</Link></li>
              <li><Link to="/child-care">Child Care</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <div className="row">
            <div className="col-sm-4 col-md-6">
              <div className="d-flex align-items-center">
                <span className="me-2"><BiPhoneCall size={28} /></span>
                <div>
                  <p className="mb-0 fw-bold">+324 228 04 00</p>
                  <p className="mb-0 desc">info@exoticcity.eu</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div className="d-flex align-items-center">
                <span className="me-2"><i className="bi bi-geo-alt"></i></span>
                <div>
                  <p className="mb-0 contact fw-bold">Contact Us</p>
                  <p className="mb-0 desc">Av. de l'Expansion 1 4432 Alleur</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-1">
              <div className="d-flex justify-content-start">
                <span className="me-3"><RiFacebookCircleLine color="blue" /></span>
                <span className="me-3"><AiFillInstagram color="blue" /></span>
                <span className="me-3"><AiFillLinkedin color="blue" /></span>
                <span><ImWhatsapp color="blue" /></span>
              </div>
              <div className="row">

              </div>
            </div>

          </div>
          <hr />
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <p className="text-start desc">Copyright 2022 © Exotic City.</p>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="d-flex justify-content-end">
                <div className="me-3">
                  <Link className="desc mx-1">Service</Link>
                  <Link className="desc mx-1">Privacy Policy</Link>
                  <Link className="desc mx-1"> Legal Notice</Link>
                  <Link className="desc mx-1"> Cookies Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
