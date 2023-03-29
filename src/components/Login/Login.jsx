import React,{useContext, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import "./css/login.css";
import axios from 'axios';
import Layout from "./../Layout";
import { UserContext } from '../../UserContext';

const Login = () => {

  const {user, setlogin} = useContext(UserContext)

  // const [picture, setPicture] = useState();

  // const username = "ADMIN";
  // const password = "dQq0f5JsVczNtUIXOAIqRL5xrZil7XGuj2CmC9hI3O0=";
  
  // useEffect(() => {
  //   return () => {
  //     axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox11/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/Items', {
  //       auth:{
  //         username,
  //         password
  //       }
  //     }).then((res)=> {
  //       setPicture(res.data.value[10].Picture);
  //       console.log(res.data.value[10].Picture);
  //     })
      
  //   }
  // }, [])

  return (
    <Layout>
    <div className='container-fluid mx-2'>
      <h2>LOGIN</h2>
      <hr />
      <form  onSubmit={async (e)=>{
        e.preventDefault();
        let username = await document.querySelector("#username").value;
        let password = await document.querySelector("#password").value;
        for(var i =0; i<= user.length; i++){
           if(user[i].UserEmail===username && user[i].UserPassword === password){
            setlogin(true);
            console.log('found');
            break;
          }
          else{
            setlogin(false);
            console.log('error');
            break;
          }
        }}}
       >
        {/* <img src={picture} alt="pro" /> */}
        <div className="row">
          <div className="col-sm-6">
            <label for="username">Username or email address *</label>
            <input type="text" id="username" required/>
          </div>
        </div>
        <div className="row">
          
          <div className="col-sm-6">
            <label for="password">Password *</label>
            <input type="password" id="password" required/>
          </div>
          <div className='my-1 d-flex'>
            <input type="checkbox" id="remember" />
          <label for="remember" className='mx-3 my-3 '> <strong> Remember me</strong></label>
          </div>
          <div>

            <button  class=" btn-purple" type='submit'>LogIn</button>
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