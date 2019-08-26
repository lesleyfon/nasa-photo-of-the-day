import React from 'react';
import logo from './../../img/logo2.jpg';
const NasaLogo = ()=>{
    const nasaLogoStyles= {
        width: '15%',
        marginLeft: '200px'
    }
    return(
        <>
            <img src={logo} alt = 'Nasa Logo' style ={nasaLogoStyles}/>
        </>
    )
}





export default NasaLogo;