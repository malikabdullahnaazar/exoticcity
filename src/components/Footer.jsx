import React from 'react';
import './css/Footer.css';
import { FiMail } from 'react-icons/fi';
import cupon from '../static/coupon.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col } from 'react-bootstrap';

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
            <Col xs={12} md={6}>
              
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
