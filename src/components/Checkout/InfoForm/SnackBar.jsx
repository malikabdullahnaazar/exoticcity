import React from 'react'
import '../InfoForm/SnackBar.css';
import { Link } from 'react-router-dom';

function SnackBar(props) {
  return (
    <div className="snackBar">
        <h1>{props.snakbartitle}</h1>
        <Link to="/">Go To HomePage</Link>
    </div>
  )
}

export default SnackBar