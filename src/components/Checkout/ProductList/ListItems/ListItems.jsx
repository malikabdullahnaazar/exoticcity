import React, { useContext } from 'react'
import { UserContext } from '../../../../UserContext';
import './ListItems.css'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import pic4 from "../../../../Static/pic4.png";
function ListItems(props) {
  const {CartItem,setCartItem} = useContext(UserContext);
  const handleAddToCart = () => {
    const cartItemIndex = CartItem.findIndex(item => item.itemNo === props.itemno);
    if (cartItemIndex !== -1) {
      const updatedCart = [...CartItem];
      updatedCart[cartItemIndex].quantity += 1;
      setCartItem(updatedCart);
      
    } 

    
  };
  const handleRemoveFromCart = () => {
    const cartItemIndex = CartItem.findIndex(item => item.itemNo === props.itemno);
    if (cartItemIndex !== -1) {
      const updatedCart = [...CartItem];
      if (props.quantity === 1) {
        updatedCart.splice(cartItemIndex, 1);
      
      } else if (props.quantity > 1) {
        updatedCart[cartItemIndex].quantity = props.quantity - 1;
        
      }
      setCartItem(updatedCart);
    }
  };
  const handleremoveitem = () => {
    if (props.quantity > 0) {
      const cartItemIndex = CartItem.findIndex(item => item.itemNo === props.itemno);
      if (cartItemIndex !== -1) {
        const updatedCart = [...CartItem];
        
          updatedCart.splice(cartItemIndex, 1);
          setCartItem(updatedCart);
          
         
    }}
  };
  
  
  return (
    <div className="listItem">
        <img src={props.pic?props.pic:pic4} alt="product" onError={(e) => { e.target.src = pic4 }}  />
        <p id='name'>{props?.name?.slice(0, 10) || 'Default Name'}</p>
        <p id='price' >{props?.price?.toFixed(3)}</p>
        <p id='quantity' >
            <button id="minus" onClick={handleRemoveFromCart}>-</button>
            <span>{props.quantity}</span>
            <button id="plus" onClick={handleAddToCart}>+</button>
        </p>
        <p id='subtotal' >${props?.subtotal?.toFixed(3)}</p>
        <p id='cross'><AiOutlineCloseCircle onClick={handleremoveitem} size={35}/></p>
    </div>
  )
}

export default ListItems