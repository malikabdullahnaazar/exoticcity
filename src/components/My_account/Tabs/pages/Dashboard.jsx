import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { UserContext } from '../../../../UserContext'
const Dashboard = () => {

    const {setlogin} = useContext(UserContext)

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p>Hello <strong>admin</strong>  (not <strong>admin</strong> ? <Link onClick={()=>{
                        setlogin(false);
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