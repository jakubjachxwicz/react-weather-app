import styled from "styled-components";



function Footer() {
  return (
    <Wrapper>
        <p>Made by me</p>
        <p>Used <a target="_blank" href={'https://www.weatherbit.io/api'}>Weatherbit.io</a> to deliver weather data</p>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    background-color: #000000;
    color: white;
    height: 100px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: flex-end;
    justify-content: center;
    width: 100%;

    a
    {
      text-decoration: none;
    }

    p
    {
        margin: 4px 12px;
    }
`;

export default Footer