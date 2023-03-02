import React from 'react'
import exocitcity from "../static/exsoticcity.png";
import "./css/HeaderSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol } from "mdbreact";
import { IoPersonOutline } from 'react-icons/io5';
const HeaderSection = () => {
  
  return (
    <div className="logo-design">
      <div>
        <img src={exocitcity} alt="Exocitcity" width="170vw" />
        <div>Online Shopping Center</div>
      </div>
      <div className="site-location">
        <a href="/">
          <span className="location-description">Your Location</span>
          <div className="current-location">Select a Location</div>
        </a>
      </div>
      <div className="site-location1">
        <MDBCol md="6">
          <input className="form-control " type="text" placeholder="Search for products" aria-label="Search" />
        </MDBCol>
      </div>
      <div >
        <IoPersonOutline size={35}/>
      </div>


    </div>
  )
}

export default HeaderSection