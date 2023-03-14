import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
const ShopLeft = () => {
  // Our States
  const [value, setValue] =  React.useState([0,100]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  return (
   <div className="main ">
    <div className="slider">
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3>FILTER BY PRICE</h3>
        <Typography id="range-slider" gutterBottom>
        Select Price Range:
       </Typography>
        <Slider
         value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
        color="#E3E3E3"
       />
      Price <strong> &euro; {value[0]} ____  &euro; {value[1]}</strong> 
      </div>
    </div>
    </div>
  )
}

export default ShopLeft