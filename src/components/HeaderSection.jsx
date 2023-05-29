import React, { useContext, useState } from 'react'
import exocitcity from "../Static/exsoticcity.png";
import "./css/HeaderSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsPerson } from 'react-icons/bs';
import search from '../Static/Images/search.png';
import CartHover from './CartHover/CartHover';
import { UserContext } from '../UserContext';
import Drawer from "../components/sidebar/Drawer";
import DeliveryLocationPopup from './DeliveryLocationPopup';
const HeaderSection = () => {
  
  const CartItem = useContext(UserContext);
  const {login} = useContext(UserContext);
 
  function calculateSubtotal(cartItems) {
      let subtotal = 0;
      cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
      });
      return subtotal;
    }
    const subtotal = calculateSubtotal(CartItem.CartItem);
  const [inputValue, setInputValue] = useState()
  const { setSearch, sethoverShow, hoverShow } = useContext(UserContext);

  function handleSearch() {

    setSearch(inputValue);

  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function calculatelength(cartItems) {
   
  
    return   cartItems.length;
  }
  const Items = calculatelength(CartItem.CartItem);

  return (
    <div className="logo-design">
      <div>
        <div className="d-flex align-items-center">
          <div className="d-block d-md-none">
            {/* <VscThreeBars size={50} className='mx-5'/> */}
            <Drawer/>
          </div> 
          <div>
            <Link to="/" className="ml-3">
              <img src={exocitcity} alt="Exocitcity" width="170vw" />
            </Link>
            <div className="osc ml-3">Online Shopping Center</div>
          </div>

        </div>

      </div>
      <div className=" d-none d-md-block">
        <div className="border border-white my-3 mx-2   d-none d-md-block">
        <DeliveryLocationPopup/>
         

        </div>
      </div>



      <div className="search-container d-none d-md-block">
        <div className="SecondNavbarSearch">
          <Link to="/shop"><img src={search} alt="search" onClick={handleSearch} /></Link>
          <input type="search" name="search" id="search" placeholder='Search for Products' value={inputValue} onChange={handleInputChange} />
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="d-none d-md-block mr-3">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/login'>
            <BsPerson id='accountRicircle' size={30} />
          </Link>
        </div>
        <div class="h4 mr-auto my-3 mx-4">€{login&&subtotal?subtotal.toFixed(2):0.00}</div>
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
            }} ><strong>{Items?Items:0}</strong></p>
            <Link className="text-decoration-none text-black" to='/checkout'onMouseOver={() => sethoverShow(true)}  onMouseLeave={() => sethoverShow(false)} ><GiShoppingBag size={30} id='cartIcon' color='black' /></Link>
            {
              hoverShow ? <Link  className="text-decoration-none text-black"  onMouseLeave={() => sethoverShow(false)} onMouseOver={() => sethoverShow(true)}> <CartHover   /></Link> : <></>
            }
          </div>
        </div>
      </div>




    </div>
  )
}

export default HeaderSection