
import './App.css';
import {useEffect,useState,createContext} from 'react';
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
import axios from "axios"
function App() {
  const [products, setproducts] = useState();
  const data=createContext();
  const username = "ADMIN";
  const password = "dQq0f5JsVczNtUIXOAIqRL5xrZil7XGuj2CmC9hI3O0=";
  useEffect(() => {
    return () => {
      axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox11/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/Items', {
          auth:{
            username,
            password
          }
        }).then(res=> setproducts(res.data.value) )
        
    }
  }, [products])
  return (
    <>
      <header>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/shop' element={<data.Provider products={products}><Shop /></data.Provider>} />
          <Route path='/about' element={<About />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/my-account/lost-password' element={<Forgotpassword />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/order-tracking' element={<OrderTracking />} />
        </Routes>
      </header>
    </>
  );
}

export default App
