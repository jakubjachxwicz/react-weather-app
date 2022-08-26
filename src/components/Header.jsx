import { TiWeatherCloudy, TiWeatherSunny } from 'react-icons/ti';
import './styles/Header.css';



function Header() {
    return (
    <div className='HeaderWrapper'>
        <TiWeatherCloudy className='Header' />
        <h3 className='Header'>Pogoda</h3>
        <TiWeatherSunny className='Header' />
    </div>
  )
}

export default Header