// import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import Card from '../NewCardComponent/NewCardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/shopright.css';
import "../css/HeaderSection.css";
import { BsGridFill } from 'react-icons/bs';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { VscThreeBars } from 'react-icons/vsc';
import { AiTwotoneFilter } from 'react-icons/ai';
// import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import { UserContext } from '../../UserContext';
import { useParams } from "react-router-dom";
const ShopRight = (props) => {
  let params = useParams();
  const { filterprice,Search,setshowfilter,showfilter } = useContext(UserContext);
  const { categories } = useContext(UserContext)
  const { selectedBrands, searchTerm, selectedCategories } = props;

// console log search
// useEffect(() => {
  

//   return () => {
//     console.log(Search);
//   }
// }, [Search])


//for catageroy in shop right 
  const renderCategoryOptions = () => {
    if (!categories) {
      return <option>Loading...</option>;
    }
    return categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));
  };
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  //  (selectedBrands||selectedCategories||searchTerm?
  const filteredProducts = () => {

     if (selectedBrands || selectedCategories || searchTerm || props.value||Search ) {
      return filterprice?.filter(product =>
        (product.Description.toLowerCase()).includes(Search.toLowerCase()) &&
        product.Brand.includes(selectedBrands) &&
        (product.Category.includes(selectedCategories)) &&
        product.unitprice >= props.value[0] && product.unitprice <= props.value[1] &&
        (product.Category.includes(searchTerm) || product.SubCategory.includes(searchTerm))
      ) || [];
    }
    return [];
  }
  


//for sorting products
  const options = [
    { value: 'vegetable', label: 'Sort by latest' },
    { value: 'brands', label: 'Sort by popularity' },
    { value: 'fruit', label: 'Sort by Average rating' },
    { value: 'meat', label: 'Sort by low to heigh' },
    { value: 'dairy', label: 'Sort by heigh to low' },
  ];


  return (
    <div className='main'>
      <div className="container">
        <div className="background-image">
          <div className="d-flex  py-5 justify-content-center ">
            <div className="  justify-content-start ">
              <p className="text-center text-md-left">Delivered to Your Home</p>
              <h2 className="text-center text-md-left">Organic Meals Prepared</h2>
              <p className="text-center text-md-left">Fully prepared & delivered nationwide</p>
            </div>
          </div>
        </div>
      </div>
      {!params && (
        <div>
          <div className="search-container d-none d-md-block">
            <input type="text" placeholder="Search Products" />
            <FiSearch className="search-icon" />
          </div>
          <select id='selectedcat' className='mx-5 px-5 py-2  border  bg-light' onChange={handleCategoryChange} value={selectedCategory}>
            {renderCategoryOptions()}
          </select>
        </div>
      )}
    <div className="d-flex flex-wrap align-items-start backgroung-custom m-3 py-3">
  <div className="d-flex justify-content-center justify-content-md-start">
    <button id="one-column" className='btn-unstyled'>
      <div className=''>
      <VscThreeBars size={20} color="" />
      </div>
    </button>
    <button id="two-columns" className='btn-unstyled'>
      <BsGridFill className='cursor-pointer' />
    </button>
    <button id="three-columns" className='btn-unstyled'>
      <BsGrid3X3GapFill />
    </button>
    <button id="four-columns" className='btn-unstyled'>
      <TfiLayoutGrid4Alt />
    </button>
  </div>
  <div className='d-flex align-items-center justify-content-center justify-content-md-end margin'>
    <div className="d-block d-md-none">
    <AiTwotoneFilter size={20} onClick={()=>{setshowfilter(!showfilter)}}/>
</div>
    <div>
      <select className='px-4 px-md-5 border-0 border-transparent bg-light'>
        {options.map((options) => (<option key={options.value} value={options.value}>{options.label}</option>))}
      </select>
    </div>
    <div className='py-1 d-none d-md-block'>|</div>
    <div className='show py-1 d-none d-md-block'>Show</div>
    <div className='mx-1 py-1 '>6</div>
    <div className='mx-1 py-1'>12</div>
    <div className='mx-1 py-1'>18</div>
    <div className='mx-1 py-1'>24</div>
  </div>
  <div className="container-fluid border m-0 p-0">
    <div className="container-fluid border m-0 p-0">
      <div className="row ">
        {filteredProducts() ? (
          filteredProducts().slice(0, 12).map((product) => {
            if (!product.Description) {
              return null;
            }
            let words = product.Description.split(" ");
            let newDescription = words.slice(0, 8).join(" ");
            return (
              <div key={product.SystemId} className="col-sm-12 col-md-6 col-lg-3">
                <div className="card">
                  <Card Brand={product.SystemId} No={product.No} itemNo={product.itemNo}
                    price={product.unitprice} Description={newDescription} itemid={product.itemSystemid}
                    weight={product.weight} quantity={product.quantity} picture={product.itemSystemid} />
                </div>
              </div>
            );
          })
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default ShopRight;
