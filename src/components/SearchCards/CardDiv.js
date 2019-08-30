import React from 'react';
import SearchImage from './SearchImage';
import SearchInfo from './SearchInfo';
import { prototype } from 'events';

const CardsDiv= props =>{
   
    const eachCard = {
        width:'40%',
        border: '1px solid lightgrey',
        borderRadius: '5px',
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '2px 2px 2px lightgrey',
        marginBottom: '20px',

    }
    return (
        <>
            {props.searchResult.map((item, i)=>{
                return(
                    <div style ={eachCard} key={i}>
                        <SearchImage 
                        key={i}
                        src = {item.links[0].href && item.links[0].href}
                        />
                        <SearchInfo 
                            key={i +'s'}
                            searchInfo = {item.data}
                        />
                    </div>
                )
            })} 
        </>
    )
}

export default CardsDiv;
