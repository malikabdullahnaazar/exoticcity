import React from 'react';
import { Link } from "react-router-dom";
import "./css/login.css"
import Layout from "./../Layout"
const Login = () => {
  return (
    <Layout>
    <div className='container'>
      <h2>LOGIN</h2>
      <hr />
      <form action="" >
        <div className="row">
          <div className="col-sm-6">
            <label for="username">Username or email address *</label>
            <input type="text" id="username" />
          </div>
        </div>
        <div className="row">
          
          <div className="col-sm-6">
            <label for="password">Password *</label>
            <input type="password" id="password" />
          </div>
          <div className='my-3'>
            <input type="checkbox" id="remember" />
          <label for="remember" className='mx-3 '> <strong> Remember me</strong></label>
          </div>
          <div>
          <button class=" btn-purple">LogIn</button>
          </div>
          <div className='py-2'>
            <Link to="/my-account/lost-password">Lost your password?</Link>
          </div>
         
        </div>
      </form>
      
    </div>
    </Layout>
  )
}

export default Login