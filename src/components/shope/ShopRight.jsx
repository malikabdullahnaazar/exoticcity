import React,{useEffect} from 'react';
import Card from '../NewCardComponent/NewCardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/shopright.css';
import "../css/HeaderSection.css";
import { BsGridFill } from 'react-icons/bs';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { VscThreeBars } from 'react-icons/vsc';
import { FiSearch } from 'react-icons/fi';
import {Link} from "react-router-dom"
import { data } from "../../App";

const ShopRight = () => {

  const options = [
    { value: 'vegetable', label: 'Sort by latest' },
    { value: 'brands', label: 'Sort by popularity' },
    { value: 'fruit', label: 'Sort by Average rating' },
    { value: 'meat', label: 'Sort by low to heigh' },
    { value: 'dairy', label: 'Sort by heigh to low' },
  ];
  const coptions = [
    { value: 'brands', label: 'Select Catrgory' },
    { value: 'fruit', label: 'Fruit' },
    { value: 'vegetable', label: 'Vegetable' },
    { value: 'meat', label: 'Meat' },
    { value: 'dairy', label: 'Dairy' },
    { value: 'grains', label: 'Grains' },
    { value: 'snacks', label: 'Snacks' },
    { value: 'beverages', label: 'Beverages' },
    { value: 'condiments', label: 'Condiments' },
    { value: 'frozen', label: 'Frozen Foods' },
  ];
  useEffect(() => {
    
  
    return () => {
      console.log();
    }
  }, [])
  

  return (
    <div className='main'>
      <div className="container">
        <div className="background-image">
          <div className="d-flex  py-5 justify-content-center ">
            <div className="  justify-content-start ">
              <p className="text-center text-md-left">Delivered to Your Home</p>
              <h2 className="text-center text-md-left">Organic Meals Prepared</h2>
              <p className="text-center text-md-left">Fully prepared & delivered nationwide</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="search-container d-none d-md-block">
          <input type="text" placeholder="Search Products" />
          <FiSearch className="search-icon" />
        </div>
        <select className='mx-5 px-5 py-2  border  bg-light'>
          {coptions.map((coptions) => (<option key={coptions.value} value={coptions.value}>{coptions.label}</option>))}
        </select>
      </div>
      <div className="d-flex flex-wrap align-items-start   backgroung-custom m-3 py-3 ">
        <div className=" d-flex justify-content-center justify-content-md-start">
          <button id="one-column" className='btn-unstyled'>
              <VscThreeBars size={20} color="" />
          </button>
          <button id="two-columns" className='btn-unstyled'>
              <BsGridFill className='cursor-pointer' />
          </button>
          <button id="three-columns" className='btn-unstyled'>
              <BsGrid3X3GapFill />
          </button>
          <button id="four-columns" className='btn-unstyled'>
              <TfiLayoutGrid4Alt />
          </button>

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
        <div className="container-fluid border m-0 p-0">
          <div className="row ">
            <div className="col-sm-12  col-md-6 col-lg-4 mx-0">
              <div className="card  mx-0"><Link to="/product" className='Link'><Card/></Link></div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mx-0">
              <div className="card  mx-0"><Link to="/product" className='Link'><Card/></Link></div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mx-0">
              <div className="card  mx-0"><Link to="/product" className='Link'><Card/></Link></div>
            </div>
            </div>
          <div className="row ">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card"><Link to="/product" className='Link'><Card/></Link></div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card"><Link to="/product" className='Link'><Card/></Link></div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card"><Link to="/product" className='Link'><Card/></Link></div>
            </div>
            </div>
          <div className="row ">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card"><Link to="/product" className='Link'><Card/></Link></div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card"><Link to="/product" className='Link'><Card/></Link></div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card"><Link to="/product" className='Link'><Card/></Link></div>
            </div>
            </div>
          <div className="row ">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card"><Link to="/product" className='Link'><Card/></Link></div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card"><Link to="/product" className='Link'><Card/></Link></div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card"><Link to="/product" className='Link'><Card/></Link></div>
            </div>
            </div>
            </div>
   

      </div>

    </div>
  )
}

export default ShopRight;
