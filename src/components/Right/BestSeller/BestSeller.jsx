import React from 'react';
import CardComponent from '../CardComponent/CardComponent';
import './BestSeller.css';
import pic1 from '../../../Static/Images/pic1.png';
import pic2 from '../../../Static/Images/pic2.jpg';
import pic3 from '../../../Static/Images/pic3.jpg';
import pic4 from '../../../Static/Images/pic4.jpg';
import ViewAll from '../ViewAllComponent/ViewAll';

function BestSeller() {
  return (
    <div className="bestSeller">
        <div className="bestSellerHeading">
        <div className="bestSellerText">
            <h3>BEST SELLERS</h3>
            <p>Do not miss the current offers until the end of March.</p>
        </div>
            <ViewAll/>
        </div>
        <div className="bestSellerCrousel">
            <div className="prevButton">
            <p>&#8249;</p>
            </div>
            <div className="bestSellerCards">
                <CardComponent pic={pic1} />
                <CardComponent pic={pic2} />
                <CardComponent pic={pic3} />
                <CardComponent pic={pic4} />
            </div>
            <div className="nextButton">
            <p>&#8250;</p>
            </div>
        </div>
    </div>
  )
}

export default BestSeller