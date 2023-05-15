import React from 'react';
import {useState,useContext,useEffect} from 'react';
import DescRelatedProducts from './DescRelatedProducts/DescRelatedProducts';
import ProductDesc from './ProductDesc/ProductDesc';
import './ProductOverview.css';
import Reviews from './Reviews/FloatingActionButtonZoom';
import Layout from '../Layout'
import { useParams } from "react-router-dom";
import { UserContext } from '../../UserContext';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';
function ProductOverview(props) {

  const { filterprice } = useContext(UserContext);
  const [product, setproduct] = useState(null);
  const [relatedProducts, setrelatedProducts] = useState();
  let prams=useParams();
  const username = "ADMIN";
  const password = "BPPKt1GEzgPRD6oXSWRAJm+XtE0Il6/O2GEOU4eAkB0=";
  const [picture, setPicture] = useState();
  useEffect(() => {
    if (filterprice && prams.slug) {
      const filteredProduct = filterprice.findIndex(prod => prod.itemNo === prams.slug);
      setproduct(filterprice[filteredProduct])
      if (filterprice && product) {
        // console.log(filterprice,product);
        const relatedProducts = filterprice.filter(p => p.Category === product.Category && p.SubCategory === product.SubCategory && p.itemNo !== product.itemNo);
        // Check if any related products were found
        if (relatedProducts.length > 0) {
          // Return an array of related products
          setrelatedProducts( relatedProducts);
        } else {
          console.log("No related products found.");
        }
      } else {
        console.log("Filter or product is null.");
      }
      if(product){
        axios.get(`https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox18/api/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/items(${product.itemSystemid})/picture`, {
          auth:{
            username,
            password
          }
        }).then((res)=> {
          setPicture(res.data["pictureContent@odata.mediaEditLink"]);
        })
       }
    }
  }, [prams.slug,filterprice,product])
  

  return (
    <Layout>
    <div className="productOverview">
    
        <h2 style={{ fontWeight: 600}} >{product?(product.Description):("product")}</h2>
        <ProductDesc product={product?(product):("")} picture={picture?(picture):("")} />
        <Reviews  product={product?(product):("")}/>
        <DescRelatedProducts relatedProducts={relatedProducts?(relatedProducts):("")} />
    </div>
    </Layout>
  )
}

export default ProductOverview