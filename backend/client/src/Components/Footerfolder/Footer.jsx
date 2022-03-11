import React from 'react';
import './Footer.css';
import playstore from '../static/googleplaystore.png'
import apple from '../static/apple.png'

const Footer = () => {
    return (
        <div className='FooterContainer'>

            <div className="FooterDodoo">
                <ul className="FooterDodooContainer">
                    <li className="FooterDodooList FooterListHeader">Dodoo</li>
                    <li className="FooterDodooList"><a href="/">About us</a></li>
                    <li className="FooterDodooList"><a href="/">Privacy Policy</a></li>
                    <li className="FooterDodooList"><a href="/">Terms and Conditions</a></li>
                    <li className="FooterDodooList"><a href="/">Careers at Dodoo</a></li>
                </ul>
            </div>
            <div className="FooterHelp ">
                <ul className="FooterHelpContainer">
                    <li className="FooterHelpList FooterListHeader">Help</li>
                    <li className="FooterHelpList"><a href="/">FAQs</a></li>
                    <li className="FooterHelpList"><a href="/">Contact Us</a></li>
                    <li className="FooterHelpList"><a href="/">E-Invoice Compliance for Dodoo Vendors</a></li>
                </ul>
            </div>
            <div className="FooterSocialMaster">
                <div className="FooterDownload">
                    <ul className="FooterDownloadContainer">
                        <li className="FooterDownloadList FooterListHeader">Download Our App</li>
                        <li className="FooterDownloadList">
                            <a href="/"><img src={playstore} alt="" /></a>
                            </li>
                        <li className="FooterDownloadList">
                            <a href="/"><img src={apple} alt="" /></a>
                            </li>
                    </ul>
                </div>
                <div className="FooterSocial">
                <div className=" FooterListHeader">Get Social With us</div>
                    <ul className="FooterSocialContainer">
                        
                        <li className="FooterSocialList"><a href="/"><span><i className="fab fa-facebook-square"></i></span></a></li>
                        <li className="FooterSocialList"><a href="/"><span><i className="fab fa-instagram"></i></span></a></li>
                        <li className="FooterSocialList"><a href="/"><span><i className="fab fa-linkedin-in"></i></span></a></li>
                        <li className="FooterSocialList"><a href="/"><span><i className="fab fa-twitter"></i></span></a></li>
                        <li className="FooterSocialList"><a href="/"><span><i className="fab fa-pinterest"></i></span></a></li>
                    </ul>
                </div>
            </div>

        </div>
          
          
          
          
          
    )
}

export default Footer