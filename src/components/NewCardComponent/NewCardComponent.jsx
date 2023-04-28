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
// import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom'
function NewCardComponent(props) {
  const { setCartItem ,CartItem,login} = useContext(UserContext);

  const [showIcons, setshowIcons] = useState(false)
  const [picture, setPicture] = useState();
  const [quantityCount, setquantityCount] = useState(1);
  const [cartButton, setCartButton] = useState(true);

  const username = "ADMIN";
  const password = "JMV+o7nU6J5h55Jz6mH/PuHUfXC2AXAqu0zVlOczH+g=";

  useEffect(() => {
    return () => {
      // axios.get(`https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox15/api/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/items(b49e42bd-fe19-ed11-90eb-000d3a48582d)/picture`, {
      axios.get(`https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/sandbox16/api/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/items(${props.picture})/picture`, {
        auth: {
          username,
          password
        }
      }).then((res) => {
        setPicture(res.data["pictureContent@odata.mediaEditLink"]);
        // console.log(picture);
      })

    }
  }, [props.picture])
  //check picture in console
  // useEffect(() => {


  //   return () => {
  //     console.log(props.picture);
  //   }
  // }, [props.picture])

  useEffect(() => {
    return () => {
      if (quantityCount === 0) {
        setCartButton(true)
        setquantityCount(1)
      }
    }
  }, [quantityCount])


  return (
    <>
      <Card className="max-height" sx={{ maxWidth: 345, position: 'relative' }} onMouseOver={() => setshowIcons(true)} onMouseLeave={() => setshowIcons(false)} id='newCardComponent'>
        
          {
            showIcons ? <AnimatePresence>
              <motion.div className="cardIcons" initial={{ opacity: 50 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <SlSizeFullscreen size={25} />
                <TfiHeart size={25} />
              </motion.div>
            </AnimatePresence> : <div></div>
          }
          <Link to={`/product/${props.itemNo}`} className="text-decoration-none text-black">
          <CardMedia
            sx={{ height: 270 }}
            image={picture ? (picture) : (img)}
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
              <strong> € {props.price&&login ? (props.price).toFixed(3) : ("0.00")}</strong>
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
                }} onClick={() => {
                  setCartButton(false)
                  console.log(cartButton);
                }} >Add To Cart</button> : <button id='cartQuantity' >
                  <button id='cartQuantityminus' onClick={() => {

                    setquantityCount(newCount => {

                      return newCount--;

                    });
                  }} >-</button>
                  <span id='cartQuantitynumber' >{quantityCount}</span>
                  <button id='cartQuantityplus' onClick={() => {
                    // console.log(quantityCount);
                    setquantityCount(newCount => {
                       
                        setCartItem(prevItems => 
                          prevItems.itemNo===props.itemNo? [...prevItems, prevItems.minimumquantity+1]: [...prevItems, props]
                          
                        );
                        console.log(CartItem);
                        return newCount++;
                      
                    });
                  }} >+</button>
                </button>
            }
          </CardActions> : <></>}
      </Card>
    </>
  );
}

export default NewCardComponent