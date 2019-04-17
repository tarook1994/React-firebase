import React from 'react';
import './Card.css'

const card = (props) => {
    return (
        <div className="div">
            <h1>{props.name}</h1>
        </div>
    )
}

export default card;