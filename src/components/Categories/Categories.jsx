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

function Categories() {
  return (
    <div className="categories">
        <div className="alimentation">
                <img src={alimentation} alt="alimentation" />
            <div>
            <img src={drinks} alt="alimentation" />
            <img src={freshfood} alt="alimentation" />
            <img src={preservedfood} alt="alimentation" />
            <img src={frozenfood} alt="alimentation" />
            </div>
        </div>
        
        <div className="cosmetics">
                <img src={cosmetique} alt="cosmetique" />
            <div>
            <img src={haircare} alt="cosmetics" />
            <img src={bodycare} alt="cosmetics" />
            <img src={childrencare} alt="cosmetics" />
            <img src={mencare} alt="cosmetics" />
            </div>
        </div>
        <div className="meches">
                <img src={meches} alt="meches" />
        <div>
            <img src={synthetichair} alt="meches" />
            <img src={humanhair} alt="meches" />
            <img src={mixedhair} alt="meches" />
            <img src={accessories} alt="meches" />
            </div>
        </div>
    </div>
  )
}

export default Categories