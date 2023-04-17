import React from 'react'
import exocitcity from "../Static/exsoticcity.png";
import "./css/HeaderSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsPerson } from 'react-icons/bs';
import search from '../Static/Images/search.png';

const HeaderSection = () => {

  function handleClick() {
    // Create popup
    const popup = document.createElement('div');
    popup.classList.add('popup');


    // Create header and header description
    const header = document.createElement('div');
    header.classList.add('header');

    const headerText = document.createElement('div');
    headerText.classList.add('header-text');
    headerText.classList.add('header-color');

    const headerDesc = document.createElement('div');
    headerDesc.classList.add('header-desc');

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.textContent = 'X';
    cancelButton.addEventListener('click', () => {
      document.body.removeChild(popup);
    });

    headerText.textContent = 'Choose your Delivery Location';
    headerDesc.textContent = 'Enter your address and we will specify the offer for your area.';

    header.appendChild(headerText);
    header.appendChild(cancelButton);
    header.appendChild(headerDesc);
    popup.appendChild(header);

    // Add search bar to the popup
    const searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.placeholder = 'Search Your area...';
    popup.appendChild(searchBar);

    // Add five items to the popup
    const items = ['Select a Location', 'Belgium', 'France', 'Germeny', 'Italy'];
    const buttonLabels = ['Clear All', 'Min:$30', 'Min:$40', 'Min:$50', 'Min:$70'];

    for (let i = 0; i < items.length; i++) {
      const item = document.createElement('div');
      item.classList.add('item');

      const text = document.createElement('span');
      text.textContent = items[i];

      const button = document.createElement('button');
      button.classList.add('rounded-button');
      button.textContent = buttonLabels[i];

      item.appendChild(document.createElement('hr'));
      item.appendChild(text);
      item.appendChild(button);

      popup.appendChild(item);
    }
    popup.appendChild(document.createElement('hr'));

    // Add popup to the body
    const body = document.body;
    body.appendChild(popup);

    // Add overlay to the body
    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
    body.appendChild(overlay);

    // Add popup-open class to the body to show the popup and overlay
    body.classList.add('popup-open');

    // Remove popup and overlay when cancel icon is clicked
    cancelButton.addEventListener('click', () => {
      body.classList.remove('popup-open');
      popup.remove();
      overlay.remove();
    });
  }


  return (
    <div className="logo-design">
      <div>
        <Link to="/" >
          <img src={exocitcity} alt="Exocitcity" width="170vw" /></Link>
        <div className="osc">Online Shopping Center</div>
      </div>
      <div className=" d-none d-md-block">
        <div className="border border-white my-3 mx-2   d-none d-md-block">
          <button className="row mx-4 my-4 bg-white  border shadow rounded" onClick={handleClick}>
            <div className="col-sm-8 text-muted small">Your location</div>
            <div className="col-sm-9 font-weight-bold">Select location</div>
            <div className="col-sm-2 ">
              <MdOutlineArrowDropDown size={28} className="drop-icon current-location" />
            </div>
          </button>

        </div>
      </div>



      <div className="search-container d-none d-md-block">
      <div className="SecondNavbarSearch">
                <img src={search} alt="search" />
                <input type="search" name="search" id="search" placeholder='Search for Products' />
            </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="d-none d-md-block mr-3">
        <Link style={{textDecoration: 'none', color: 'black'}} to='/login'>
                <BsPerson id='accountRicircle' size={30} />
                </Link>
        </div>
        <div class="h4 mr-auto my-3 mx-4">€0.00</div>
        <div class="ml-3 ">
        <div className="cartBtn">
                    <p style={{
                        fontSize: '0.7rem',
                        position: 'absolute',
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        padding: '1px 1px 3px 1px',
                        height: '1.2rem',
                        width: '1.0rem',
                        textAlign: 'center',
                        top: '-0.4rem',
                        right: '-0.1rem',
                        color: 'white'
                    }} ><strong>0</strong></p>
                    <Link to='/checkout' ><GiShoppingBag size={30} id='cartIcon' color='black' /></Link>
                </div>
        </div>
      </div>




    </div>
  )
}

export default HeaderSection