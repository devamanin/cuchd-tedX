import React from "react";
import logo from '../Assests/logow.png'
import './Logo.css'
const Logo = () => {
    return (
        <div className="logo-container">
            <div className="img-container">
                <img src={logo} alt="Logo" className="logo"></img>
            </div>
        </div>
    )
}

export default Logo