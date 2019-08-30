import React from 'react';
import NasaLogo from './NasaLogo';
import Search from './Search';
import { conditionalExpression } from '@babel/types';





const Header = (props)=>{
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
            <Search 
            setSearchInput = {props.setSearchInput}
            handleChange = {props.handleChange}
            searchInput = {props.searchInput}
            />
        </div>
    )
}


export default Header;