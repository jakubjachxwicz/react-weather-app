import { useLocation, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Week from './Week';


function Pages() {
    const location = useLocation();
  
  
    return (
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/week" element={<Week />} />
    </Routes>
  )
}

export default Pages