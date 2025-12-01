import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsap_icon from '../Assets/whatsapp_icon.png'
 
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
 
        <div className="footer-sections">
            <div className="footer-section">
                <h4>Company</h4>
                <p>Shopper Pvt. Ltd<br/>Building Better Shopping Experiences</p>
            </div>
            <div className="footer-section">
                <h4>Products</h4>
                <p>Men's Wear<br/>Women's Wear<br/>Accessories</p>
            </div>
            <div className="footer-section">
                <h4>Offices</h4>
                <p>Mumbai HQ<br/>Delhi Branch<br/>Bangalore Branch</p>
            </div>
            <div className="footer-section">
                <h4>About</h4>
                <p>Trusted since 2016<br/>ISO Certified<br/>Careers</p>
            </div>
            <div className="footer-section">
                <h4>Contact</h4>
                <p>+91 98765-43210<br/>info@shopper.com<br/>#23 Main St, Chennai</p>
            </div>
        </div>
 
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsap_icon} alt="" />
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @2025 - All Right Reserved</p>
        </div>
    </div>
  )
}
 
export default Footer