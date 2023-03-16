
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Index from "./components/Index";
import Brands from "./components/Brands";
import Shop from "./components/shope/Shop";
import Login from "./components/Login/Login";
import MyAccount from "./components/My_Account";
import Forgotpassword from "./components/Login/ForgotPassword";
function App() {
  return (
    <>
      <header>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/my-account' element={<Login />} />
          <Route path='/my-account/lost-password' element={<Forgotpassword />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/order-tracking' element={<MyAccount />} />
        </Routes>
      </header>
    </>
  );
}

export default App;
