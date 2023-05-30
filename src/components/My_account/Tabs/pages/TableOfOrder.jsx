import React,{useContext} from 'react'
import Table from 'react-bootstrap/Table';
import {Link } from "react-router-dom"
import { UserContext } from '../../../../UserContext';
import axios from 'axios';
import "../../Css/table.css"
const TableOfOrder = () => {
  const {OderDetails} =useContext(UserContext)
  const loadOrderHistory=()=>{
    axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/salesOrders?$expand=salesOrderLines')
    .then(response => {
      // Handle the response data
      console.log(response.data);
    })
    .catch(error => {
      // Handle the error
      console.error(error);
    });

  }
  console.log(loadOrderHistory);
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
    {OderDetails?<tr>
      <td ><Link>{OderDetails.number}</Link> </td>
      <td>	{OderDetails.orderDate}</td>
      <td>	{OderDetails.status}</td>
      {
        OderDetails.salesOrderLines.map((i)=>{
          return <><td>	€{i.totalAmountIncludingTax
          } for {i.qunatity} items</td>
          <td>	
            <button className='custom-button'>View</button>
            <button className='custom-button'>Re-Order</button>
            <button className='custom-button'>Place same Order</button>
            </td></>
        })

      }
      
    </tr>:<></>}
   
  </tbody>
</Table>
</div>
  )
}

export default TableOfOrder