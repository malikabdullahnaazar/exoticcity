import React,{useState} from 'react';
import { Link } from "react-router-dom";
import "./css/login.css"
import Layout from "./../Layout"
const Login = () => {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
var username = "ADMIN";
var password = "dQq0f5JsVczNtUIXOAIqRL5xrZil7XGuj2CmC9hI3O0=";
var auth = username + ":" + password;
var encodedAuth = btoa(auth);
var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic " + encodedAuth);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox11/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  const login=()=>{
    setUsername(document.getElementById(username).value);
    console.log(Username);
  }

  return (
    <Layout>
    <div className='container-fluid mx-2'>
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
          <div className='my-1 d-flex'>
            <input type="checkbox" id="remember" />
          <label for="remember" className='mx-3 my-3 '> <strong> Remember me</strong></label>
          </div>
          <div>
            <button  class=" btn-purple"  type="Submit"onClick={login}>LogIn</button>
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