import React from "react";
import  './Footer.css'
import footer_logo from '../Navbar/Assests/logo_big.png'
import instagram_icon from '../Navbar/Assests/instagram_icon.png'
import pintester_icon from '../Navbar/Assests/pintester_icon.png'
import whatsapp_icon from '../Navbar/Assests/whatsapp_icon.png'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="footer logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="instaragm_icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="instaragm_icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="instaragm_icon" />
                </div>
            </div>
            <div className="footer-copyright">
                 <hr />
                 Copy Right @ 2023 - All Rights Recived 
            </div>
        </div>
    )
}
export default Footer