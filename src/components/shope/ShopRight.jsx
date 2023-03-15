import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/shopright.css';
import "../css/HeaderSection.css";
import { BsGridFill } from 'react-icons/bs';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { VscThreeBars } from 'react-icons/vsc';
import { Link } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';

const ShopRight = () => {

  const options = [
    { value: 'vegetable', label: 'Sort by latest' },
    { value: 'brands', label: 'Sort by popularity' },
    { value: 'fruit', label: 'Sort by Average rating' },
    { value: 'meat', label: 'Sort by low to heigh' },
    { value: 'dairy', label: 'Sort by heigh to low' },
  ];
  
  return (
    <div className='main'>
      <div className="container">
        <div className="background-image">
          <div className="d-flex align-items-center justify-content-center ">
            <div className="align-items-center justify-content-center my-5">

              <p className="text-center text-md-left">Delivered to Your Home</p>
              <h2 className="text-center text-md-left">Organic Meals Prepared</h2>
              <p className="text-center text-md-left">Fully prepared & delivered nationwide</p>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="search-container d-none d-md-block">
        <input type="text" placeholder="Search..." />
        <FiSearch className="search-icon" />
      </div>
      </div>
      <div className="d-flex flex-wrap align-items-start   backgroung-custom m-3 py-3">
        <div className="left d-flex justify-content-center justify-content-md-start">
          <Link className='mx-2 text-black'><VscThreeBars size={20} color="" /></Link>
          <Link className='mx-2 text-black'><BsGridFill className='cursor-pointer' /></Link>
          <Link className='mx-2 text-black'><BsGrid3X3GapFill /></Link>
          <Link className='mx-2 text-black'><TfiLayoutGrid4Alt /></Link>
        </div>
          <div className='margin d-flex align-items-center justify-content-center justify-content-md-end'>
            <div>
            <select className=' px-4 px-md-5 py-2 border-0  border-transparent bg-light '>
              {options.map((options) => (<option key={options.value} value={options.value}>{options.label}</option>))}
            </select>
            </div>
            <div className='py-1 d-none d-md-block'>|</div>
            <div className='show py-1 d-none d-md-block'>Show</div>
            <div className='mx-1 py-1 '>6</div>
            <div className='mx-1 py-1'>12</div>
            <div className='mx-1 py-1'>18</div>
            <div className='mx-1 py-1'>24</div>
          </div>
        
      </div>

    </div>
  )
}

export default ShopRight;
