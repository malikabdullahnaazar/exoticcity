
import { GoThreeBars } from 'react-icons/go';
import { RxTriangleDown } from 'react-icons/rx';
import "./css/Navbar.css";
// import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from "react";

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
      <div>
          <Nav variant="pills"  onSelect={handleSelect}>
          <button className="btn btn-sm btn-rounded w-15 btn-primary mx-5 my-7 ">
            <i className="fas fa-search me-3 "> <GoThreeBars size={23} /></i> All Categories
            <i className="fas fa-chevron-right ms-4"><RxTriangleDown size={26} /></i>
          </button>
      <Nav.Item>
        <Nav.Link className="navbar-link" eventKey="1" href="#/home">
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
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown
        className="navbar-link"
        title="FROZEN FOODS"
        id="nav-dropdown0"
        show={showDropdown2}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave(2)}
      >
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown
        title="NON FOOD"
        id="nav-dropdown"
        className="navbar-link"
        show={showDropdown3}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={() => handleMouseLeave(3)}
      >
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown
        title="HAIR AND COSMATICS"
        className="navbar-link"
        id="nav-dropdown2"
        show={showDropdown4}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={() => handleMouseLeave(4)}
      >
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link eventKey="2" className="navbar-link" href="#/home">
        ABOUT
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" className="navbar-link" href="#/home">
        CONTACT
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" className="navbar-link" href="#/home">
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

