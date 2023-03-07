import React from 'react'
import exocitcity from "../static/exsoticcity.png";
import "./css/HeaderSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol } from "mdbreact";
import { IoPersonOutline } from 'react-icons/io5';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
const HeaderSection = () => {

  return (
    <div className="logo-design">
      <div>
        <img src={exocitcity} alt="Exocitcity" width="170vw" />
        <div>Online Shopping Center</div>
      </div>
      <div class="my-custom-container">
        <div class="border border-white p-2">
          <div class="row">
            <div class="col">Your location</div>
          </div>
          <div class="row">
            <div class="col">Select location</div>
            <div class="col-5 "><i class="bi bi-caret-down-fill"> <MdOutlineArrowDropDown size={38} className="drop-icon current-location" /></i></div>
          </div>
        </div>
      </div>

      <div className="site-location1">
        <MDBCol md="6" size="15" xl="12">
          <input className="form-control " type="text" placeholder="Search for products" aria-label="Search" />
        </MDBCol>
      </div>
      <div className="person-icon icon">

        <IoPersonOutline color='black' size={35} />

      </div>
      <div className="h1 py-4 ">
        $0.00
      </div>
      <div className="person-icon1 icon">
        <AiFillShopping color='red' size={35} />
      </div>


    </div>
  )
}

export default HeaderSection