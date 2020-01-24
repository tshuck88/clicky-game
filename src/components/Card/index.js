import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img id={props.id} alt={props.name} src={props.image} onClick={props.onClick} clicked={props.clicked}/>
            </div>
        </div>
    );
}

export default Card;