import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { UserContext } from '../../../../UserContext'
const Dashboard = () => {

    const {setlogin, setUserDetails} = useContext(UserContext)

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p>Hello <strong>admin</strong>  (not <strong>admin</strong> ? <Link to="/"onClick={()=>{
                        localStorage.setItem('login', false);
                        setUserDetails({});
                        setlogin(false)
                        localStorage.setItem('userDetails',JSON.stringify([]));
                        
                    }}>Log out</Link> )</p>  </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p>        From your account dashboard you can view your <Link>recent orders</Link>, manage your <Link>shipping and billing addresses</Link>, and <Link>edit your password and account details</Link>.
                    </p>  </div>
            </div>
        </div>


    )
}

export default Dashboard