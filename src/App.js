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

const loadLoginFromLocalStorage = () => {
  const savedLogin = localStorage.getItem('login');
  if (savedLogin) {
    return (JSON.parse(savedLogin));
  }
  else {
    return localStorage.setItem('login', false)
  }
};

const loadUserDetailsFromLocalStorage = () => {
  const savedUserDetails = localStorage.getItem('userDetails');
  if (savedUserDetails) {
    return (JSON.stringify(savedUserDetails));
  }
  else {
    return localStorage.setItem('userDetails', null)
  }
};
const loadWishlistFromLocalStorage = () => {
  const items = JSON.parse(localStorage.getItem('wishlist'));
  if (items) {
    return items;
  } else {
    localStorage.setItem('wishlist', JSON.stringify([]));
    return [];
  }
};
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

const tokenEndpoint =

"https://login.microsoftonline.com/7c885fa6-8571-4c76-9e28-8e51744cf57a/oauth2/v2.0/token";

const clientId = "0598e72a-da3f-4f95-bd93-7a27d0797e68";

const clientSecret = "CUv8Q~nKj3RshRdV~yoyA1zuTino9hPM8xCFDbGh";

const resource = "https://api.businesscentral.dynamics.com";

const scope = "https://api.businesscentral.dynamics.com/.default";



axios.post(tokenEndpoint, {

  grant_type: 'client_credentials',

  client_id: clientId,

  resource: resource,

  client_secret: clientSecret,

  scope: scope

}).then((response) => {

  const accessToken = response.data.access_token;

  console.log(accessToken);

}).catch((error) => {

  console.error(error);

});

// const loadCartItemsFromLocalStorage = () => {
  //   // Get the CartItem array from local storage
  //   const storedCartItems = localStorage.getItem('cartItems');
  //   // If the CartItem array exists in local storage, parse it and return it
  //   if (storedCartItems) {
    //     return JSON.stringify(storedCartItems);
//   } else {
//     // Return an empty array if the 'cartItems' key does not exist in local storage
//     return [];
//   }
// };


function App() {
  const [token, settoken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTY4NDIyMzEyMywibmJmIjoxNjg0MjIzMTIzLCJleHAiOjE2ODQyMjcwMjMsImFpbyI6IkUyWmdZSGo5Ty9tLzhITVZrUlgxdHoxT01kb25Bd0E9IiwiYXBwaWQiOiIwNTk4ZTcyYS1kYTNmLTRmOTUtYmQ5My03YTI3ZDA3OTdlNjgiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiJjMjM0Njg2NC0xYjVkLTRkNDktYjc4Zi1mMzdmZGFjY2I1MTIiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiYzIzNDY4NjQtMWI1ZC00ZDQ5LWI3OGYtZjM3ZmRhY2NiNTEyIiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiUXNaVW1ZT09zVVdkVkQ0ZjlCd3BBQSIsInZlciI6IjEuMCJ9.jiDdBd4pSyY1n423B9YzWj3Yj8GPjoXWBZHjhtF9wLcxznMG09D6GW-_SkqeSI6KUwEjA4pm9TUKv-fb2d4IFe6e3otN8bk1EuteqNi6_YW2cNTOLUUmMkdm86juwuefWdkuugCzdcoOfc73p6WP4cp15Y42Fd3yNdH8ySlwTSNZdr-S8I856Kyk70UK3y1hhRo_bpMh9hzZNsjjmvYnDpVVKsi6q5Z8fxiWTFO2-PuHU3_WVrGIA93NpRwv-bj8NS7yl-QFQrr4rLZ3nBQFT6SeS1Wvp_VwLsritY16i77GwCVkBmzpxoY-MA2xa49me_vIJMEG41XlI7_ZJTVh7A')
  const [login, setlogin] = useState(loadLoginFromLocalStorage())
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

  // const [catrgorycount, setcatrgorycount] = useState(null)
  // const [productprices, setproductprices] = useState()
  const [filterprice, setfilterprice] = useState(null)
  const [hoverShow, sethoverShow] = useState(false)

  //Customer Login Api
  useEffect(() => {
    return () => {
      axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/Customers', {

        headers: {

          "Authorization": `Bearer ${token}`

        }

      }).then(async (res) => {

        setuser(res.data.value);

        // console.log(res.data.value);

      })




    }


  }, [])

  // useEffect(() => {


  //   return () => {
  //     console.log(CartItem);
  //   }
  // }, [CartItem])


  //save user and userdetails in localstorage
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(login));
  }, [login]);

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
  useEffect(() => {
    return () => {
      axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/TMRC/TMRC/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/ItemSalesPrice', {
        headers: {

          "Authorization": `Bearer ${token}`

        }
      }).then(async (res) => {
        setproducts(res.data.value);
      })

    }
  }, [])


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




  const [Search, setSearch] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredCategoriesff, setFilteredCategoriesff] = useState([]);
  const [filteredCategoriesnf, setFilteredCategoriesnf] = useState([]);
  const [filteredCategorieshr, setFilteredCategorieshr] = useState([]);


  return (


    <>

      <header onClick={() => {
        sethoverShow(false)
      }} >
        <UserContext.Provider value={{
          showfilter, setshowfilter,
          filteredCategorieshr, token, setFilteredCategorieshr, filteredCategoriesnf, navBarCat, setnavBarCat,
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
