import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CardComponent.css';
import {SlSizeFullscreen} from 'react-icons/sl';
import {TfiHeart} from 'react-icons/tfi';
import { motion, AnimatePresence } from "framer-motion"


function CardComponent(props) {
  const [showIcons, setshowIcons] = useState(false)
    return (
        <Card sx={{ maxWidth: 345, position: 'relative' }} onMouseOver={()=> setshowIcons(true)} onMouseLeave={()=> setshowIcons(false)} >
          {
            showIcons?<AnimatePresence>
              <motion.div className="cardIcons" initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <SlSizeFullscreen/>
            <TfiHeart/>
            </motion.div>
            </AnimatePresence>:<div></div>
          }
          <CardMedia
            sx={{ height: 140 }}
            image={props.pic}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <button style={{
                border: '1px solid #ffcd00',
                borderRadius: '2rem',
                backgroundColor: '#ffcd00',
                padding: '0.5rem',
                position: 'relative',
                width: '8rem',
                left: '1.5rem'
            }} >Add To Cart</button>
          </CardActions>
        </Card>
      );
}

export default CardComponent