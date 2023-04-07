import React,{useContext, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./css/login.css";
import Layout from "./../Layout";
import { UserContext } from '../../UserContext';

const Login = () => {

  const {user, setlogin, setUserDetails} = useContext(UserContext)

  return (
        
    <Layout>
    <div className='container-fluid mx-2'>
      <h2>LOGIN</h2>
      <br />
      <form  onSubmit={async (e)=>{
        e.preventDefault();
        let username = await document.querySelector("#username").value;
        let password = await document.querySelector("#password").value;
        for(var i =0; i<= user.length; i++){
           if(user[i].UserEmail===username && user[i].UserPassword === password){
            setlogin(true);
            await setUserDetails(user[i]);
            break;
          }
          else{
            setlogin(false);
            break;
          }
        }}}
       >
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