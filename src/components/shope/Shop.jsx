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
   <div className="col-md-3 mb-4">
     <Sleft />
   </div>
   <div className="col-md-9">
     <Sright />
   </div>
 </div>
 
    
    
    </>
  )
}

export default Shope