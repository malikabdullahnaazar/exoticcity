import React, { useContext, useState } from 'react'
import Layout from '../../Layout'
import './InfoForm.css'
import axios from 'axios';
import { UserContext } from '../../../UserContext';

function InfoForm() {
    var userDetails = JSON.parse(localStorage.getItem("userDetails"));
    
  const username = "ADMIN";
  const password = "JMV+o7nU6J5h55Jz6mH/PuHUfXC2AXAqu0zVlOczH+g=";

    const [firstName, setfirstName] = useState(userDetails.FirstName)
    const [secondName, setsecondName] = useState(userDetails.LastName)
    const [country, setcountry] = useState(userDetails.CountryRegionCode)
    const [address, setAddress] = useState(userDetails.Address1 + " " + userDetails.Address2)
    const [city, setCity] = useState(userDetails.City)
    const [state, setState] = useState(userDetails.State)
    const [postalCode, setPostalCode] = useState(userDetails.PostalCode)
    const [phone, setPhone] = useState(userDetails.Phone)
    const [email, setEmail] = useState(userDetails.Email)
    const [orderId, setOrderId] = useState();

    const handleSubmitUserDetails = (e)=>{
        e.preventDefault();
        axios.post('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox16/api/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/salesOrders',{
            "externalDocumentNumber": "",
            "orderDate": "2023-04-18",
            "postingDate": "2023-04-18",
            "customerId": "282e6146-7c40-ed11-946f-000d3a2fe94c",
            "customerNumber": "000005",
            "billToCustomerId": "282e6146-7c40-ed11-946f-000d3a2fe94c",
            "billToCustomerNumber": "000005",
            "shipToName": "Old Rana",
            "shipToContact": "",
            "sellToAddressLine1": "RUE CATHEDRALE 7 ",
            "sellToAddressLine2": "",
            "sellToCity": "LIEGE",
            "sellToCountry": "BE",
            "sellToState": "",
            "sellToPostCode": "4000",
            "shipToAddressLine1": "RUE DE LA CATHÉDRALE 7 LIEGE 4000",
            "shipToAddressLine2": "",
            "shipToCity": "LIEGE",
            "shipToCountry": "BE",
            "shipToState": "",
            "shipToPostCode": "4000",
            "shortcutDimension1Code": "DELIVERY",
            "shortcutDimension2Code": "4000",
            "currencyId": "00000000-0000-0000-0000-000000000000",
            "currencyCode": "EUR",
            "pricesIncludeTax": false,
            "paymentTermsId": "3544fdd7-081c-ec11-bb77-000d3abcd65f",
            "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
            "salesperson": "JATINDER CHOT",
            "partialShipping": true,
            "requestedDeliveryDate": "0001-01-01",
            "discountAmount": 0,
            "phoneNumber": "04 221 36 35",
            "email": "abc@email.com"
          },
       {
      
          auth:{
            username,
            password
          },
          
        }).then((res)=> {
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })


    //     axios.post(`https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox16/api/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/salesOrders(${orderId})/salesOrderLines`,{

    //     "itemId":"809fe551-8dcc-ed11-a7c7-000d3a226350",
        
    //      "lineType":"Item",
        
    //         "description": "SENSATIONNEL PREMIUM PLUS HH TARA WEAVING 27PCS COL 27",
        
    //         "unitOfMeasureId": "7b03a532-ed2b-ec11-8f45-000d3a39de8c",
        
    //         "unitOfMeasureCode": "PCS",
        
    //         "quantity": 1,
        
    //         "unitPrice": 1397.3,
        
    //         "discountAmount": 0,
        
    //         "discountPercent": 0,
        
    //         "shipmentDate": "2020-04-02",
        
    //         "itemVariantId": "00000000-0000-0000-0000-000000000000",
        
    //         "locationId": "00000000-0000-0000-0000-000000000000"
        
    //     },
    //    {
      
    //       auth:{
    //         username,
    //         password
    //       },
          
    //     }).then((res)=> {
    //         console.log(res);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    }


    const CartItem = useContext(UserContext);
  return (
    <Layout>
        <div className="infoForm">
                <form method='post' onSubmit={handleSubmitUserDetails} >
            <div className="customerDetails">
                <h1>BILLING DETAILS</h1>
                    <div className="name">
                        <div id='firstName' >
                        <label htmlFor="firstName">First Name *</label>
                        <input type="text" id='firstName' name='firstName' value={firstName} onChange={
                            (e)=>{
                                setfirstName(e.target.value);
                            }
                        } />
                        </div>
                        <div id='secondName' >
                        <label htmlFor="secondName">Second Name *</label>
                        <input type="text" id='secondName' name='secondName' value={secondName} onChange={
                            (e)=>{
                                setsecondName(e.target.value);
                            }
                        } />
                        </div>
                    </div>

                        <label htmlFor="companyName">Company name (optional)</label>
                        <input type="text" id='companyName' name='companyName' />

                        <label htmlFor="region">Country / Region *</label>
                        <input type="text" id='region' name='region' value={country} onChange={
                            (e)=>{
                                setcountry(e.target.value);
                            }
                        } />
                        
                        <label htmlFor="address">Street address *</label>
                        <input type="text" id='address' name='address' value={address} onChange={
                            (e)=>{
                                setAddress(e.target.value);
                            }
                        } />

                        <label htmlFor="city">Town / City *</label>
                        <input type="text" id='city' name='city' value={city} onChange={
                            (e)=>{
                                setCity(e.target.value);
                            }
                        } />

                        <label htmlFor="state">State / County *</label>
                        <input type="text" id='state' name='state' value={state} onChange={
                            (e)=>{
                                setState(e.target.value);
                            }
                        } />

                        <label htmlFor="zip">Postcode / ZIP *</label>
                        <input type="text" id='zip' name='zip' value={postalCode} onChange={
                            (e)=>{
                                setPostalCode(e.target.value);
                            }
                        } />

                    <div className="contact">
                        <label htmlFor="phone">Phone *</label>
                        <input type="text" id='phone' name='phone' value={phone} onChange={
                            (e)=>{
                                setPhone(e.target.value);
                            }
                        } />
                        <label htmlFor="email">Email address *</label>
                        <input type="text" id='email' name='email' value={email} onChange={
                            (e)=>{
                                setEmail(e.target.value);
                            }
                        } />
                    </div>

                    <div className="additionalInfo">
                        <h2>ADDITIONAL INFORMATION</h2>
                        <label htmlFor="phone">Order notes (optional)</label>
                        <textarea type="text" id='phone' name='phone' placeholder='Notes about your order, e.g. special notes for delivery.' />
                    </div>
            </div>
            <div className="orderDetails">
                <h2>YOUR ORDER</h2>
                <div className="productDetails">
                    <div>
                        <p>Product</p>
                        <p>SubTotal</p>
                    </div>
                    {CartItem.CartItem.map((i)=>{
                        return <div>
                        <p>{i.Description.slice(0, 100)}  × {i.quantity}</p>
                        <p>${i.price}</p>
                    </div>
                    })}
                    <div>
                        <p>SubTotal</p>
                        <p>$12.00</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>$12.00</p>
                    </div>
                </div>
                <p >Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="">privacy policy</a>.</p>
                <p id='privacyPolicy'> <input type="checkbox" name="check" id="check" />
                <p>I have read and agree to the website terms and conditions</p>
                </p><button type="submit">Place Order</button>
            </div>
                </form>
        </div>
    </Layout>
  )
}

export default InfoForm