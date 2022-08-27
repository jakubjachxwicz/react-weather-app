import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    h4
    {
        font-size: 2rem;
        text-align: center;
    }

    h3
    {
        font-size: 3rem;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        bottom: 0;
        right: 0;
        transform: translate(-50%, -50%);
        text-align: center;
        height: auto;
        width: 80%;
    }
`;

const CityWrapper = styled.div`
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    background-size: cover;
    padding-bottom: 61.8%;
    border-radius: 30px;
    position: relative;
    letter-spacing: 0.2rem;

    ::after
    {
        content: '';
        position: absolute;
        width: 100%;
        height: 40%;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
        border-radius: 30px;
        background-size: cover;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;

    div
    {
        padding: 1rem 1.6rem;
        text-align: center;
        font-size: 1.6rem;
        color: #343434;
    }

    svg
    {
        font-size: 1.8rem;
    }

    .temperatureDisplay
    {
        font-weight: bold;
        font-size: 1.8rem;
        position: relative;
    }

    .temperatureDisplay::after
    {
        position: absolute;
        font-size: 1.6rem;
        content: '';
        width: 100%;
        height: auto;
        left: 0;
        top: 100%;
        color: white;
        background: rgba(23, 23, 23, 0.9);
        border-radius: 20px;
        line-height: 4rem;
        font-weight: normal;
        visibility: hidden;
        opacity: 0;
        transition: display 0s, opacity 0.5s ease-out;
    }

    .temperatureDisplay:hover:after
    {
        visibility: visible;
        opacity: 1;
    }

    .left::after
    {
        content: 'Temperatura';
    }

    .right::after
    {
        content: 'Temperatura odczuwalna';
    }

    @media (max-width: 425px)
    {
        .temperatureDisplay
        {
            font-size: 1.6rem;
        }
    }
`;

const RefreshButton = styled.button`
    margin-top: 2rem;
    display: flex;
    outline: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-image: linear-gradient(110.6deg, rgb(184, 142, 252) 2.2%, rgb(104, 119, 244) 100.2%);
    border: solid 4px #343434;
    color: #343434;
    border-radius: 20px;
    cursor: pointer;

    :hover
    {
        background-image: linear-gradient(110.6deg, rgb(104, 119, 244) 100.2%, rgb(184, 142, 252) 2.2%);
    }

    p
    {
        font-size: 1.6rem;
        font-weight: bold;
    }

    svg
    {
        font-size: 2rem;
        padding-right: 1rem;
    }
`;

const Footer = styled.div`
    text-align: center;
    font-size: 1.6rem;
    margin-top: 3rem;

    a
    {
        text-decoration: none;
    }

    a:hover
    {
        text-decoration: underline;
    }
`;


export { Wrapper, CityWrapper, Grid, RefreshButton, Footer };