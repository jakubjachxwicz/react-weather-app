import styled from "styled-components";
import { AiOutlineHome, AiOutlineCalendar, AiOutlineSearch } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';



function Navbar() {
  return (
    <Wrapper>
        <AiOutlineHome />
        <AiOutlineCalendar />
        <AiOutlineSearch />
        <IoSettingsOutline />
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
        border: 2px solid #343434;
        color: #343434;
        background-color: white;
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