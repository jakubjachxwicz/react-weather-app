import { TiWeatherCloudy, TiWeatherSunny } from 'react-icons/ti';
import './styles/Header.css';



function Header() {
    return (
    <div>
        <TiWeatherCloudy />
        <h3>Pogoda</h3>
        <TiWeatherSunny />
    </div>
  )
}

export default Header