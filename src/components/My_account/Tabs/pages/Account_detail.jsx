import React, { useContext, useState } from 'react'
import "../../Css/Account_detail.css";
import { UserContext } from '../../../../UserContext';
const Account_detail = () => {

    const { userDetails } = useContext(UserContext)

    const [firstName, setfirstName] = useState(userDetails.FirstName)
    const [customerNumber, setcustomerNumber] = useState(userDetails.No)
    const [secondName, setsecondName] = useState(userDetails.LastName)
    const [country, setcountry] = useState(userDetails.CountryRegionCode)
    const [address, setAddress] = useState(userDetails.Address1 + " " + userDetails.Address2)
    const [city, setCity] = useState(userDetails.City)
    const [state, setState] = useState(userDetails.State)
    const [postalCode, setPostalCode] = useState(userDetails.PostalCode)
    const [phone, setPhone] = useState(userDetails.Phone)
    const [email, setEmail] = useState(userDetails.Email)

    return (
        <div className='container'>
            <div className="form my-5">
                <form action="">
                    {
                        console.log(userDetails)
                    }

                    <div className="form-group name">
                        <label For="name">First name *</label>
                        <input type="text" className="form-control" id="name" value={firstName} onChange={
                                    (e) => {
                                        setfirstName(e.target.value);
                                    }}/>
                    </div>
                    <div className="form-group name">
                        <label For="lname">Last name *</label>
                        <input type="text" className="form-control" id="lname" value={secondName} onChange={
                                    (e) => {
                                        setsecondName(e.target.value);
                                    }} />
                    </div>
                    <div className="form-group name">
                        <label For="dname">Display name *</label>
                        <input type="text" className="form-control" id="dname" value={firstName} onChange={
                                    (e) => {
                                        setfirstName(e.target.value);
                                    }}/>
                    </div>
                    <div className='py-2'>
                        <p>This will be how your name will be displayed in the account section and in reviews</p>
                    </div>
                    <div className="form-group name">
                        <label For="email">Email address *</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={
                                    (e) => {
                                        setEmail(e.target.value);
                                    }} />
                    </div>
                    <div className='my-3'>
                        <h4>Password change</h4>
                        
                    </div>
                    <div className="form-group name">
                        <label For="ppass">Current password (leave blank to leave unchanged)</label>
                        <input type="password" className="form-control" id="ppass" />
                    </div>
                    <div className="form-group name">
                        <label For="npass">New password (leave blank to leave unchanged)</label>
                        <input type="password" className="form-control" id="npass" />
                    </div>
                    <div className="form-group name">
                        <label For="cpass">Confirm new password</label>
                        <input type="password" className="form-control" id="cpass" />
                    </div>
                    
                    <div className="form-group my-4 mx-2">
                        <button type="submit" className="custom-btn ">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Account_detail