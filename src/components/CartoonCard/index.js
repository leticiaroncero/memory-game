import React from "react";
import "./style.css";

function CartoonCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image}
                    alt={props.alt}
                    onClick={() => props.handleScore(props.id)} />
            </div>

        </div>
    );
}

export default CartoonCard;