import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./css/shopleft.css"
const ShopLeft = () => {
  // Our States
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
  const [value, setValue] = useState([0, 100]);

  const handleRangeChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
   <div className="main ">
   <div className="slider-container m-4">
      <Typography id="range-slider" gutterBottom>
      FILTER BY PRICE
      </Typography>
      <Slider
        value={value}
        onChange={handleRangeChange}
        valueLabelDisplay="auto"
        color="#d7ccc8"
        aria-labelledby="range-slider"
        min={0}
        max={100}
        className=""
      />
      <Typography variant="subtitle1" gutterBottom>
        Price range: <strong> &euro;{value[0]} - &euro;{value[1]}</strong>
        <span className='mx-4 px-2'> <strong> Filter</strong></span>
      </Typography>
     
    </div>
      <div>
    <div className="brands my-5">
      <h6 className="px-5 py-2 mx-2 "><strong>BRANDS</strong></h6>
     <select className='mx-5 px-5 py-2  border  bg-light'>
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
        className="mx-5 px-5 py-2 border  bg-light cursor-pointer"
      >
        {searchTerm ? searchTerm : 'Select a Category'}
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1   bg-white mx-5 rounded-md shadow-lg">
          <input
            type="text"
            placeholder="Search Categories"
            value={searchTerm}
            onChange={handleChange}
            className="px-5 py-2 border-b  position-relative top-0 start-0 w-100"
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