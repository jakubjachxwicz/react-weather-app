import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { BsSunriseFill, BsSunsetFill } from 'react-icons/bs';
import { HiRefresh } from 'react-icons/hi';
import { Wrapper, CityWrapper, Grid, RefreshButton, Footer } from './../components/HomeComponents';
import { Link } from 'react-router-dom';



function Home() {
    const [weatherData, setWeatherData] = useState([]);
    const [weatherImage, setWeatherImage] = useState('/unknown.png');


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
    
    
    useEffect(() => {
        if (weatherData.weather)
        {
            // console.log(weatherData);
            // console.log(weatherData.weather.code);
            
            const code = weatherData.weather.code;
            // const code = 750;

            if (code >= 200 && code < 300) setWeatherImage('/thunder.png');
            else if (code < 400) setWeatherImage('/drizzle.png');
            else if (code < 600) setWeatherImage('/rain.png');
            else if (code < 700) setWeatherImage('/snow.png');
            else if (code < 800) setWeatherImage('/mist.png');
            else if (code < 803) setWeatherImage('/sunny.png');
            else if (code === 803 || code === 804) setWeatherImage('/cloudy.png');
            else setWeatherImage('/unknown.png');
        }
    }, [weatherData]);
    
    
    
    const fetchWeatherData = async() => {
        const city = localStorage.getItem('defaultCity');

        const api = await fetch(`https://api.weatherbit.io/v2.0/current?key=${process.env.REACT_APP_API_KEY}&lang=pl&city=${city}`);
        const data = await api.json();


        Cookies.set('sessionWeatherData', JSON.stringify(data.data[0]));
        setWeatherData(data.data[0]);
    };
    

    const replaceDots = (temperature) => {
        if (temperature)
        {
            const temp = temperature.toString();
        
            if (temp.search('.') !== -1) return temp.replace('.', ',');
            return temp;
        }
        else return '';
    };

    const convertTime = (time, today, timezone) => {
        if (time)
        {
            let date = `${today.substring(0, today.search(':'))} ${time} GMT`;
            const d = new Date(date);

            return d.toLocaleString("pl-PL", {timeZone: timezone, timeStyle: "short"});
        } else return '';
    };

    const refreshWeather = () => {
        Cookies.remove('sessionWeatherData');
        fetchWeatherData();
    };

  
    return (
        <Wrapper>
            <h4>Aktualna prognoza pogody</h4>
            <CityWrapper style={{ backgroundImage: `url('${weatherImage}')` }}>
                <h3>{weatherData.city_name}</h3>
            </CityWrapper>

            <Grid>
                <div className='temperatureDisplay left'>{replaceDots(weatherData.temp)} &deg;C</div>
                <div className='temperatureDisplay right'>{replaceDots(weatherData.app_temp)} &deg;C</div>

                <div>Ciśnienie</div>
                <div>{weatherData.pres} mb</div>

                <div>Zachmurzenie</div>
                <div>{weatherData.clouds} %</div>

                <div><BsSunriseFill /></div>
                <div>{convertTime(weatherData.sunrise, weatherData.datetime, weatherData.timezone)}</div>

                <div><BsSunsetFill /></div>
                <div>{convertTime(weatherData.sunset, weatherData.datetime, weatherData.timezone)}</div>
            </Grid>

            <RefreshButton onClick={refreshWeather}>
                <HiRefresh />
                <p>Odśwież</p>
            </RefreshButton>

            <Footer>
                Aby zmienić miasto, dla którego wyświetlane są informacje pogodowe, przejdź do <Link to={'/configure'}>ustawień</Link>
            </Footer>
        </Wrapper>
    )
}


export default Home