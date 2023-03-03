import React from 'react'
import exocitcity from "../static/exsoticcity.png";
import "./css/HeaderSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol } from "mdbreact";
import { IoPersonOutline } from 'react-icons/io5';
import { MdOutlineArrowDropDown } from "react-icons/md";
const HeaderSection = () => {

  return (
    <div className="logo-design">
      <div>
        <img src={exocitcity} alt="Exocitcity" width="170vw" />
        <div>Online Shopping Center</div>
      </div>
      <div className="site-location d-flex">
        <div className="col">
            <div>Your Location</div>
            <div>Select a Location</div>
          
        </div>
        <div className="col-auto">
          <MdOutlineArrowDropDown size={38} className="drop-icon current-location" />
        </div>
      </div>
      <div className="site-location1">
        <MDBCol md="6" size="15" xl="12">
          <input className="form-control " type="text" placeholder="Search for products" aria-label="Search" />
        </MDBCol>
      </div>
      <div className="person-icon">
        <IoPersonOutline size={35} />
      </div>


    </div>
  )
}

export default HeaderSection