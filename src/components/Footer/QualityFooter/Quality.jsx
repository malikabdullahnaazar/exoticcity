import React from 'react';
import './Quality.css';
import {FaAirFreshener} from 'react-icons/fa';
import {TbTruckDelivery} from 'react-icons/tb';
import {CiDiscount1} from 'react-icons/ci';
import {HiOutlineCurrencyDollar} from 'react-icons/hi';

function Quality() {
  return (
    <div className="quality row text-center">
  <div className="col-md-3">
    <p><FaAirFreshener size={25} /> Everyday fresh products</p>
  </div>
  <div className="col-md-3">
    <p><TbTruckDelivery size={25} /> Free delivery for order over $70</p>
  </div>
  <div className="col-md-2">
    <p><CiDiscount1 size={25} /> Daily Mega Discounts</p>
  </div>
  <div className="col-md-3">
    <p><HiOutlineCurrencyDollar size={25} /> Best price on the market</p>
  </div>
</div>

  )
}

export default Quality