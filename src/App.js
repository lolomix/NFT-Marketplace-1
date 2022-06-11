import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explorer/Explore';
import Help from './pages/Help';
import LandingPage from './pages/Landing Pages/LandingPages';
import Login from './pages/Login/Login';
import { Register } from './pages/Register';
import Payment from "./pages/Payment"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Explore" element={<Explore/>}/>
          <Route path="/Help" element={<Help/>}/>
          <Route path="/Payment/:id" element={<Payment/>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
