import React from 'react';
import Card from './Card/Card';

const cards  =  (props)=> {
    console.log(props.cards)
    return (
        props.cards.map(card => {
            return           <Card
            name = {card.name}/>
        })
       
    )
}

export default cards;