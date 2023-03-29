import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import "./css/login.css";
import axios from 'axios';
import Layout from "./../Layout"

const Login = () => {

  // const username = "ADMIN";
  // const password = "dQq0f5JsVczNtUIXOAIqRL5xrZil7XGuj2CmC9hI3O0=";
  
  // useEffect(() => {
  //   return () => {
  //     axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox11/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/Customers', {
  //         auth:{
  //           username,
  //           password
  //         }
  //       }).then(res=> console.log(res) )
  //   }
  // }, [])
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Do something with the values, e.g. send them to a server for validation
    console.log("Username:", Username);
    console.log("Password:", Password);
  }
  return (
    <Layout>
    <div className='container-fluid mx-2'>
      <h2>LOGIN</h2>
      <hr />
      <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="username">Username or email address *</label>
          <input type="text" id="username" value={Username} onChange={handleUsernameChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="password">Password *</label>
          <input type="password" id="password" value={Password} onChange={handlePasswordChange} />
        </div>
        <div className='my-1 d-flex'>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className='mx-3 my-3'> <strong> Remember me</strong></label>
        </div>
        <div>
          <button className="btn-purple" type="submit">LogIn</button>
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