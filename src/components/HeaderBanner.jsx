import React from 'react'
import "./css/HeaderBanner.css"
import { Container } from 'react-bootstrap';

const HeaderBanner = () => {
  return (
    <Container fluid className="headerbanner">
      <div className=" text-center ">
        Due to the <strong>COVID 19</strong> epidemic, orders may be processed with a slight delay
      </div>
    </Container>
  )
}

export default HeaderBanner
