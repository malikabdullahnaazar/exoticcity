import React, { useContext } from 'react'
import './HoverProduct.css'
import pic4 from "../../../Static/pic4.png";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { UserContext } from '../../../UserContext';
function HoverProduct(props) {
  const { CartItem, setCartItem,login } = useContext(UserContext);
  const handleremoveitem = () => {
    if (props.quantity > 0) {
      const cartItemIndex = CartItem.findIndex(item => item.itemNo === props.itemno);
      if (cartItemIndex !== -1) {
        const updatedCart = [...CartItem];

        updatedCart.splice(cartItemIndex, 1);
        setCartItem(updatedCart);

      }
    }
  };

  return (
    <div className="hoverProduct">
      <div className="img">
        <img src={props.picture ? props.picture : pic4} alt="product" onError={(e) => { e.target.src = pic4 }} width={80} height={50} />
      </div>
      <div className="fullProduct">
      <div id="desc">
        <p>{props.name}</p>
        <p>{props.quantity} × €{login?props.price:0}</p>
      </div>
        <p >
          {
            <AiOutlineCloseCircle onClick={handleremoveitem} size={30}  />
          }
        </p>
        </div>    
        </div>
  )
}

export default HoverProduct