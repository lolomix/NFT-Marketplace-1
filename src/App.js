import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Asset/component/Navbar';
import LandingPage from './Asset/pages/LandingPages';
import Footer from './Asset/component/Footer'


function App() {
  return (
    <div>
        <Navbar/>
        <LandingPage/>
        <Footer/>
    </div>
  );
}

export default App;
