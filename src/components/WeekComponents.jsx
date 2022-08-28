import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    h4
    {
        font-size: 1.6rem;
        text-align: center;
        margin: 0;
    }

    h3
    {
        font-size: 2rem;
    }
`;

const WeekWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Day = styled.div`
    padding: 1rem;
    padding-right: 0;
    border: solid 4px #343434;
    margin: 1rem 0.5rem;
    color: #343434;
    border-radius: 20px;
    background-image: linear-gradient(110.6deg, rgba(184, 142, 252, 0.4) 2.2%, rgba(104, 119, 244, 0.4) 100.2%);

    h5
    {
        margin: 0 0 1rem 0;
        font-size: 1.2rem;
    }

    h6
    {
        margin: 0 1rem 0 0;
        font-size: 1rem;
    }

    p
    {
        margin-top: 0;
    }

    @media (max-width: 375px)
    {
        width: 75%;
    }
`;

const TemperatureContainer = styled.div`
    display: grid;
    grid-template-columns: auto;
    margin-bottom: 1rem;

    p
    {
        grid-column: 1;
        margin: 0.5rem 0;
    }

    div
    {
        grid-column: 2;
        grid-row: 1 / span 2;
        text-align: right;
        margin-left: 1rem;
    }

    img
    {
        width: 80px;
        height: 80px;
    }

    .temperature
    {
        position: relative;
    }

    .temperature::after
    {
        position: absolute;
        font-size: 1rem;
        content: '';
        width: 100%;
        height: auto;
        left: 0;
        top: 100%;
        color: white;
        background: rgba(23, 23, 23);
        border-radius: 20px;
        line-height: 4rem;
        font-weight: normal;
        visibility: hidden;
        opacity: 0;
        transition: display 0s, opacity 0.5s ease-out;
        z-index: 24;
        text-align: center;
    }

    .temperature:hover:after
    {
        visibility: visible;
        opacity: 1;
    }

    .min::after
    {
        content: 'Min';
    }

    .max::after
    {
        content: 'Max';
    }
`;


export { Wrapper, WeekWrapper, Day, TemperatureContainer };