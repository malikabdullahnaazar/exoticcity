import React from 'react'
import Layout from "./Layout"


const WishList = () => {
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
    <tr>
      <td><input type="checkbox" name="" id="selectid" /></td>
      <td className='text-start'>X</td>
      <td className='text-start'> <img src="" alt="" /> </td>
      <td className='text-start'>Product</td>
      <td className='text-start'>1200</td>
      <td className='text-start'>March 22,2023</td>
      <td className='text-start'>In Stock</td>
      <td className='text-start'><button className='btn btn-sm btn-rounded btn-purple ' style={{width:"8vw",height:"5vh" }}>Read more</button></td>
    </tr>
    
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