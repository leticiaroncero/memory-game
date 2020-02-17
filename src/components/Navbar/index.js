import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div className="navbar">
            <ul>
                <li className="brand">Clicky Game</li>
                <li>Click an image to begin!</li>
                <li>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>

        </div>
    );
}

export default Navbar;