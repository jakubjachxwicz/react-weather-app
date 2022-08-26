import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { BsSunriseFill, BsSunsetFill } from 'react-icons/bs';
import styled from 'styled-components';



function Home() {
    const [weatherData, setWeatherData] = useState([]);


    useEffect(() => {
        if (!localStorage.getItem('defaultCity'))
        {
            localStorage.setItem('defaultCity', 'Nowy Sącz');
        }

        if (Cookies.get('sessionWeatherData'))
        {
            const jsonData = JSON.parse(Cookies.get('sessionWeatherData'));
            
            const city = localStorage.getItem('defaultCity');
            if (jsonData.city_name !== city)
            {
                fetchWeatherData();
            }
            else
            {
                setWeatherData(jsonData);
            }
        }
        else
        {
            fetchWeatherData();
        }
    }, []);
    
    
    const fetchWeatherData = async() => {
        const city = localStorage.getItem('defaultCity');

        const api = await fetch(`https://api.weatherbit.io/v2.0/current?key=${process.env.REACT_APP_API_KEY}&lang=pl&city=${city}`);
        const data = await api.json();


        Cookies.set('sessionWeatherData', JSON.stringify(data.data[0]));
        setWeatherData(data.data[0]);
    };
    

  
    return (
        <Wrapper>
            <h4>Aktualna prognoza pogody</h4>
            <CityWrapper>
                <h3>{weatherData.city_name}</h3>
            </CityWrapper>

            <Grid>
                <div className='temperatureDisplay left'>{weatherData.temp} &deg;C</div>
                <div className='temperatureDisplay right'>{weatherData.app_temp} &deg;C</div>

                <div>Ciśnienie</div>
                <div>{weatherData.pres} mb</div>

                <div>Zachmurzenie</div>
                <div>{weatherData.clouds} %</div>

                <div><BsSunriseFill /></div>
                <div>{weatherData.sunrise}</div>

                <div><BsSunsetFill /></div>
                <div>{weatherData.sunset}</div>
            </Grid>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
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
    }
`;

const CityWrapper = styled.div`
    background-color: pink;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 61.8%;
    position: relative;
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
`;

export default Home