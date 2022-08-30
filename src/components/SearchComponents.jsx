import styled from "styled-components";



const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    color: #343434;

    h5
    {
        font-weight: normal;
        font-size: 1.2rem;
        margin-bottom: 0.25rem;
    }
`;

const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #343434;
    
    h4
    {
        font-size: 1.6rem;
    }
`;

const DateBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    border: solid #343434 4px;
    border-radius: 10px;
    background-image: linear-gradient(110.6deg, rgba(184, 142, 252, 0.4) 2.2%, rgba(104, 119, 244, 0.4) 100.2%);
    position: relative;
    box-sizing: border-box;

    div
    {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        padding: 0.5rem 0;
        background-image: none;
        height: auto;
        width: 12.5%;
    }

    div.active
    {
        background-image: linear-gradient(110.6deg, rgba(184, 142, 252, 0.4) 2.2%, rgba(104, 119, 244, 0.4) 100.2%);
    }

    div:hover
    {
        background-image: linear-gradient(110.6deg, rgba(184, 142, 252, 0.2) 2.2%, rgba(104, 119, 244, 0.2) 100.2%);
    }
`;

const Weather = styled.div`
    color: #343434;
    
    h6
    {
        font-size: 1rem;
        margin-bottom: 0.25rem;
    }
    
    .header
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        div
        {
            display: flex;
            flex-direction: column;
            width: 50%;
            justify-content: center;
            align-items: center;
            padding: 0 8px;
        }

        img
        {
            width: 80px;
            height: 80px;
        }
    }

    .main
    {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 1rem;

        div
        {
            display: flex;
            flex-direction: column;
            padding: 0 1rem;
            margin: 0.25rem;
        }
    }
`;


export { Wrapper, DataWrapper, DateBar, Weather };