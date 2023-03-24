import './Procedure.css';
import React from 'react';
import {GrDocumentDownload} from 'react-icons/gr';
import {MdOutlineDeliveryDining} from 'react-icons/md';
import {WiTime5} from 'react-icons/wi';

function Procedure() {
  return (
    <div className="procedure">
        <p><GrDocumentDownload className='procedureIcons'  /> <span>Download the Bacola App to your Phone.</span></p>

        <p><MdOutlineDeliveryDining className='procedureIcons' /> <span>Order now so you dont miss the opportunities.</span></p>

        <p><WiTime5 className='procedureIcons' /> <span>Your order will arrive at your door in 15 minutes.</span></p>
    </div>
  )
}

export default Procedure