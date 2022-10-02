import React from "react";
import Navbar from "../Components/Navbar";
import Eventdcontainer from "../Components/Eventdcontainer";

import './Home.css'
const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="h-container">
                <div className="head">
                    <span className="fear-less">FEAR LESS</span>
                    <br></br>
                    <span className="save-date">Save the date! Our next event on</span>
                    <span className="date">06th November 2022</span>
                </div>
                <Eventdcontainer/>
            </div>
        </>
    )
}

export default Home