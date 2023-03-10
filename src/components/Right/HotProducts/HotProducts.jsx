import * as React from 'react';
import ViewAll from '../ViewAllComponent/ViewAll';
import './HotProducts.css';
import pic2 from'../../../Static/Images/pic2.jpg';

function HotProducts() {
    return (
        <div className="hotProducts">
            <div className="hotProductsHeading">
                <div className="hotProductsText">
                    <h2>HOT PRODUCT FOR THIS WEEK</h2>
                    <p>Dont miss this opportunity at a special discount just for this week.</p>
                </div>
                <ViewAll />
            </div>
            <div className="hotProductsBody">
                <img src={pic2} alt="pro" />
                <div className="hotProductDesc">
                    <h5>12.00</h5>
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing.</h6>
                    <p>IN STOCK</p>
                    <div className="slider">
                        <span></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HotProducts