import React from 'react';
import CardsDiv from './CardDiv';

const Cards = props =>{
    const cardsStyles = {
        display :"flex",
        justifyContent: 'space-between',
        width: '980px',
        flexWrap: 'wrap',
        margin: '0 auto'
    }
    return (
        <div style = {cardsStyles}>
          <CardsDiv 
          searchResult = {props.searchResults}
          />
        </div>
    )
}

export default Cards;
