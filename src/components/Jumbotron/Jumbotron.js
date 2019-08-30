import React from 'react';
import styled from 'styled-components';
const JumbotronStyles = styled.div`
    width: 980px;
    margin: 0 auto;
`;
const Jumbotron= (props)=>{
    const imageStyles = {
        width: '100%',
        height: '668px',
        marginTop: '5px',
    }
    const pStyles = {
        background: '#ffffff',
     
    }
    return(
        <JumbotronStyles>
            <div>
                <img src = {props.apod.url} style={imageStyles} />
            </div>
            <div style = {pStyles}>
                <p>{props.apod.explanation}</p>
            </div>
        </JumbotronStyles>
    )
}





export default Jumbotron;