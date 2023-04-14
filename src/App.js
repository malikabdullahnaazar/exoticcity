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
  const [userDetails, setUserDetails] = useState({});
  const [products, setproducts] = useState()
  const [categories, setcategories] = useState(null)
  const [subcategories, setsubcategories] = useState(null)
  const [brands, setbrands] = useState(null)
  const [catrgorycount, setcatrgorycount] = useState(null)
  const [productprices, setproductprices] = useState()
  const [filterprice, setfilterprice] = useState(null)

  const username = "ADMIN";
  const password = "hW6PmQ7K38VxMoVEK1Kjabbn6XV/8JIgFAheYJmbmp0=";
//Customer Login Api
  useEffect(() => {  
    return () => {
      axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox14/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/Customers', {
      
          auth:{
            username,
            password
          }
        }).then(async (res)=> {
         setuser(res.data.value);
          // console.log(res.data.value);
        })
       
    }
  },[])
  //Product Api
  useEffect(() => {  
    return  () => {
       axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox14/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/Items', {
          auth:{
            username,
            password
          }
        }).then( async(res)=> {
           setproducts(res.data.value);
        })
       
    }
  }, [])
//Filtered the Categories and sub Categories and brands
useEffect(() => {
  if (products) {
    const productValues = Object.values(products);
    const uniqueCategories = [...new Set(productValues.map(product => product.Category))];
    const uniqueBrands = [...new Set(productValues.map(product => product.Brand))];
    const uniqueSubcategories = [...new Set(productValues.map(product => product.SubCategory))];
    const categoryCounts = uniqueCategories.reduce((counts, category) => {
      const count = productValues.filter(product => product.Category === category).length;
      counts[category] = count;
      return counts;
    }, {});
    // Do something with uniqueCategories, uniqueBrands, and uniqueSubcategories
    setcatrgorycount(categoryCounts);
    setcategories(uniqueCategories);
    setsubcategories(uniqueSubcategories);
    setbrands(uniqueBrands);
    
  }
}, [products]);
//filter the product price with its Price Group
useEffect(() => {
  if (productprices&&userDetails) {
    const filteredProductPrice=productprices.filter(price=>price.SalesCode===userDetails.customerpricegroup);
    setfilterprice(filteredProductPrice);
  }
}, [productprices,userDetails]);

//Api call for price
useEffect(() => {
  return () => {
    axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox14/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/SalesPrice', {
    
        auth:{
          username,
          password
        }
      }).then(async (res)=> {
        setproductprices(res.data.value);
        // console.log(res.data.value);
      })
     
  }
}, [])





  

  return (

    
    <>
   
      <header>
        <UserContext.Provider value={ { user, login, setlogin, userDetails, setUserDetails,filterprice,products,catrgorycount,categories,subcategories,brands} } >
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/shop/:category' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/my-account' element={login?<MyAccount />:<Login/>} />
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
