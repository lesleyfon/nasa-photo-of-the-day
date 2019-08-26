import React from 'react';
import logo from './../../img/logo2.jpg';
const Links= ()=>{
    const linksStyles= {
        width: '60%',
    }
    const liStyles ={
        display: 'flex',
        listStyleType: 'none',
        justifyContent:'space-between',
        alignItems: 'center',
        aligntContent : 'center',
        textDecoration:'none'

    }
    return(
        <div style={linksStyles}>
            <ul style ={liStyles}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                 <li><a href='#'>Query</a></li>
                <li><a href='#'>Likes</a></li>
                <li><a href='#'> Saved</a></li>
            </ul>
        </div>
    )
}





export default Links;