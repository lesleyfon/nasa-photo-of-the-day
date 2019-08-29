import React from 'react';


const SearchInfo = props =>{
    const imgStyles = {
        width: '100%',
        }
    return (
           <div>
               <h2>{props.searchInfo[0].title}</h2>
               <h5>Date: {props.searchInfo[0].date_created}</h5>
               <h5>Center: {props.searchInfo[0].center}</h5>
               <h5>Location: {props.searchInfo[0].location}</h5>
               <p>{props.searchInfo[0].description}</p>
           </div>
    )
}

export default SearchInfo;