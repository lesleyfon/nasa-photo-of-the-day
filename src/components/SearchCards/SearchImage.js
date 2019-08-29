import React from 'react';


const SearchImage = props =>{
    const imgStyles = {
        width: '100%',
        height: '250px',
        background: 'red'

        }
    return (
            <img src = {props.src} style={imgStyles}/>
    )
}

export default SearchImage;