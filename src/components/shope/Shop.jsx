import React from 'react'
import Sheader  from "./ShopHeader";
import  Sleft  from "./ShopLeft";
import Sright  from "./ShopRight";
import 'bootstrap/dist/css/bootstrap.min.css';
const Shope = () => {
  return (
    <>
    <Sheader/>
    
  <div className="row">
    <div className="col-sm-3 ">
    <Sleft/>
    </div>
    <div className="col-sm-9">
     <Sright/>
    </div>
  </div>
    
    
    </>
  )
}

export default Shope