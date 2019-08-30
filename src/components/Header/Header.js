import React from 'react';
import NasaLogo from './NasaLogo';
import Search from './Search';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    width: 980px;
    margin: 0 auto
    display: flex;
    justify-content:space-between;
    align-items: center;
    alignt-content : center;
`;
const Header = (props)=>{
    const headerStyles = {
        width: '100%',
        height: '50px',

    }

    return (
        <div style={headerStyles}>
            <HeaderContainer>
                <NasaLogo />
                <Search 
                setSearchInput = {props.setSearchInput}
                handleChange = {props.handleChange}
                searchInput = {props.searchInput}
                />
            </HeaderContainer>
        </div>
    )
}


export default Header;