import React from 'react'
import Layout from './Layout'
import "./css/Ordertrack.css";
const Order_tracking = () => {
  return (
    <Layout>
         <div className='container'>
            <div className="form my-5">
                <form action="">

                    <div className="form-group name">
                        <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                        <label For="OrderID">Order ID </label>
                        <input type="text" className="form-control" id="OrderID" placeholder='Found in your order confirmation email.' />
                    </div>
                    <div className="form-group name">
                        <label For="Billingemail">Billing email</label>
                        <input type="text" className="form-control" id="Billingemail" placeholder='Email you used during checkout.'/>
                    </div>
                    
                    <div className="form-group my-4 mx-2">
                        <button type="submit" className="custom-btn ">Track</button>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default Order_tracking