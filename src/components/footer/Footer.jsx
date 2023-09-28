import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
    <div className="footer">
        <div className="container">
            <div className="top">
                <div className="item">
                    <h2>Categories</h2>
                    <span>Graphics & Design</span>
                    <span>Programming & Tech</span>
                    <span>Data</span>
                    <span>Photography</span>
                </div>
                <div className="item">
                    <h2>About</h2>
                    <span>Press & News</span>
                    <span>Partnerships</span>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
                <div className="item">
                    <h2>Support</h2>
                    <span>Help & Support</span>
                    <span>Trust & Safety</span>
                    <span>Selling on eduLance</span>
                    <span>Buying on eduLance</span>
                </div>
                <div className="item">
                    <h2>Community</h2>
                    <span>Customer Success Stories</span>
                    <span>Blog</span>
                    <span>Become a Seller</span>
                    <span>Community Standards</span>
                </div>
                <div className="item">
                    <h2>More From eduLance</h2>
                    <span>eduLance Business</span>
                    <span>eduLance Guides</span>
                    <span>Get Inspired</span>
                    <span>Learn</span>
                </div>
            </div>
        <hr />
        <div className="bottom">
        <div className="left">
            <h2>eduLance</h2>
            <span>© eduLance International Ltd. 2023</span>
        </div>
        <div className="right">
            <div className="social">
                <img src="/img/twitter.png" alt="" />
                <img src="/img/facebook.png" alt="" />
                <img src="/img/linkedin.png" alt="" />
                <img src="/img/pinterest.png" alt="" />
                <img src="/img/instagram.png" alt="" />
            </div>
        <div className="link">
            <img src="/img/language.png" alt="" />
            <span>English</span>
        </div>
        <div className="link">
            <img src="/img/coin.png" alt="" />
            <span>USD</span>
        </div>
        <img src="/img/accessibility.png" alt="" />
        </div>
        </div>
    </div>      
    </div>
    )
}

export default Footer