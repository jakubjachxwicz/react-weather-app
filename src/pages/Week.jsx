import { Wrapper, WeekWrapper, Day, TemperatureContainer } from './../components/WeekComponents';
import { useState, useEffect } from 'react';
import { replaceDots, getWeekDay } from '../functions';
import { Footer } from '../components/HomeComponents';
import { Link } from 'react-router-dom';



function Week() {
    const [weatherData, setWeatherData] = useState({});

    

    
    useEffect(() => {
        if (!localStorage.getItem('defaultCity'))
        {
            localStorage.setItem('defaultCity', 'Nowy Sącz');
        }

        fetchWeatherData();
    }, []);


    const fetchWeatherData = async () => {
        const city = localStorage.getItem('defaultCity');
        
        const api = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lang=pl&key=${process.env.REACT_APP_API_KEY}&city=${city}&days=7`);
        const data = await api.json();

        setWeatherData(data);
    };
    
    
    return (
        <Wrapper>
            <h4>Tygodniowa prognoza pogody</h4>
            <h3>{weatherData.city_name}</h3>

            <WeekWrapper>
            {
                (weatherData.data &&
                    weatherData.data.map((day) => {
                        return (
                            <Day key={day.valid_date}>
                                <h5 style={{ marginBottom: "2px" }}>{getWeekDay(day.valid_date)}</h5>
                                <h5>{day.valid_date}</h5>

                                <TemperatureContainer>
                                    <p className="temperature min">{replaceDots(day.min_temp)} &deg;C</p>
                                    <p className="temperature max">{replaceDots(day.max_temp)} &deg;C</p>

                                    <div>
                                        <img src={`/icons/${day.weather.icon}.png`} alt={day.weather.description}/>
                                    </div>
                                </TemperatureContainer>

                                <h6>Ciśnienie</h6>
                                <p>{replaceDots(day.pres)} mb</p>

                                <h6>Zachmurzenie</h6>
                                <p>{day.clouds}%</p>

                                <h6>Szansa opadów</h6>
                                <p>{day.pop}%</p>
                            </Day>
                        )
                    })    
                )
            }
            </WeekWrapper>

            <Footer>
                Aby zmienić miasto, dla którego wyświetlane są informacje pogodowe, przejdź do <Link to={'/configure'}>ustawień</Link>
            </Footer>
        </Wrapper>
    )
}

export default Week