import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
// import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './NewCardComponent.css';
import { SlSizeFullscreen } from 'react-icons/sl';
import { TfiHeart } from 'react-icons/tfi';
import img from '../../Static/pic4.png';
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';
import { UserContext } from '../../UserContext';
import toast, { Toaster } from 'react-hot-toast';
// import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom'
function NewCardComponent(props) {

  const { setCartItem, CartItem,item,login, wishlist, setwishlist, accessToken } = useContext(UserContext);

  const [showIcons, setshowIcons] = useState(false)
  const [picture, setPicture] = useState();
  const [quantityCount, setQuantityCount] = useState(-1);
  const [cartButton, setCartButton] = useState(true);

  const handleAddToCart = () => {
    const cartItemIndex = CartItem.findIndex(item => item.itemNo === props.itemNo);
    if (cartItemIndex !== -1) {

      const updatedCart = [...CartItem];
      updatedCart[cartItemIndex].quantity += 1;
      setCartItem(updatedCart);
    } else  {
      const cartItem = {
        ...props,
        quantity: 1,
        picture
      };
      toast.success(props.Description + ' is Added to the Cart.',);
      setCartItem([...CartItem, cartItem]);
    }
    setQuantityCount(quantityCount + 1);


  };
  const handleAddWishlist = () => {
    const wishlistIndex = wishlist.findIndex(item => item.itemNo === props.itemNo);
    if (wishlistIndex !== -1) {
      toast.success(props.Description + ' already in  WishList.',);
      return;
    } else {
      const date = new Date();
      const wishList = {
        ...props,
        picture,
        date
      };
      toast.success(props.Description + ' is Added to the WishList.',);
      setwishlist([...wishlist, wishList]);
    }
  };

  const handleRemoveFromCart = () => {
    if (quantityCount > 0) {
      const cartItemIndex = CartItem.findIndex(item => item.itemNo === props.itemNo);
      if (cartItemIndex !== -1) {
        const updatedCart = [...CartItem];
        if (quantityCount === 1) {
          updatedCart.splice(cartItemIndex, 1);
          toast.success(CartItem[cartItemIndex].Description.slice(0, 10) + ' Removed from the Cart.', {
            duration: 6000,
          });
          setCartItem(updatedCart);
        }
        else {
          updatedCart[cartItemIndex].quantity = quantityCount - 1;
          setCartItem(updatedCart);
        }

      }
      setQuantityCount(quantityCount - 1);
    }
  };
  //picture api
  useEffect(() => {
    let timer;

    if (props.picture) {
      timer = setTimeout(() => {
        axios.get(`https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/items(${props.picture})/picture`, {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        })
          .then((res) => {
            axios.get(res.data["pictureContent@odata.mediaReadLink"], {
              headers: {
                "Authorization": `Bearer ${accessToken}`
              }
            })
              .then((res) => {
                setPicture(res.data);
                // console.log(res.data);
                // console.log(picture);
              })
              .catch((error) => {
                // Handle error
              });
          })
          .catch((error) => {
            // Handle error
          });
      }, 5000); // 5 seconds delay
    }

    return () => {
      clearTimeout(timer);
    };
  }, [props.picture]);

  //check picture in console
  // useEffect(() => {


  //   return () => {
  //     console.log(props.picture);
  //   }
  // }, [props.picture])

  useEffect(() => {
    return () => {
      if (quantityCount === -1) {
        setCartButton(true)
        setQuantityCount(0)
      }
    }
  }, [quantityCount])


  return (
    <>
      <Toaster position="top-center" />
      <Card className="max-height" sx={{ maxWidth: 345, position: 'relative' }} onMouseOver={() => setshowIcons(true)} onMouseLeave={() => setshowIcons(false)} id='newCardComponent'>

        {
          showIcons ? <AnimatePresence>
            <motion.div className="cardIcons" initial={{ opacity: 50 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <SlSizeFullscreen size={25} />
              <TfiHeart size={25} className='btnn' onClick={handleAddWishlist} />
            </motion.div>
          </AnimatePresence> : <div></div>
        }
        <Link to={`/product/${props.itemNo}`} className="text-decoration-none text-black">
          <CardMedia
            sx={{ height: 270 }}
            image={picture ? (picture) : (img)}
            onError={(e) => { e.target.src = img }}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.Description}
            </Typography>
            <Typography variant="body2" color="#00b853">
              <span style={{ fontSize: 'smaller' }} > {props.quantity > 0 ? 'IN STOCK' : 'OUT OF STOCK'}</span>
            </Typography>
            <Typography variant="h6" color="#d51243">
              <strong> € {props.price && login ? (props.price).toFixed(3) : ("0.00")}</strong>
            </Typography>
          </CardContent>
        </Link>
        {showIcons ?
          <CardActions>
            {
              cartButton ?
                <button id='newCardComponentbtn' style={{
                  border: '1px solid #233a95',
                  borderRadius: '2rem',
                  backgroundColor: '#233a95',
                  padding: '0.5rem',
                  position: 'relative',
                  width: '8rem',
                  left: '1.5rem',
                  color: 'white',
                  zIndex: 1,
                }} onClick={() => { setCartButton(false); }} >Add To Cart</button> : <button id='cartQuantity' >
                  <button id='cartQuantityminus' onClick={handleRemoveFromCart} >-</button>
                  <span id='cartQuantitynumber' >{quantityCount}</span>
                  <button id='cartQuantityplus' onClick={handleAddToCart}>+</button>

                </button>
            }
          </CardActions> : <></>}
      </Card>
    </>
  );
}

export default NewCardComponent