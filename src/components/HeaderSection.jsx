import React from 'react'
import exocitcity from "../static/exsoticcity.png";
import "./css/HeaderSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const HeaderSection = () => {

  return (
    <div className="logo-design">
      <div>
        <img src={exocitcity} alt="Exocitcity" width="170vw" />
        <div className="osc">Online Shopping Center</div>
      </div>
      <div class="my-custom-container">
        <div class="border border-white p-2">
          <div class="row">
            <div class="col">Your location</div>
          </div>
          <div class="row">
            <div class="col">Select location</div>
            <div class="col-3  "><i class="bi bi-caret-down-fill"> <MdOutlineArrowDropDown size={28} className="drop-icon current-location" /></i></div>
          </div>
        </div>
      </div>

      <div className="site-location1">
      <InputGroup className="mb-3 "  >
                <InputGroup.Text>
                <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Your email address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className="input-cupon"
                />
                <Button variant="outline-secondary  "  id="button-addon2">
                  Search
                </Button>
              </InputGroup>
      </div>
      <div className="person-icon icon icon1">

        <IoPersonOutline color='black' size={35} />

      </div>
      <div className="h1  ">
        $0.00
      </div>
      <div className="person-icon icon">
        <AiFillShopping color='red' size={35} />
      </div>


    </div>
  )
}

export default HeaderSection