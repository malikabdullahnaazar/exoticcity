import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./css/shopleft.css"
import {useContext} from 'react';
import { UserContext } from '../../UserContext';
import { useParams } from "react-router-dom";
const ShopLeft = (props) => {
  const {subCategories,categories,brands} = useContext(UserContext);
  const {selectedCategory} =props;
  const [isOpen, setIsOpen] = useState(false);
  let params=useParams();
useEffect(() => {
  

  return () => {
    console.log(params);
  }
}, [params])

  const handleBrandChange = (event) => {
    props.setselectedBrands(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      props.setSelectedCategories([...props.selectedCategories, categoryName]);
      // alert(props.selectedCategories)
    } else {
      props.setSelectedCategories(
        props.selectedCategories.filter((category) => category !== categoryName)
        
      );
      // alert(props.selectedCategories)
    }
  };
  
  // Our States
  const renderbrands = () => {
    if (!brands) {
      return <option>Loading...</option>;
    }
    return brands.map((brands) => (
      <option key={brands} value={brands}>
        {brands}
      </option>
    ));
  };
  const filteredOptions =()=>{ 
    if (subCategories) {
      return subCategories.filter(Category =>
        Category.name.toLowerCase().includes(props.searchTerm.toLowerCase())
  );
  }
  return null

}
  
  

  const handleChange = event => {
    props.setSearchTerm(event.target.value);
    // console.log(event.target.value);
  };

  const handleDropdownClick = event => {
    setIsOpen(!isOpen);
  };
  // Changing State when volume increases/decreases
  const [value, setValue] = useState([0, 100]);

  const handleRangeChange = (event, newValue) => {
    setValue(newValue);
    props.setValue(newValue);
    
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
     <select className='mx-5 px-5 py-2  border  bg-light'onChange={handleBrandChange}value={props.selectedBrands}>
      {renderbrands()}
     </select>

   </div>
   <div>
   <h6 className="px-5 py-2 mx-2 "><strong>PRODUCT CATEGORIES</strong></h6>
   <div className="scrollable-list">
   {categories ? (
        categories.map((category) => (
          <div key={category} className='form-check mx-5 px-3 py-2'>
            <input
              className='form-check-input'
              type='checkbox'
              id={category}
              name={category}
              value={category}
              defaultChecked={params.category.toLowerCase().replace(/\s/g, '') === category.toLowerCase().replace(/\s/g, '')}
              onChange={handleCategoryChange}
            />
            <label className='form-check-label' htmlFor={category}>
              {category}
            </label>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}

</div>
   </div>
   
   <div className="relative my-5">
  <div
    onClick={handleDropdownClick}
    className="mx-5 px-5 py-2 border  bg-light cursor-pointer"
  >
    {props.searchTerm ? props.searchTerm : 'Select a Category'}
  </div>
  {isOpen && (
    <div className="absolute z-10 w-full mt-1   bg-white mx-5 rounded-md shadow-lg">
      <input
        type="text"
        placeholder="Search Categories"
        value={props.searchTerm}
        onChange={handleChange}
        className="px-5 py-2 border-b  position-relative top-0 start-0 w-100"
      />
      <div className="max-h-52 overflow-y-auto scrollable-list">
        {filteredOptions() ? (
          filteredOptions().map(option => (
            <div 
              key={option.name}
              onchhandlecatagoryChange
              className="px-2 py-2  cursor-pointer hover:bg-gray-100"
              onClick={() => {
                props.setSearchTerm(option.name);
                setIsOpen(false);
              }}
            >
              {option.name}    ({option.count})
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )}
</div>
    </div>
    </div>
  )
}

export default ShopLeft