import React from 'react';
import { Cards } from '../cards-re/cards';
import './cardlist.css'

export const Cardlist= Props => {
    return (
        <div className="cardlist">
        {Props.monster.map(monster =>(
            <Cards key={monster.id} monster={monster}/>
          ))}
        </div>
    );
}