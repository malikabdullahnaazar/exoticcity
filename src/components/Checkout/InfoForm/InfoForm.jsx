import React, { useContext, useState } from 'react'
import Layout from '../../Layout'
import './InfoForm.css'
import axios from 'axios';
import { UserContext } from '../../../UserContext';
import { redirect } from 'react-router-dom';

function InfoForm() {
    var userDetails = localStorage.getItem("userDetails");
    if (userDetails !== null) {
      userDetails = JSON.parse(userDetails);
    } else {
      // handle the case where the user is not logged in
    }

    const { CartItem, accessToken } = useContext(UserContext);

    const [firstName, setfirstName] = useState(userDetails.FirstName)
    const [secondName, setsecondName] = useState(userDetails.LastName)
    const [country, setcountry] = useState(userDetails.CountryRegionCode)
    const [address, setAddress] = useState(userDetails.Address1 + " " + userDetails.Address2)
    const [city, setCity] = useState(userDetails.City)
    const [state, setState] = useState(userDetails.State)
    const [postalCode, setPostalCode] = useState(userDetails.PostalCode)
    const [phone, setPhone] = useState(userDetails.Phone)
    const [email, setEmail] = useState(userDetails.Email)
    const [subTotal, setsubTotal] = useState();
    var customerOrderNo;
    var orderId;

    const handleSubmitUserDetails = async (e) => {
        e.preventDefault();
        await axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/TMRC/TMRC_Group/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/SalesOrderRelative',
            {

                headers: {

                    "Authorization": `Bearer ${accessToken}`

                }

            }).then(async (res) => {
                customerOrderNo = parseInt(res.data.value[res.data.value.length - 4].OrderNo.slice(5)) + 1
            })

        await axios.post('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/TMRC/TMRC_Group/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/SalesOrderRelative', {
            "ORDERNO": "SO-00" + customerOrderNo,
            "CustomerName": firstName + secondName,
            "Country": country,
            "Address": address,
            "City": city,
            "PostCode": postalCode,
            "PhoneNo": phone,
            "Email": email,
            "Amount": 0
        },
            {

                headers: {

                    "Authorization": `Bearer ${accessToken}`

                }
            }).then((res) => {
                console.log(res.data);
                orderId = res.data.Id;
            }).catch((err) => {
                console.log(err);
            })

        await CartItem.CartItem.map((i) => {
            axios.post('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/salesOrders(b1ab2103-4bea-ed11-8848-6045bd887490)/salesOrderLines', {

                "itemId": i.itemid,

                "lineType": "Item",

                "description": i.Description,

                "unitOfMeasureId": "7b03a532-ed2b-ec11-8f45-000d3a39de8c",

                "unitOfMeasureCode": "PCS",

                "quantity": i.quantity,

                "unitPrice": i.price,

                "discountAmount": 0,

                "discountPercent": 0,

                "shipmentDate": "2020-04-02",

                "itemVariantId": "00000000-0000-0000-0000-000000000000",

                "locationId": "00000000-0000-0000-0000-000000000000"

            },
                {

                    headers: {

                        "Authorization": `Bearer ${accessToken}`

                    }

                }).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                })
        })
        return redirect("/shop");
    }
    function calculateSubtotal(cartItems) {
        let subtotal = 0;
        cartItems && cartItems.forEach(item => {
            subtotal += item.price * item.quantity;
        });
        return subtotal;
    }
    const subtotal = calculateSubtotal(CartItem.CartItem);

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
                                    (e) => {
                                        setfirstName(e.target.value);
                                    }
                                } />
                            </div>
                            <div id='secondName' >
                                <label htmlFor="secondName">Second Name *</label>
                                <input type="text" id='secondName' name='secondName' value={secondName} onChange={
                                    (e) => {
                                        setsecondName(e.target.value);
                                    }
                                } />
                            </div>
                        </div>

                        <label htmlFor="companyName">Company name (optional)</label>
                        <input type="text" id='companyName' name='companyName' />

                        <label htmlFor="region">Country / Region *</label>
                        <input type="text" id='region' name='region' value={country} onChange={
                            (e) => {
                                setcountry(e.target.value);
                            }
                        } />

                        <label htmlFor="address">Street address *</label>
                        <input type="text" id='address' name='address' value={address} onChange={
                            (e) => {
                                setAddress(e.target.value);
                            }
                        } />

                        <label htmlFor="city">Town / City *</label>
                        <input type="text" id='city' name='city' value={city} onChange={
                            (e) => {
                                setCity(e.target.value);
                            }
                        } />

                        <label htmlFor="state">State / County *</label>
                        <input type="text" id='state' name='state' value={state} onChange={
                            (e) => {
                                setState(e.target.value);
                            }
                        } />

                        <label htmlFor="zip">Postcode / ZIP *</label>
                        <input type="text" id='zip' name='zip' value={postalCode} onChange={
                            (e) => {
                                setPostalCode(e.target.value);
                            }
                        } />

                        <div className="contact">
                            <label htmlFor="phone">Phone *</label>
                            <input type="text" id='phone' name='phone' value={phone} onChange={
                                (e) => {
                                    setPhone(e.target.value);
                                }
                            } />
                            <label htmlFor="email">Email address *</label>
                            <input type="text" id='email' name='email' value={email} onChange={
                                (e) => {
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
                            {CartItem.CartItem ? CartItem.CartItem.map((i) => {
                                return <div>
                                    <p>{i.Description ? i.Description.slice(0, 50) : ''}  × {i.quantity}</p>
                                    <p>${i.price ? i.price.toFixed(3) : ''}</p>
                                </div>
                            }) : ''}
                            <div>
                                <p>SubTotal</p>
                                <p>${subtotal ? subtotal.toFixed(3) : 0}</p>
                            </div>
                            <div>
                                <p>Total</p>
                                <p>${subtotal ? subtotal.toFixed(3) : 0}</p>
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