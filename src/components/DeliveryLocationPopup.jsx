import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";

function DeliveryLocationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [location, setlocation] = useState("Your location");

  function handleClick() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  const items = ['Select a Location', 'Belgium', 'France', 'Germany', 'Italy'];
  const buttonLabels = ['Clear All', 'Min:$30', 'Min:$40', 'Min:$50', 'Min:$70'];

  const filteredItems = items.filter(item => item.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <>
      <button className="row mx-4 my-4 bg-white  border shadow rounded" onClick={handleClick} >
        <div className="col-sm-8 text-muted small">{location}</div>
        <div className="col-sm-9 font-weight-bold">Select location</div>
        <div className="col-sm-2 ">
          <MdOutlineArrowDropDown size={28} className="drop-icon current-location" />
        </div>
      </button>
      {isOpen && (
        <div className="popup">
          <div className="header">
            <div className="header-text header-color">Choose your Delivery Location</div>
            <button className="cancel-button" onClick={handleClose}>X</button>
            <div className="header-desc">Enter your address and we will specify the offer for your area.</div>
          </div>
          <input type="text" placeholder="Search Your area..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
          {filteredItems.map((item, index) => (
            <div className="item" key={index} onClick={() => {
              setlocation(item);
              handleClose();
            }}>
              <hr />
              <span>{item}</span>
              <button className="rounded-button">{buttonLabels[index]}</button>
            </div>
          ))}
          <hr />
        </div>
      )}
      {isOpen && <div className="popup-overlay" onClick={handleClose}></div>}
    </>
  );
}

export default DeliveryLocationPopup;