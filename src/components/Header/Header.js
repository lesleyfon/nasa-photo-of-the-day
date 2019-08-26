import React from 'react';
import NasaLogo from './NasaLogo';
import Links from './HeaderLinks';





const Header = ()=>{
    const headerStyles = {
        width: '100%',
        height: '50px',
        background: 'grey',
        top: '0px',
        left: '0px',
        right: '0px',
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        aligntContent : 'center'
    }
    return (
        <div style={headerStyles}>
            <NasaLogo />
            <Links />
        </div>
    )
}


export default Header;