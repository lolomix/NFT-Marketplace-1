import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";

export default function DashboardCreate () {
    return (
        <div class="Dashboard text-light ">
            <Navbar/>
            <div class="container">

            <div class="row mt-4">
            
            <div class="col-3">
            <div class="row">
            <Link to="/Create-Collection" class="mb-4 mt-4 "  style={{textDecoration: 'none'}}><a  >Create New Collection</a></Link>
            <a style={{textDecoration: 'none', color:'#C93D8D'}} >My Collection</a>
            </div>
            </div>
            <div class="col my-collection">

                <img/>

            </div>
            </div>

            </div>
            <Footer/>
        </div>
    )
}