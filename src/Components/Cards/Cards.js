import React from 'react';
import Card from './Card/Card';

const cards  =  (props)=> {
    return (
        props.database.map(card => {
            return           <Card
            name = {card.name}/>
        })
       
    )
}

export default cards;