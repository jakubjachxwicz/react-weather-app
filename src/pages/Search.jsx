import { AiOutlineSearch } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { Wrapper, DataWrapper, DateBar, Weather } from './../components/SearchComponents';
import { Form } from './../components/ConfComponents';
import { getWeekDay, formatDate, replaceDots, airQuality } from './../functions';



function Search() {
    const [input, setInput] = useState('');
    const [weatherToday, setWeatherToday] = useState();
    const [weatherWeekly, setWeatherWeekly] = useState();
    const [city, setCity] = useState('');
    const [selectedDay, setSelectedDay] = useState("now");
    const [weekDay, setWeekDay] = useState({});

    
    useEffect(()=> {
        fetchApi();
    }, [city]);
    
    
    const formHandler = (e) => {
        e.preventDefault();

        setCity(input);
    };


    const fetchApi = async () => {
        if (city)
        {
            const apiToday = await fetch(`https://api.weatherbit.io/v2.0/current?key=${process.env.REACT_APP_API_KEY}&lang=pl&city=${city}`);
            const dataToday = await apiToday.json();

            const apiWeek = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lang=pl&key=${process.env.REACT_APP_API_KEY}&city=${city}&days=7`);
            const dataWeek = await apiWeek.json();

            setWeatherToday(dataToday.data[0]);
            setWeatherWeekly(dataWeek);
        }
    };

    
    return (
        <Wrapper>
            <h5>Wyszukaj miasto</h5>

            <Form onSubmit={formHandler}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} spellCheck="false" />
                <button><AiOutlineSearch /></button>
            </Form>

            {weatherToday && weatherWeekly &&
                <DataWrapper>
                    <h4>{weatherToday.city_name}</h4>
                    <DateBar>
                        <div className={selectedDay === "now" ? "active" : ""} onClick={() => {setSelectedDay("now"); console.log(weatherToday);}}>
                            Teraz
                        </div>

                        {
                            weatherWeekly.data.map((day) => {
                                return (
                                    <div key={day.valid_date} className={selectedDay === day.valid_date ? "active" : ""} 
                                        onClick={() => {
                                            setSelectedDay(day.valid_date);
                                            setWeekDay(weatherWeekly.data.find(value => value.valid_date === day.valid_date));
                                        }}>
                                        <span>{getWeekDay(day.valid_date, false)}</span>
                                        <span>{formatDate(day.valid_date)}</span>
                                    </div>
                                )
                            })
                        }
                    </DateBar>

                    <Weather>
                        {
                            selectedDay === "now" ?
                            (
                                <div>
                                    <div className="header">
                                        <div>
                                            <h6>Temperatura</h6>
                                            <span>{replaceDots(weatherToday.temp)} &deg;C</span>

                                            <h6>Temperatura odczuwalna</h6>
                                            <span>{replaceDots(weatherToday.app_temp)} &deg;C</span>
                                        </div>
                                        
                                        <div>
                                            <img src={`/icons/${weatherToday.weather.icon}.png`} alt={weatherToday.weather.description} />
                                            <span>{weatherToday.weather.description}</span>
                                        </div>
                                    </div>

                                    <div className="main">
                                        <div>
                                            <h6>Ciśnienie</h6>
                                            <span>{replaceDots(weatherToday.pres)} mb</span>
                                        </div>

                                        <div>
                                            <h6>Prędkość wiatru</h6>
                                            <span>{replaceDots(weatherToday.wind_spd)} m/s</span>
                                        </div>

                                        <div>
                                            <h6>Zachmurzenie</h6>
                                            <span>{weatherToday.clouds}%</span>
                                        </div>

                                        <div>
                                            <h6>Wilgotność</h6>
                                            <span>{weatherToday.rh}%</span>
                                        </div>

                                        <div>
                                            <h6>Widoczność</h6>
                                            <span>{replaceDots(weatherToday.vis)} km</span>
                                        </div>

                                        <div>
                                            <h6>Indeks UV</h6>
                                            <span>{replaceDots(weatherToday.uv)}</span>
                                        </div>

                                        <div>
                                            <h6>Jakość powietrza</h6>
                                            <span>{airQuality(weatherToday.aqi)}</span>
                                        </div>
                                    </div>
                                </div>
                            ) :
                            (
                                <div>
                                    <div className="header">
                                        <div>
                                            <h6>Temperatura minimalna</h6>
                                            <span>{replaceDots(weekDay.min_temp)} &deg;C</span>

                                            <h6>Temperatura maksymalna</h6>
                                            <span>{replaceDots(weekDay.max_temp)} &deg;C</span>
                                        </div>
                                        
                                        <div>
                                            <img src={`/icons/${weekDay.weather.icon}.png`} alt={weekDay.weather.description} />
                                            <span>{weekDay.weather.description}</span>
                                        </div>
                                    </div>

                                    <div className="main">
                                        <div>
                                            <h6>Ciśnienie</h6>
                                            <span>{replaceDots(weekDay.pres)} mb</span>
                                        </div>

                                        <div>
                                            <h6>Zachmurzenie</h6>
                                            <span>{weekDay.clouds}%</span>
                                        </div>

                                        <div>
                                            <h6>Szansa opadów</h6>
                                            <span>{weekDay.pop}%</span>
                                        </div>

                                        <div>
                                            <h6>Wilgotność</h6>
                                            <span>{weekDay.rh}%</span>
                                        </div>

                                        <div>
                                            <h6>Widoczność</h6>
                                            <span>{replaceDots(weekDay.vis)} km</span>
                                        </div>

                                        <div>
                                            <h6>Indeks UV</h6>
                                            <span>{replaceDots(weekDay.uv)}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Weather>
                </DataWrapper>
            }
        </Wrapper>
    )
}

export default Search