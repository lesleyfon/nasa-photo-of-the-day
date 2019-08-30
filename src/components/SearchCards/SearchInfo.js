import React, {useState} from 'react';
import More from './More'
import styled from 'styled-components'


const SearchInfoStyles = styled.div`
    border-radius: 10px;
    background-color: white;
    position: relative;
    overflow: hidden;
    .someMore{
        cursor: pointer;
    }
`;
const SearchInfo = props =>{
    const [toggleMore, setToggleMore ] = useState(false)
    return (
           <SearchInfoStyles>
               <h2>{props.searchInfo[0].title}</h2> 
                {
                    toggleMore ? 
                    <a className='someMore' onClick={()=>{setToggleMore(!toggleMore) }} >Less</a> :
                    <a className='someMore' onClick={()=>{setToggleMore(!toggleMore) }}>More</a>
                        
                }
               {
                   toggleMore ?
                    <More 
                    date = {props.searchInfo[0].date_created}
                    center = {props.searchInfo[0].center}
                    location = {props.searchInfo[0].location}
                    description = {props.searchInfo[0].description}

                   /> 
                   : 
                   null
               }
           </SearchInfoStyles>
    )
}

export default SearchInfo;