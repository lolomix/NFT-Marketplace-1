import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './Asset/pages/Explore';
import Help from './Asset/pages/Help';
import LandingPage from './Asset/pages/LandingPages';
import  Login  from "./Asset/pages/Login";
import { Register } from './Asset/pages/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Register" element={<Register/>}/>
          <Route path="Explore" element={<Explore/>}/>
          <Route path="Help" element={<Help/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
