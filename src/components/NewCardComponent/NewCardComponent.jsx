import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './NewCardComponent.css';
import {SlSizeFullscreen} from 'react-icons/sl';
import {TfiHeart} from 'react-icons/tfi';
import img from '../../Static/Images/pic4.jpg';
import { motion, AnimatePresence } from "framer-motion";



function NewCardComponent(props) {
  const [showIcons, setshowIcons] = useState(false)
    return (
        <Card sx={{ maxWidth: 345, position: 'relative' }} onMouseOver={()=> setshowIcons(true)} onMouseLeave={()=> setshowIcons(false)} id='newCardComponent'>
          {
            showIcons?<AnimatePresence>
              <motion.div className="cardIcons" initial={{ opacity: 50 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <SlSizeFullscreen size={25} />
            <TfiHeart  size={25}/>
            </motion.div>
            </AnimatePresence>:<div></div>
          }
          <CardMedia
            sx={{ height: 270 }}
            image={img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Optimum Oil Therapy
            </Typography>
            <Typography variant="body2" color="#00b853">
              <span style={{ fontSize: 'smaller' }} > IN STOCK</span>
            </Typography>
            <Typography variant="h6" color="#d51243">
              <strong> € 0.00</strong>
            </Typography>
          </CardContent>
          <CardActions>
            {
                showIcons?<button id='newCardComponentbtn' style={{
                    border: '1px solid #233a95',
                    borderRadius: '2rem',
                    backgroundColor: '#233a95',
                    padding: '0.5rem',
                    position: 'relative',
                    width: '8rem',
                    left: '1.5rem',
                    color: 'white',
                    zIndex: 1
                }} >Add To Cart</button>:<></>
            }
          </CardActions>
        </Card>
      );
}

export default NewCardComponent