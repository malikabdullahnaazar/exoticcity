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
import InfoForm from './components/Checkout/InfoForm/InfoForm';
import ProductList from './components/Checkout/ProductList/ProductList';
import Services from './components/Services';


const loadLoginFromLocalStorage = () => {
  const savedLogin = localStorage.getItem('login');
  if (savedLogin) {
    return (JSON.parse(savedLogin));
  }
  else{
    return localStorage.setItem('login', false)
  }
};

const loadUserDetailsFromLocalStorage = () => {
  const savedUserDetails = localStorage.getItem('userDetails');
  if (savedUserDetails) {
    return (JSON.stringify(savedUserDetails));
  }
  else{
    return localStorage.setItem('userDetails', "")
  }
};


function App() {

  const [login, setlogin] = useState(loadLoginFromLocalStorage())
  const [userDetails, setUserDetails] = useState(loadUserDetailsFromLocalStorage());
  const [CartItem, setCartItem] = useState([])

  const [user, setuser] = useState(null);
  const [products, setproducts] = useState()
  const [categories, setcategories] = useState(null)
  
  const [subcategories, setsubcategories] = useState(null)
  const [brands, setbrands] = useState(null)
  const [navBarCat, setnavBarCat] = useState(null)
  // const [catrgorycount, setcatrgorycount] = useState(null)
  // const [productprices, setproductprices] = useState()
  const [filterprice, setfilterprice] = useState(null)
  const [hoverShow, sethoverShow] = useState(false)


  const username = "ADMIN";
  const password = "JMV+o7nU6J5h55Jz6mH/PuHUfXC2AXAqu0zVlOczH+g=";
//Customer Login Api
  useEffect(() => {  
    return () => {
      axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/sandbox16/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/Customers', {
      
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
  
  

  //save user and userdetails in localstorage
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(login));
  }, [login]);

  useEffect(() => {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  }, [userDetails]);


  //Product Api
  useEffect(() => {  
    return  () => {
       axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/sandbox16/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/ItemSalesPrice', {
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
const [subCategories, setSubCategories] = useState([]);
useEffect(() => {
  if (products) {
    const productValues = Object.values(products);
    const uniqueCategories = [...new Set(productValues.map(product => product.Category))];
    const uniqueBrands = [...new Set(productValues.map(product => product.Brand))];
    const uniqueSubcategories = [...new Set(productValues.map(product => product.SubCategory))];
    //make navbar categories logic 
    
    const navbarCategories = productValues.reduce((acc, curr) => {
      const existingCategory = acc.find(cat => cat.name === curr.Category);
      if (existingCategory) {
        if (!existingCategory.subcategories.includes(curr.SubCategory)) {
          existingCategory.subcategories.push(curr.SubCategory);
        }
      } else {
        acc.push({
          name: curr.Category,
          subcategories: [curr.SubCategory]
        });
      }
      return acc;
    }, []);

    
   // Merge uniqueCategories and uniqueSubcategories into a single array
  const categories = [...uniqueCategories, ...uniqueSubcategories];

  // Group the subcategories by category and count the number of products in each subcategory
  const subcategoryCounts = categories.map(category => {
    const count = productValues.filter(product => product.SubCategory === category || product.Category === category).length;
    return { name: category, count };
  });
    // Do something with uniqueCategories, uniqueBrands, and uniqueSubcategories
    setSubCategories(subcategoryCounts);
    setcategories(uniqueCategories);
    setsubcategories(uniqueSubcategories);
    setbrands(uniqueBrands);
    setnavBarCat(navbarCategories);
    
  }
}, [products]);


//filter the product price with its Price Group
useEffect(() => {
  if (products&&userDetails) {
    const filteredProductPrice=products.filter(price=>price.SalesCode===userDetails.customerpricegroup);
    setfilterprice(filteredProductPrice);
  }
}, [products,userDetails]);


useEffect(() => {
  

  return () => {
    console.log(setCartItem);
  }
}, [setCartItem])




const [Search, setSearch] = useState('');

   

  return (

    
    <>
   
      <header onClick={()=>{
        sethoverShow(false)
      }} >
        <UserContext.Provider value={ { user,Search,setSearch,CartItem,setCartItem,login,navBarCat, setlogin, userDetails,subCategories, setUserDetails,filterprice,categories,subcategories,brands, hoverShow, sethoverShow} } >
        <Routes>
          <Route path='/' element={<Index />}   />
          <Route path='/shop/:category' element={<Shop />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/services' element={ <Services /> } />
          <Route path='/about' element={<About />} />
          <Route path='/my-account' element={login?<MyAccount />:<Login/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Product/:slug' element={<Product />} />
          <Route path='/login' element={login?<MyAccount />:<Login/>} />
          <Route path='/my-account/lost-password' element={<Forgotpassword />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/my-account' element={login?<MyAccount />:<Login/>} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/order-tracking' element={<OrderTracking />} />
          <Route path='/checkout' element={<ProductList/>}/>
          <Route path='/checkout/fill-info' element={<InfoForm/>}/>

        </Routes>
        </UserContext.Provider>
      </header>
    </>
  );
}

export default App;
