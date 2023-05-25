import React from 'react'
import '../InfoForm/SnackBar.css';
import { Link } from 'react-router-dom';

function SnackBar() {
  return (
    <div className="snackBar">
        <h1>Thanks For Your Order...</h1>
        <Link to="/">Go To HomePage</Link>
    </div>
  )
}

export default SnackBar