import React from 'react';
import './CustomerComment.css';
import shakeel from '../../../Static/Images/shakeel.jpg';

function CustomerComment() {
  return (
    <div className="customerComment">
        <h3>Customer Comment</h3>
        <div className="customerCommentBody">
            <h5>The Best Marketplace</h5>
            <p>I've literally never had a bad experience and will continue to shop here as long as they are open.</p>
            <div className="custInfo">
                <img src={shakeel} alt="shakeel" />
                <p>Muhammad S. <br></br><span>Sales Manager</span></p>
            </div>
        </div>
    </div>
  )
}

export default CustomerComment