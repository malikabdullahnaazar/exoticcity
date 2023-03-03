
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Index from "./components/Index";
import Brands from "./components/Brands";
import MyAccount from "./components/My_Account";
function App() {
  return (
    <>
      <header>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/order-tracking' element={<MyAccount />} />
        </Routes>
      </header>
    </>
  );
}

export default App;