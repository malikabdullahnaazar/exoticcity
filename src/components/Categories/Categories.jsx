import React from 'react';
import './Categories.css';
import alimentation from '../../Static/Images/alimentation.jpg';
import haircare from '../../Static/Images/haircare.jpg';
import bodycare from '../../Static/Images/bodycare.jpg';
import childrencare from '../../Static/Images/childrencare.jpg';
import mencare from '../../Static/Images/mencare.jpg';
import cosmetique from '../../Static/Images/cosmetique.jpg';
import drinks from '../../Static/Images/drinks.jpg';
import freshfood from '../../Static/Images/freshfood.jpg';
import frozenfood from '../../Static/Images/frozenfood.jpg';
import preservedfood from '../../Static/Images/preservedfood.jpg';
import meches from '../../Static/Images/meches.jpg';
import synthetichair from '../../Static/Images/synthetichair.jpg';
import humanhair from '../../Static/Images/humanhair.jpg';
import mixedhair from '../../Static/Images/mixedhair.jpg';
import accessories from '../../Static/Images/accessories.jpg';
import {Link} from 'react-router-dom'

function Categories() {
  return (
    <div className="categories">
        <div className="alimentation">
                <img src={alimentation} alt="alimentation" />
            <div>
              <Link to="/shop/DRINKS">  <img src={drinks} alt="drinks" /></Link>
              <Link to="/shop/FRESH FOOD">  <img src={freshfood} alt="freshfood" /></Link>
              <Link to="/shop/PRESERVED FOOD">  <img src={preservedfood} alt="preservedfood" /></Link>
              <Link to="/shop/FROZEN FOOD">  <img src={frozenfood} alt="frozenfood" /></Link>
          
            </div>
        </div>
        
        <div className="cosmetics">
                <img src={cosmetique} alt="cosmetique" />
            <div>
              <Link to="/shop/HAIR CARE"><img src={haircare} alt="haircare" /></Link>
              <Link to="/shop/BODY CARE"><img src={bodycare} alt="bodycare" /></Link>
              <Link to="/shop/CHILDREN CARE"><img src={childrencare} alt="childrencare" /></Link>
              <Link to="/shop/MEN CARE"><img src={mencare} alt="mencare" /></Link>
            </div>
        </div>
        <div className="meches">
                <img src={meches} alt="meches" />
        <div>
        <Link to="/shop/SYNTHETIC HAIR"><img src={synthetichair} alt="synthetichair" /></Link>
        <Link to="/shop/HUMAN HAIR"><img src={humanhair} alt="humanhair" /></Link>
        <Link to="/shop/MIXED HAIR"><img src={mixedhair} alt="mixedhair" /></Link>
        <Link to="/shop/ACCESSORIES"><img src={accessories} alt="accessories" /></Link>

            
            </div>
        </div>
    </div>
  )
}

export default Categories