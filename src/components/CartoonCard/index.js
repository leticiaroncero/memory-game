import React from "react";
import "./style.css";

function CartoonCard(props) {
    console.log(props);
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} />
            </div>

        </div>
    );
}

export default CartoonCard;