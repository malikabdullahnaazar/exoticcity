import React from 'react'
// import { Link } from "react-router-dom";
import Layout from '../Layout'
const ForgotPassword = () => {
  return (
    <Layout>
    <div className='container-fluid'>
      <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
    
      <form action="" >
        <div className="row">
          <div className="col-sm-6">
            <label for="username">Username or email address *</label>
            <input type="text" id="username" className='my-2' />
          </div>
        </div>
        <div className="row">
          
          <div className="col-sm-6">
          <div>
          <button class=" my-3 btn-purple">Reset Password</button>
          </div>
          </div>
         
         
        </div>
      </form>
      
    </div>
    </Layout>
  )
}

export default ForgotPassword