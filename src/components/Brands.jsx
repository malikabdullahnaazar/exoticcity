import React,{useEffect,useState} from 'react'
import axios from 'axios';

const Brands = () => {
  const [picture, setPicture] = useState();

const username = "ADMIN";
const password = "dQq0f5JsVczNtUIXOAIqRL5xrZil7XGuj2CmC9hI3O0=";

useEffect(() => {
  return () => {
    axios.get('https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox11/api/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/items(f4b72ce3-fd19-ed11-90eb-000d3a48582d)/picture', {
      auth:{
        username,
        password
      }
    }).then((res)=> {
      setPicture(res.data["pictureContent@odata.mediaReadLink"]);
      console.log(picture);
    })
    
  }
}, [])
  return (
    <div className='text-center'>
      <img src={picture} alt='picture'/>
    </div>
  )
}

export default Brands