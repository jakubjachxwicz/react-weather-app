import { useLocation, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Week from './Week';
import Search from './Search';
import Configure from './Configure';


function Pages() {
    const location = useLocation();
  
  
    return (
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/week" element={<Week />} />
        <Route path="/search" element={<Search />} />
        <Route path="/configure" element={<Configure />} />
    </Routes>
  )
}

export default Pages