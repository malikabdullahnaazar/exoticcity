import React from 'react';
import './WishListPopOver.css';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

function WishListPopOver() {
  return (
    <div className="wishListPopOver">
        <p>DARK&LOVELY BRAID SPRAY 250ML added to Wishlist</p>
        <button>View WishList <FavoriteBorderSharpIcon/></button>
        <button><ClearSharpIcon/> Close</button>
    </div>
  )
}

export default WishListPopOver