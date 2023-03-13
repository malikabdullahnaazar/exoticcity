import React from 'react'
import exocitcity from "../Static/exsoticcity.png";
import "./css/HeaderSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { FiSearch } from 'react-icons/fi';

const HeaderSection = () => {

  return (
    <div className="logo-design">
      <div>
        <img src={exocitcity} alt="Exocitcity" width="170vw" />
        <div className="osc">Online Shopping Center</div>
      </div>
      <div class="my-custom-container d-none d-md-block">
        <div class="border border-white p-2 d-none d-md-block">
          <div class="row">
            <div class="col-7 text-muted small">Your location</div>
          </div>
          <div class="row">
            <div class="col-8 font-weight-bold">Select location</div>
            <div class="col align-self-center">
              <MdOutlineArrowDropDown size={28} className="drop-icon current-location" />

            </div>
          </div>
        </div>
      </div>



      <div className="search-container d-none d-md-block">
        <input type="text" placeholder="Search..." />
        <FiSearch className="search-icon" />
      </div>
      <div class="d-flex justify-content-center align-items-center">
  <div class="d-none d-md-block mr-3">
    <CgProfile color="black" size={35} />
  </div>
  <div class="h4 mr-auto my-3 mx-4">$0.00</div>
  <div class="ml-3 ">
    <GiShoppingBag size={30}/>
  </div>
</div>




    </div>
  )
}

export default HeaderSection