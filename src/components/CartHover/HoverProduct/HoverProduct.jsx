import React, { useEffect, useState } from 'react'
import './HoverProduct.css'
import pic4 from "../../../Static/pic4.png";
import axios from 'axios'

function HoverProduct(props) {
  const [picture, setPicture] = useState();
  const username = "ADMIN";
  const password = "JMV+o7nU6J5h55Jz6mH/PuHUfXC2AXAqu0zVlOczH+g=";

  useEffect(() => {
    return () => {
      // axios.get(`https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox15/api/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/items(b49e42bd-fe19-ed11-90eb-000d3a48582d)/picture`, {
      axios.get(`https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/sandbox16/api/v2.0/companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/items(${props.img})/picture`, {
        auth: {
          username,
          password
        }
      }).then((res) => {
        setPicture(res.data["pictureContent@odata.mediaEditLink"]);
        // console.log(picture);
      })

    }
  }, [props.img])
  return (
    <div className="hoverProduct">
        <div className="img">
            <img src={props.img?props.img : pic4} alt="pro" />
        </div>
        <div id="desc">
        <p>{props.name}</p>
        <p>{props.quantity} × €{props.price}</p>
        </div>
    </div>
  )
}

export default HoverProduct