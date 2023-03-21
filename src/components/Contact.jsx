import React from 'react'
import "./css/Contact.css";
import { MdLocationOn } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import Layout from "./Layout"
const Contact = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-sm-12 text-center">
            <h2>Get In Touch</h2>
            <p>Have any questions? We'd love to hear from you</p>
          </div>
        </div>

      </div>
      <div className="container-fluid ">
        <div className="row d-flex align-items-center justify-content-center ">
          <div className="col-sm-3 mx-5 text-center justify-content-center bg-custom border d-flex align-items-center align-items-center ">
            <div >
              <div className='py-3'><MdLocationOn size={45} color="#233A95" /> </div>
              <div><strong>Av. de l'Expansion 1</strong></div>
              <div>4432 Alleur</div>
            </div>
          </div>
          <div className="col-sm-3 mx-5 text-center justify-content-center bg-custom border d-flex align-items-center align-items-center ">
            <div >
              <div className='py-3'><TbPhoneCall size={45} color="#233A95" /> </div>
              <div><strong>+32 485 00 14 00</strong></div>
              <div>Call us here</div>
            </div>
          </div>
          <div className="col-sm-3 mx-5 text-center justify-content-center bg-custom border d-flex align-items-center align-items-center ">
            <div >
              <div className='py-3'><FiMail size={45} color="#233A95" /> </div>
              <div><strong>info@exoticcity.be</strong></div>
              <div>Contact through email</div>
            </div>
          </div>

        </div>
      </div>
      <div className="container-fluid my-5">
  <div className="row d-flex align-items-center justify-content-start">
    <div className="col-lg-11 col-md-10 col-sm-12 mx-auto justify-content-center border align-items-start custom-div">
      <div className="text-center my-5">
        <h1>Contact Us</h1>
        <div>
          Email us with any question or call us at +32 485 00 14 00. We would be happy to answer your questions and set up a meeting with you.
        </div>
        <div>4432 Alleur</div>
        <hr />
      </div>
      <div className="form my-5">
        <form action="">
          <div className="form-group row">
            <div className="col-md-6 nameemail">
              <label For="name">Your name *</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="col-md-6 nameemail">
              <label For="email">Your email *</label>
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <div className="form-group subject">
            <label For="subject">Subject *</label>
            <input type="text" className="form-control" id="subject" />
          </div>
          <div className="form-group message">
            <label For="message">Your message</label>
            <textarea className="form-control" id="message" rows="5"></textarea>
          </div>
          <div className="form-group my-4 mx-2">
            <button type="submit" className="custom-btn ">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>




    </Layout>
  )
}

export default Contact