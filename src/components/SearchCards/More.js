import React from 'react';

const More = props =>{

    return (
        <>
            <h5>Date: {props.date}</h5>
            <h5>Center: {props.center}</h5>
            <h5>Location: {props.location}</h5>
            <p>{props.description}</p>
        </>
    )
}

export default More