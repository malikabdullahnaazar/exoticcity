
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
function App() {
  return (
    <>
      <header>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/shop' element={<Shop />} />
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

export default App;
