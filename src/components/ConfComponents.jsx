import styled from "styled-components";



const Wrapper =styled.div`
    display: flex;
    flex-direction: column;

    p, h4
    {
        text-align: center;
    }

    p
    {
        font-size: 1.6rem;
    }

    h4
    {
        font-size: 1.8rem;
        margin-top: 0;
    }
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    input, button
    {
        color: #343434;
        border-radius: 20px;
        background-image: linear-gradient(110.6deg, rgb(184, 142, 252) 2.2%, rgb(104, 119, 244) 100.2%);
        border: solid 4px #343434;
        outline: none;
    }
    
    input
    {
        margin: 10px;
        padding: 1rem 2rem;
        font-size: 2rem;
    }

    button
    {
        margin: 10px;
        font-size: 2rem;
        padding: 1rem;
        cursor: pointer;
    }

    @media (max-width: 620px)
    {
        input
        {
            width: 80%;
        }
    }
`;

const ResultCityWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    font-size: 2rem;
    border: solid 4px #343434;
    border-radius: 20px;
    background-image: linear-gradient(110.6deg, rgba(184, 142, 252, 0.4) 2.2%, rgba(104, 119, 244, 0.4) 100.2%);
    color: #343434;

    .country
    {
        padding: 0 20px;
        border-right: solid 4px rgba(34, 34, 34, 0.5);
        height: 100%;
        line-height: 5rem;
    }

    .city
    {
        padding: 10px;
    }

    button
    {
        font-size: 2rem;
        color: #4E944F;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        padding: 10px 20px;
        border-left: solid 4px rgba(34, 34, 34, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    span
    {
        color: #343434;
        font-size: 1.6rem;
    }
`;


export { Form, Wrapper, ResultCityWrapper };