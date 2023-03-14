
import { GoThreeBars } from 'react-icons/go';
import "./css/Navbar.css";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from "react";
import Accessories from "../Static/ACCESSORIES.png";
import Body from "../Static/body-care.png";
import children from "../Static/children-care.png";
import drinks from "../Static/drinks.png";
import freshfood from "../Static/fresh-food.png";
import frozenfood from "../Static/frozen-food.png";
import hair from "../Static/hair-care.png";
import humanhair from "../Static/HUMAN-hair.png";
import mencare from "../Static/men-care.png";
import mixedhair from "../Static/mixed-hair.png";
import preserved from "../Static/preserved-food.png";
import synthetic from "../Static/SYNTHETIC-hair.png";
import { DropdownButton } from 'react-bootstrap';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);


  const handleMouseEnter = (dropdownNumber) => {
    switch (dropdownNumber) {
      case 1:
        setShowDropdown1(true);
        break;
      case 2:
        setShowDropdown2(true);
        break;
      case 3:
        setShowDropdown3(true);
        break;
      case 4:
        setShowDropdown4(true);
        break;
      default:
        break;
    }
  };
  const handleMouseLeave = (dropdownNumber) => {
    switch (dropdownNumber) {
      case 1:
        setShowDropdown1(false);
        break;
      case 2:
        setShowDropdown2(false);
        break;
      case 3:
        setShowDropdown3(false);
        break;
      case 4:
        setShowDropdown4(false);
        break;
      default:
        break;
    }
  };
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <>
      <div className="d-none d-md-block">
        <Nav variant="pills" onSelect={handleSelect}>
          <DropdownButton
          className=""
            title={
              <>
                <i className="fas fa-search me-3">
                  <GoThreeBars size={23} />
                </i>{' '}
                All Categories{'  '}
                <i className=" ms-4">
                </i>
              </>
            }
          >
            <div style={{ width: "18vw", height: "100vh", marginTop: "2vh", backgroundColor: "transparent" }}>
              <div className="container">
                <div className="row my-3">
                  <div className="col-sm  ">
                    <div className="d-flex justify-content-start">
                      <img src={Accessories} alt="Accessories" width="36" height="36" />
                      <Link className="link">Non Food</Link>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm  ">
                    <div className="d-flex justify-content-start">
                      <img src={Body} alt="Accessories" width="36" height="36" />
                      <Link className="link">Body Oils</Link>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm  ">
                    <div className="d-flex justify-content-start">
                      <img src={drinks} alt="Accessories" width="36" height="36" />
                      <Link className="link">Drinks</Link>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm  ">
                    <div className="d-flex justify-content-start">
                      <img src={freshfood} alt="Accessories" width="36" height="36" />
                      <Link className="link">Fresh Food</Link>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm  ">
                    <div className="d-flex justify-content-start">
                      <img src={frozenfood} alt="Accessories" width="36" height="36" />
                      <Link className="link">Frozen Food</Link>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm  ">
                    <div className="d-flex justify-content-start">
                      <img src={children} alt="Accessories" width="36" height="36" />
                      <Link className="link">Child Care</Link>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm  ">
                    <div className="d-flex justify-content-start">
                      <img src={hair} alt="Accessories" width="36" height="36" />
                      <Link className="link">Hair care Products</Link>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm  ">
                    <div className="d-flex justify-content-start">
                      <img src={mencare} alt="Accessories" width="36" height="36" />
                      <Link className="link">Men Care</Link>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm  ">
                    <div className="d-flex justify-content-start">
                      <img src={humanhair} alt="Accessories" width="36" height="36" />
                      <Link className="link">Human Hair</Link>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm  ">
                    <div className="d-flex justify-content-start">
                      <img src={mixedhair} alt="Accessories" width="36" height="36" />
                      <Link className="link">Wings And Extension</Link>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm  ">
                    <div className="d-flex justify-content-start">
                      <img src={synthetic} alt="Accessories" width="36" height="36" />
                      <Link className="link">Synthetic Hair</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </DropdownButton>
          <Nav.Item >
            <Nav.Link className="navbar-link" eventKey="1" href="/"  >
              HOME
            </Nav.Link>
          </Nav.Item>
          <NavDropdown
            className="navbar-link"
            title="FOODS"
            id="nav-dropdown"
            show={showDropdown1}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <div style={{ width: "100vw", height: "300px", overflowY: "scroll", backgroundColor: "transparent" }}>

              <div className="container">
                <div className="row">
                  <div className="col-sm-2">
                    <NavDropdown.Item className="nav-header"> Frozen Food</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Chicken</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Fish</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Meat & Beef</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Ready to Eat</NavDropdown.Item>
                  </div>
                  <div className="col-sm-2">
                    <NavDropdown.Item className="nav-header"> Frozen Food</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Chicken</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Fish</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Meat & Beef</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Ready to Eat</NavDropdown.Item>
                  </div>
                  <div className="col-sm-2">
                    <NavDropdown.Item className="nav-header"> Frozen Food</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Chicken</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Fish</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Meat & Beef</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Ready to Eat</NavDropdown.Item>
                  </div>
                  <div className="col-sm-2">
                    <NavDropdown.Item className="nav-header"> Frozen Food</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Chicken</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Fish</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Meat & Beef</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Ready to Eat</NavDropdown.Item>
                  </div>
                  <div className="col-sm-2">
                    <NavDropdown.Item className="nav-header"> Frozen Food</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Chicken</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Fish</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Meat & Beef</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Ready to Eat</NavDropdown.Item>
                  </div>
                  <div className="col-sm-2">
                    <NavDropdown.Item className="nav-header"> Frozen Food</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Chicken</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Fish</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Meat & Beef</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Ready to Eat</NavDropdown.Item>
                  </div>
                </div>
              </div>
            </div>
          </NavDropdown>


          <NavDropdown
            className="navbar-link"
            title="FROZEN FOODS"
            id="nav-dropdown0"
            show={showDropdown2}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <div style={{ width: "100vw", height: "300px", overflowY: "scroll", backgroundColor: "transparent" }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm ">
                    <NavDropdown.Item className="nav-header"> Frozen Food</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Chicken</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Fish</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Meat & Beef</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Ready to Eat</NavDropdown.Item>
                  </div>

                </div>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="NON FOOD"
            id="nav-dropdown"
            className="navbar-link"
            show={showDropdown3}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <div style={{ width: "100vw", height: "300px", overflowY: "scroll", backgroundColor: "transparent" }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <NavDropdown.Item className="nav-header"> Non Food</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Chicken</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Fish</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Meat & Beef</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Ready to Eat</NavDropdown.Item>
                  </div>
                </div>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="HAIR AND COSMATICS"
            className="navbar-link"
            id="nav-dropdown2"
            show={showDropdown4}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={() => handleMouseLeave(4)}
          >
            <div style={{ width: "100vw", height: "300px", overflowY: "scroll", backgroundColor: "transparent" }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <NavDropdown.Item className="nav-header"> Frozen Food</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Chicken</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Fish</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Meat & Beef</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Ready to Eat</NavDropdown.Item>
                  </div>
                  <div className="col-sm">
                    <NavDropdown.Item className="nav-header"> Frozen Food</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Chicken</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Fish</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Meat & Beef</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Ready to Eat</NavDropdown.Item>
                  </div>
                  <div className="col-sm">
                    <NavDropdown.Item className="nav-header"> Frozen Food</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Chicken</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Fish</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Meat & Beef</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Ready to Eat</NavDropdown.Item>
                  </div>
                  <div className="col-sm">
                    <NavDropdown.Item className="nav-header"> Frozen Food</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Chicken</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Fish</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Meat & Beef</NavDropdown.Item>
                    <NavDropdown.Item>Frozen Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Ready to Eat</NavDropdown.Item>
                  </div>

                </div>
              </div>
            </div>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link eventKey="2" className="navbar-link" >
              ABOUT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" className="navbar-link">
              CONTACT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" className="navbar-link">
              BRANDS
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <hr />

    </>
  )
}

export default Navbar;

