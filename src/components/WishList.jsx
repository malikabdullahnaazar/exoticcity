import React from 'react'
import Layout from "./Layout"
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from "react-router-dom";

const WishList = () => {
  const { wishlist,login} = useContext(UserContext);
  return (
    <Layout>
        <div className='container border'>
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col"><input type="checkbox" name="" id="selectAll" /></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col">Product Name</th>
      <th scope="col">Unit Price</th>
      <th scope="col">Date Added</th>
      <th scope="col">Stock Status</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {wishlist?wishlist.map((item, index) => (
  <tr key={index}>
    <td><input type="checkbox" name="" id="selectid" /></td>
    <td className='text-start'>{item.name}</td>
    <td className='text-start'><img src={item.picture} alt="" height={150}/></td>
    <td className='text-start'>{item.product?(item.product.Description):item.Description}</td>
    <td className='text-start'>{login?(item.product?(item.product.unitprice.toFixed(3)):item.price):0}</td>
    <td className='text-start'>{item.date.toString()}</td>
    <td className='text-start'>{item.product?(item.product.minimumquantity>0?("IN Stock"):'Out Of Stock '):item.minimumquantity>0 ?("IN Stock"):'Out Of Stock '}</td>
    <td className='text-start'> <Link to={`/product/${item.product?(item.product.itemNo):item.itemNo}`} className="text-decoration-none text-black"><button className='btn btn-sm btn-rounded btn-purple' style={{width:"8vw",height:"5vh" }}>Read more</button></Link></td>
  </tr>
)):""}
    
  </tbody>
</table>
<div className="container-fluid d-flex mx-5  flex-row">
<button className='btn-purple hover   ' >Add Selected to Cart</button>
<button className='btn-purple mx-1' >Add All to Cart</button>
</div>
        </div>
    </Layout>
  )
}

export default WishList