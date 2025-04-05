
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Heritage from './Pages/Heritage';
import Cuisine from './Pages/Cuisine';
import Architecture from './Pages/Architecture';
import HistoricalSites from './Pages/HistoricalSites';
import Temples from './Pages/Temples';
import TemplesPage from './Components/ArchitecurePage/TemplesPage';
import Caves from './Pages/Caves';
import SpeCave from './Components/ArchitecurePage/SpeCave';
import Wild from './Pages/Wild';
import WildPage from './Components/ArchitecurePage/WildPage';
import FortPage from './Components/ArchitecurePage/FortPage';
import Monuments from './Components/ArchitecurePage/Monuments';
import Forts from './Pages/Forts';
import Yoga from './Pages/Yoga';
import Festivals from './Pages/Festivals';
import Calender from './Pages/Calender';
import Art from './Pages/Art';
import Music from './Pages/Music';
import Contact from './Pages/Contact';
import Language from './Pages/Language';
import StateDance from './Components/Art/StateDance';
import StateFood from './Components/CuisinePage/StateFood';
import SpecFest from './Components/Festival/SpecFest';
import UnescoTemples from './Pages/UnescoTemples';
import Jyotirling from './Pages/Jyotirling';
import Register from './Pages/Register';
import LoginPage from './Pages/LoginPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/cuisine/:index" element={<StateFood />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/historicalSites" element={<HistoricalSites />} />
        <Route path="/historicalSites/:index" element={<Monuments />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/jyotirling" element={<Jyotirling />} />
        <Route path="/unescoTemples" element={<UnescoTemples />} />
        <Route path="/temples/:id" element={<TemplesPage />} />
        <Route path="/caves" element={<Caves />} />
        <Route path="/caves/:index" element={<SpeCave />} />
        <Route path="/wild" element={<Wild />} />
        <Route path="/wild/:id" element={<WildPage />} />
        <Route path="/forts" element={<Forts />} />
        <Route path="/forts/:index" element={<FortPage />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/festivals/:id" element={<SpecFest />} />
        <Route path='/calender' element={<Calender/>} />
        <Route path='/art' element={<Art/>} />
        <Route path='/art/:id' element={<StateDance/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/language' element={<Language/>} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;