import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./css/shopleft.css"
const ShopLeft = () => {
  // Our States
  const [value, setValue] =  React.useState([0,100]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { value: 'brands', label: 'Brands' },
    { value: 'fruit', label: 'Fruit' },
    { value: 'vegetable', label: 'Vegetable' },
    { value: 'meat', label: 'Meat' },
    { value: 'dairy', label: 'Dairy' },
    { value: 'grains', label: 'Grains' },
    { value: 'snacks', label: 'Snacks' },
    { value: 'beverages', label: 'Beverages' },
    { value: 'condiments', label: 'Condiments' },
    { value: 'frozen', label: 'Frozen Foods' },
  ];
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleDropdownClick = event => {
    setIsOpen(!isOpen);
  };
 
 

 
 
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
      <div>
    <div className="brands">
      <h6 className="px-5 py-2 mx-2 "><strong>BRANDS</strong></h6>
     <select className='mx-5 px-5 py-2  border border-dark bg-light'>
      {options.map((options)=>(<option key={options.value} value={options.value}>{options.label}</option>))}
     </select>

   </div>
   <div>
   <h6 className="px-5 py-2 mx-2 "><strong>PRODUCT CATEGORIES</strong></h6>
   <div className="scrollable-list">
  {options.map((option) => (
    <div key={option.id} className="form-check mx-5 px-5 py-2 ">
      <input
        className="form-check-input "
        type="checkbox"
        id={option.id}
        name={option.label}
        value={option.label}
        defaultChecked={false}
      />
      <label className="form-check-label" htmlFor={option.id}>
        {option.label}
      </label>
    </div>
  ))}
</div>
   </div>
   <div className="relative my-5">
      <div
        onClick={handleDropdownClick}
        className="mx-5 px-5 py-2 border border-dark bg-light cursor-pointer"
      >
        {searchTerm ? searchTerm : 'Select an option'}
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1   bg-white mx-5 rounded-md shadow-lg">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            className="px-5 py-2 border-b border-black-300 position-relative top-0 start-0 w-100"
          />
          <div className="max-h-52 overflow-y-auto">
            {filteredOptions.map(option => (
              <div
                key={option.value}
                className="px-5 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSearchTerm(option.label);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  )
}

export default ShopLeft