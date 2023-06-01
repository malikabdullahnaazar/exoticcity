import React from 'react'
import { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom"
import "../../Css/table.css"
import { UserContext } from '../../../../UserContext';
import axios from 'axios';
const TableOfOrder = () => {
  const { accessToken, userDetails } = useContext(UserContext)
  const [custNo, setcustNo] = useState()
  const [dataAPI, setdataAPI] = useState(null)
  useEffect(() => {

    return () => {
      axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/salesOrders?$expand=salesOrderLines',
        {

          headers: {



            "Authorization": `Bearer ${accessToken}`

          }

        }).then(async (res) => {
          let a = await JSON.parse(JSON.parse(userDetails));
          setdataAPI(res.data.value);
          setcustNo(a.No);
        })
    }
  }, [custNo, dataAPI, accessToken, userDetails])
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
          {
            dataAPI ? dataAPI.filter((item) => {
              return custNo ? item.customerNumber.includes(custNo) : ''
            }).map((item) => {
              return <tr>
                <td ><Link>#{item.number}</Link> </td>
                <td>    {item.orderDate}</td>
                <td>    {item.status}</td>
                <td>    €{item.totalAmountIncludingTax}</td>
              </tr>
            }) : <></>
          }





        </tbody>
      </Table>
    </div>
  )
}

export default TableOfOrder