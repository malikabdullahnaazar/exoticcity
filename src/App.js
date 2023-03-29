
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Index from "./components/Index";
import Wishlist from "./components/WishList";
import Brands from "./components/Brands";
import OrderTracking from "./components/Order_tracking";
import Shop from "./components/shope/Shop";
import Product from "./components/ProductOverview/ProductOverview";
import Login from "./components/Login/Login";
import MyAccount from "./components/My_account/Tabs/BasicTabs";
import Forgotpassword from "./components/Login/ForgotPassword";
import { UserContext } from './UserContext';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

  const [login, setlogin] = useState(false)
  const [user, setuser] = useState(null);
  
  const username = "ADMIN";
  const password = "dQq0f5JsVczNtUIXOAIqRL5xrZil7XGuj2CmC9hI3O0=";

  useEffect(() => {  
    return () => {
      axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox11/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/Customers', {
          auth:{
            username,
            password
          }
        }).then((res)=> {
          setuser(res.data.value);
          // console.log(res.data.value);
        })
    }
  }, [])
  

  return (

    

    <>
      <header>
        <UserContext.Provider value={ { user, login, setlogin} } >
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/login' element={login?<MyAccount />:<Login/>} />
          <Route path='/my-account/lost-password' element={<Forgotpassword />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/my-account' element={login?<MyAccount />:<Login/>} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/order-tracking' element={<OrderTracking />} />
        </Routes>
        </UserContext.Provider>
      </header>
    </>
  );
}

export default App;
