import React from "react";
import resimage from "./images/restaurant1.jpg"
import "./reststyles.css"

function Restaurant() {
    return(
        <div className="res-container">
            <img src={resimage} alt="restaurant pic" className="res-image"/>
            <div className="res-details">
                <div>
                    <h1 className="res-name">Restaurant1</h1>
                    <p className="description">This is restaurant 1, it is located at xyz</p>
                </div>
                <p className="ratings">average ratings: 5.0</p>
            </div>
        </div>
    )
}

export default Restaurant