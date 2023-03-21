import React from 'react'
import { Link } from "react-router-dom"
const Address = () => {
    return (
        <div>
            <div className="container">
            <div>
                The following addresses will be used on the checkout page by default.
            </div>
                <div className="row my-4">
                    <div className="col-md-6">
                        <h5>BILLING ADDRESS</h5>
                        <hr />

                        <ul>
                            <Link>Edit</Link>
                            <li className='text-black'>Ammar Zulfiqar</li>
                            <li className='text-black'>Zerodegree</li>
                            <li className='text-black'>F11 Markaz</li>
                            <li className='text-black'>ewrwe rwe rew rw</li>
                            <li className='text-black'>Islamabad</li>
                            <li className='text-black'>Punjab</li>
                            <li className='text-black'>46000</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h5>SHIPPING ADDRESS</h5>
                        <hr />
                        <ul>
                            <Link>Add</Link>
                            <li className='text-black'>You have not set up this type of address yet.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Address