import React from 'react'
import Layout from '../../Layout'
import './InfoForm.css'

function InfoForm() {
  return (
    <Layout>
        <div className="infoForm">
            <div className="customerDetails">
                <h1>BILLING DETAILS</h1>
                <form method='post'>
                    <div className="name">
                        <div id='firstName' >
                        <label htmlFor="firstName">First Name *</label>
                        <input type="text" id='firstName' name='firstName' />
                        </div>
                        <div id='secondName' >
                        <label htmlFor="secondName">Second Name *</label>
                        <input type="text" id='secondName' name='secondName' />
                        </div>
                    </div>

                        <label htmlFor="companyName">Company name (optional)</label>
                        <input type="text" id='companyName' name='companyName' />

                        <label htmlFor="region">Country / Region *</label>
                        <input type="text" id='region' name='region' />
                        
                        <label htmlFor="address">Street address *</label>
                        <input type="text" id='address' name='address' />

                        <label htmlFor="city">Town / City *</label>
                        <input type="text" id='city' name='city' />

                        <label htmlFor="state">State / County *</label>
                        <input type="text" id='state' name='state' />

                        <label htmlFor="zip">Postcode / ZIP *</label>
                        <input type="text" id='zip' name='zip' />

                    <div className="contact">
                        <label htmlFor="phone">Phone *</label>
                        <input type="text" id='phone' name='phone' />
                        <label htmlFor="email">Email address *</label>
                        <input type="text" id='email' name='email' />
                    </div>

                    <div className="additionalInfo">
                        <h2>ADDITIONAL INFORMATION</h2>
                        <label htmlFor="phone">Order notes (optional)</label>
                        <textarea type="text" id='phone' name='phone' placeholder='Notes about your order, e.g. special notes for delivery.' />
                    </div>
                </form>
            </div>
            <div className="orderDetails">
                <h2>YOUR ORDER</h2>
                <div className="productDetails">
                    <div>
                        <p>Product</p>
                        <p>SubTotal</p>
                    </div>
                    <div>
                        <p>REGAL TOASTED CORN 8x250G  × 1</p>
                        <p>$0.00</p>
                    </div>
                    <div>
                        <p>REGAL TOASTED CORN 8x250G  × 1</p>
                        <p>$0.00</p>
                    </div>
                    <div>
                        <p>REGAL TOASTED CORN 8x250G  × 1</p>
                        <p>$0.00</p>
                    </div>
                    <div>
                        <p>REGAL TOASTED CORN 8x250G  × 1</p>
                        <p>$0.00</p>
                    </div>
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
                </p>
                <button>Place Order</button>
            </div>
        </div>
    </Layout>
  )
}

export default InfoForm