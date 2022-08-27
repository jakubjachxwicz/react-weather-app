import styled from "styled-components";
import { AiOutlineHome, AiOutlineCalendar, AiOutlineSearch } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';



function Navbar() {
    const location = useLocation().pathname;
    
    const [subPage, setSubPage] = useState('home');

    useEffect(() => {
        switch (location)
        {
            case '/': setSubPage('home');
            break;

            case '/week': setSubPage('week');
            break;

            case '/search': setSubPage('search');
            break;

            case '/configure': setSubPage('configure');
            break;

            default: setSubPage('home');
        }
    }, [location]);

  
    return (
        <Wrapper>
            <NavLink to={'/'}>
                <AiOutlineHome className={subPage === 'home' ? 'active' : ''} />
            </NavLink>
            <NavLink to={'/week'}>
                <AiOutlineCalendar className={subPage === 'week' ? 'active' : ''} />
            </NavLink>
            <NavLink to={'/search'}>
                <AiOutlineSearch className={subPage === 'search' ? 'active' : ''} />
            </NavLink>
            <NavLink to={'/configure'}>
                <IoSettingsOutline className={subPage === 'configure' ? 'active' : ''} />
            </NavLink>
        </Wrapper>
  )
}



const Wrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 0;
    height: 60vh;
    justify-content: center;
    margin-left: 20px;
    z-index: 420;

    svg
    {
        margin: 16px 4px;
        padding: 8px;
        font-size: 3.5rem;
        background: #343434;
        color: white;
        border-radius: 50%;
        cursor: pointer;
        box-sizing: border-box;
    }

    svg.active
    {
        border: 4px solid #343434;
        color: #343434;
        background: linear-gradient(110.6deg, rgb(184, 142, 252) 2.2%, rgb(104, 119, 244) 100.2%);
    }

    @media (max-width: 1007px)
    {
        flex-direction: row;
        top: 0;
        position: sticky;
        height: auto;
        justify-content: space-evenly;
        margin-left: 0;

        svg
        {
            font-size: 4.5rem;
        }
    }
`;

export default Navbar