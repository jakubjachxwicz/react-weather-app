import { AiOutlineSearch } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Form, Wrapper, ResultCityWrapper } from './../components/ConfComponents';



function Configure() {
    const [input, setInput] = useState('');
    const [defaultCity, setDefaultCity] = useState([]);
    const [searchedCity, setSearchedcity] = useState([]);
    

    useEffect(() => {
        setDefaultCity(getDefCity());
    }, []);
    
    
    const getDefCity = () => {
        return localStorage.getItem('defaultCity');
    };
    
    const submitHandler = (e) => {
        e.preventDefault();

        fetchApi();
    };

    const fetchApi = async() => {
        const api = await fetch(`https://api.weatherbit.io/v2.0/current?key=${process.env.REACT_APP_API_KEY}&lang=pl&city=${input}`);
        const data = await api.json();

        setSearchedcity(data.data[0]);
    };

    const setCity = () => {
        const city = searchedCity.city_name;

        setDefaultCity(city);
        localStorage.setItem('defaultCity', city);
    };

    
    return (
        <Wrapper>
            <p>Aktualne domyślne miasto</p>
            <h4>{defaultCity}</h4>
            <p>Wyszukaj miasto poniżej aby ustawić je jako domyślne na stronie głownej</p>
            
            <Form onSubmit={submitHandler}>
                <input type="text" spellCheck="false" value={input} onChange={(e) => setInput(e.target.value)} />
                <button><AiOutlineSearch /></button>
            </Form>

            <ResultCityWrapper style={{ display: (searchedCity.city_name ? 'flex' : 'none') }}>
                <div className="country">
                    {searchedCity.country_code}
                </div>
                <div className="city">
                    {searchedCity.city_name}
                </div>
                <button onClick={setCity}>
                    <FaCheck />
                    <span>Wybierz</span>
                </button>
            </ResultCityWrapper>
        </Wrapper>
    )
}

export default Configure