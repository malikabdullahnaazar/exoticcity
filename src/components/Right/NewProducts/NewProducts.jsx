import React, { useContext } from 'react'
// import { useContext, useEffect, useState } from 'react'
// import CardComponent from '../CardComponent/CardComponent';
import ViewAll from '../ViewAllComponent/ViewAll';
import './NewProducts.css';
// import pic1 from '../../../Static/Images/pic1.png';
import { Link } from "react-router-dom"
import NewCardComponent from '../../NewCardComponent/NewCardComponent';
import { UserContext } from '../../../UserContext';
function NewProducts() {
  const { filterprice } = useContext(UserContext);
  // const [newproducts, setnewproducts] = useState();

  // useEffect(() => {
  //   const filteredProducts = filterprice.filter(product => {
  //     const createdDate = new Date(product.startingdate);
  //     const currentDate = new Date();
  //     const timeDiff = Math.abs(currentDate.getTime() - createdDate.getTime());
  //     const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  //     return diffDays <= 30;
  //   }).sort((a, b) => new Date(b.createddate) - new Date(a.createddate)).slice(0, 8);
  //   console.log(filteredProducts);
  // }, [filterprice]);


  return (
    <div className="newProducts">
      <div className="newProductsHeading">
        <div className="newProductsText">
          <h2>New Products</h2>
          <p>New Products with Updated Stocks.</p>
        </div>
        <ViewAll />
      </div>
      <div className="newProductGrid">
        {filterprice ? filterprice.slice(0, 8).map(product => (
          <div className="col-sm-4" key={product.itemNo}>
           
              <div className="card">
                <NewCardComponent  Brand={product.SystemId} No={product.No} itemNo={product.itemNo}
                            price={product.unitprice} Description={product.Description}
                            weight={product.weight} quantity={product.ItemQuantityinBaseUOM} picture={product.itemSystemid} />
              </div>
          </div>
        )) : ''}
      </div>
    </div>
  )
}

export default NewProducts