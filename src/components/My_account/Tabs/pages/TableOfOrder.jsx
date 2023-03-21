import React from 'react'
import Table from 'react-bootstrap/Table';
import {Link } from "react-router-dom"
import "../../Css/table.css"
const TableOfOrder = () => {
  return (
    <div>
    <Table responsive>
  <thead>
    <tr>
    <th>Order</th>
    <th >Date</th>
    <th >Status</th>
    <th >Total</th>
    <th >Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><Link>#95418</Link> </td>
      <td>	February 28, 2023</td>
      <td>	Processing</td>
      <td>	€24.00 for 6 items</td>
      <td>	
        <button className='custom-button'>View</button>
        <button className='custom-button'>Re-Order</button>
        <button className='custom-button'>Place same Order</button>
        </td>
    </tr>
   
  </tbody>
</Table>
</div>
  )
}

export default TableOfOrder