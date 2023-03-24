import React from 'react';
import './ContactMenu.css';
import { FiPhoneCall } from 'react-icons/fi';
import { GrFacebookOption } from 'react-icons/gr';
import { TiSocialLinkedin } from 'react-icons/ti';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

function ContactMenu() {
    return (
        <div className="contactMenu">
            <div className="phoneContact col-md-6">
                <p>
                    <span><FiPhoneCall style={{ height: '1.5rem', width: '1.5rem', padding: '0.4rem', border: '0.5px solid rgb(169, 169, 169)', borderRadius: '50%' }} /></span>
                    <div><strong>+324 228 04 00 </strong><span style={{ fontSize: 'smaller', color: 'rgb(169, 169, 169)' }} ><br></br>info@exoticcity.eu</span></div>
                </p>
            </div>
            <div className="socialMedias col-md-6  d-flex justify-content-end">
                <p><strong>Contact Us</strong> <span style={{ fontSize: 'smaller', color: 'rgb(169, 169, 169)' }}><br></br>Av. de l'Expansion 1 4432 Alleur</span></p>
                <p>
                    <span><GrFacebookOption style={{ height: '1.3rem', color: '#233a95', width: '1.3rem', padding: '0.2rem', border: '0.5px solid rgb(169, 169, 169)', borderRadius: '50%' }} /></span>
                    <span><TiSocialLinkedin style={{ height: '1.3rem', color: '#233a95', width: '1.3rem', padding: '0.2rem', border: '0.5px solid rgb(169, 169, 169)', borderRadius: '50%' }} /></span>
                    <span><AiOutlineInstagram style={{ height: '1.3rem', color: '#233a95', width: '1.3rem', padding: '0.2rem', border: '0.5px solid rgb(169, 169, 169)', borderRadius: '50%' }} /></span>
                    <span><AiOutlineWhatsApp style={{ height: '1.3rem', color: '#233a95', width: '1.3rem', padding: '0.2rem', border: '0.5px solid rgb(169, 169, 169)', borderRadius: '50%' }} /></span>
                </p>
            </div>
        </div>


    )
}

export default ContactMenu