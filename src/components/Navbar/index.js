import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li className="brand">Clicky Game</li>
                <li>Click an image to begin!</li>
                <li>Score: | Top Score:</li>
            </ul>

        </div>
    );
}

export default Navbar;