import React from 'react';

const Jumbotron= (props)=>{
    const jumbotronStyles = {
        width: '1280px',
        height: '768px',
        marginTop: '5px',

    }
    const pStyles = {
        background: '#ffffff',
     
    }
    return(
        <div>
            <div>
                <img src = {props.apod.url} style={jumbotronStyles} />
            </div>
            <div style = {pStyles}>
                <p>{props.apod.explanation}</p>
            </div>
        </div>
    )
}





export default Jumbotron;