import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
import { useEffect } from 'react';
import axios from 'axios';
import InfoForm from './components/Checkout/InfoForm/InfoForm';
import ProductList from './components/Checkout/ProductList/ProductList';
import Services from './components/Services';
// import WishListPopOver from './components/WishListPopOver/WishListPopOver';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalNotice from './components/LegalNotice';
// import { useMsal } from '@azure/msal-react';
import { useMsal, useMsalAuthentication } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';


function App() {
  const loadLoginFromLocalStorage = () => {
    var savedLogin = localStorage.getItem('login');
    
  //  console.log(savedLogin);
    if (savedLogin) {
      savedLogin= savedLogin==="false"?'':true
      return savedLogin;
    }
    else {
      localStorage.setItem('login', false);
      return false;
    }
  };
  //
  const loadUserDetailsFromLocalStorage = () => {

    const savedUserDetails = localStorage.getItem('userDetails');
    if (savedUserDetails) {
      return (JSON.stringify(savedUserDetails));
    }
    else {
      return localStorage.setItem('userDetails', [])
    }
  };
  //Wishlist items from localstorage
  const loadWishlistFromLocalStorage = () => {
    const items = JSON.parse(localStorage.getItem('wishlist'));
    if (items) {
      return items;
    } else {
      localStorage.setItem('wishlist', JSON.stringify([]));
      return [];
    }
  };
  //cart items from localstorage
  const loadcartFromLocalStorage = () => {
  
    const items = JSON.parse(localStorage.getItem('cartItems'));
    if (items) {
      return items;
    }
    else {
      localStorage.setItem('cartItems', JSON.stringify([]));
      return [];
    }
  };
  
  const { instance, accounts } = useMsal();
  var [accessToken, setAccessToken] = useState();
  const [login, setlogin] = useState(loadLoginFromLocalStorage())
  // console.log( login)
  const [userDetails, setUserDetails] = useState(loadUserDetailsFromLocalStorage());
  const [CartItem, setCartItem] = useState(loadcartFromLocalStorage())
  const [wishlist, setwishlist] = useState(loadWishlistFromLocalStorage())
  const [user, setuser] = useState(null);
  const [products, setproducts] = useState()
  const [categories, setcategories] = useState(null)
  const [navBarCat, setnavBarCat] = useState(null)
  const [subcategories, setsubcategories] = useState(null)
  const [showfilter, setshowfilter] = useState(false)
  const [brands, setbrands] = useState(null)
  // const [token, settoken] = useState('')
  const [Search, setSearch] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredCategoriesff, setFilteredCategoriesff] = useState([]);
  const [filteredCategoriesnf, setFilteredCategoriesnf] = useState([]);
  const [filteredCategorieshr, setFilteredCategorieshr] = useState([]);
  



  // const [catrgorycount, setcatrgorycount] = useState(null)
  // const [productprices, setproductprices] = useState()
  const [filterprice, setfilterprice] = useState(null)
  const [hoverShow, sethoverShow] = useState(false)
  
  const [m_strUser, setm_strUser] = useState('');
  useEffect(() => {
    const getToken = async () => {
      if (accounts.length > 0) {
        try {
          const request = {
            scopes: ["https://api.businesscentral.dynamics.com/.default"],
            account: accounts[0]
          };
          const response = await instance.acquireTokenSilent(request);
          var token = response.accessToken;
          setAccessToken(token);
          console.log(token);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getToken();
  }, [instance, accounts]);
  //Customer Login Api
  // useEffect(() => {
  //   return () => {
      
  //       axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/Customers', {

  //       headers: {

  //         "Authorization": `Bearer ${accessToken}`

  //       }

  //     }).then(async (res) => {
  //       console.log(res);
  //       setuser(res.data.value);

  //       console.log(res.data.value);

  //     })
      
     




  //   }


  // }, [accessToken])

  

  //Customer Login Api
  // useEffect(() => {
  //   return () => {
    

  //       axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/Customers', {
  
  //         headers: {
  
  //           "Authorization": `Bearer ${accessToken}`
  
  //         }
  
  //       }).then(async (res) => {
  
  //         setuser(res.data.value);
  
  //         // console.log(res.data.value);
  
  //       })
      




  //   }


  // }, [accessToken])

  // useEffect(() => {


  //   return () => {
  //     console.log(CartItem);
  //   }
  // }, [CartItem])


  //save user and userdetails in localstorage


  useEffect(() => {
    localStorage.getItem('userDetails') ? localStorage.setItem('userDetails', JSON.parse(userDetails)) : localStorage.setItem('userDetails', JSON.stringify(userDetails));;
  }, [userDetails]);
  //cart items stored in localstorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(CartItem));
  }, [CartItem]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems'));
    if (items) {
      setCartItem(items);
    }
    else {
      setCartItem(null)
    }
  }, []);
  //wishlist stored in local storage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('wishlist'));
    if (items) {
      setwishlist(items);
    }
    else {
      setwishlist(null)
    }
  }, []);


  //Product Api itemsaleprice
  // useEffect(() => {
  //   return () => {
      

  //       axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/ItemSalesPrice', {
  //         headers: {
  
  //           "Authorization": `Bearer ${accessToken}`
  
  //         }
  //       }).then(async (res) => {
  //         setproducts(res.data.value);
  //       })
      

  //   }
  // }, [accessToken])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/ItemSalesPrice', {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });
        setproducts(response.data.value);
      } catch (error) {
        console.error(error);
      }
      try {
        const response = await axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/Customers', {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });
        console.log(response);
        setuser(response.data.value);
        console.log(response.data.value);
      } catch (error) {
        console.error(error);
      }
    };
  
    const timer = setTimeout(fetchData, 400); // Run fetchData after 1 minute (60000 milliseconds)
  
    // Cleanup function to clear the timer if the component unmounts or the dependencies change
    return () => clearTimeout(timer);
  }, [accessToken]);
  


  //Filtered the Categories and sub Categories and brands
  useEffect(() => {
    if (products) {
      const productValues = Object.values(products);
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
      setnavBarCat(navbarCategories);
    }
  }, [products]);

  //Filtered the Categories and sub Categories and brands
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    if (products) {
      const productValues = Object.values(products);
      const uniqueCategories = [...new Set(productValues.map(product => product.Category))];
      const uniqueBrands = [...new Set(productValues.map(product => product.Brand))];
      const uniqueSubcategories = [...new Set(productValues.map(product => product.SubCategory))];
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


    }
  }, [products]);


  //filter the product price with its Price Group
  useEffect(() => {
    if (products && userDetails) {
      const filteredProductPrice = products.filter(price => price.SalesCode === userDetails.customerpricegroup);
      setfilterprice(filteredProductPrice);
    }
  }, [products, userDetails]);
  //Default price-group
  useEffect(() => {
    if (!filterprice && products) {
      const filteredProductPrice = products.filter(price => price.SalesCode === "L4");
      setfilterprice(filteredProductPrice);
    }
  }, [products]);

  //show cart items
  // useEffect(() => {


  //   return () => {
  //     console.log(setCartItem);
  //   }
  // }, [setCartItem])

 


 



  return (


    <>

      <header onClick={() => {
        sethoverShow(false)
      }} >
        <UserContext.Provider value={{
          showfilter, setshowfilter,
          filteredCategorieshr, accessToken, setFilteredCategorieshr, filteredCategoriesnf, navBarCat, setnavBarCat,
          setFilteredCategoriesnf, filteredCategoriesff, setFilteredCategoriesff, filteredCategories,
          setFilteredCategories, user, Search, wishlist, setwishlist, setSearch, CartItem, setCartItem, login, setlogin,
          userDetails, subCategories, setUserDetails, filterprice, categories, subcategories, brands, hoverShow, sethoverShow
        }} >
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/shop/:category' element={<Shop />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/services' element={<Services />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/legal-notice' element={<LegalNotice />} />
            <Route path='/about' element={<About />} />
            <Route path='/my-account' element={login ? <MyAccount /> : <Login />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/Product/:slug' element={<Product />} />
            <Route path='/login' element={login ? <MyAccount /> : <Login />} />
            <Route path='/my-account/lost-password' element={<Forgotpassword />} />
            <Route path='/brands' element={<Brands />} />
            <Route path='/my-account' element={login ? <MyAccount /> : <Login />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/order-tracking' element={<OrderTracking />} />
            <Route path='/checkout' element={<ProductList />} />
            <Route path='/checkout/fill-info' element={<InfoForm />} />

          </Routes>
        </UserContext.Provider>
      </header>
    </>
  );
}

export default App;
