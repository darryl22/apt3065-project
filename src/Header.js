import React from "react";
import searchlogo from "./images/searchlogo.png"
import "./headerstyles.css"

function Header() {
    return(
        <nav className="header">
            <h1 className="header-title">Restaurant Review App</h1>
            <div className="search">
                <p>search</p>
                <img className="search-logo" src={searchlogo} alt="search logo" />
            </div>
        </nav>
    )
}

export default Header