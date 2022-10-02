import React from "react";
import './Navbar.css'
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="nav-container">
            <Logo/>
            <div className="b-container">
                <div className="NavButton">
                    <div className="home-button">
                        <span>Home</span>
                    </div>
                </div>
                <div className="NavButton">
                    <div className="speaker-button">
                        <span>Speakers</span>
                    </div>
                </div>
                <div className="NavButton">
                    <div className="team-button">
                        <span>Teams</span>
                    </div>
                </div>
                <div className="NavButton">
                    <div className="about-button">
                        <span>About</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar