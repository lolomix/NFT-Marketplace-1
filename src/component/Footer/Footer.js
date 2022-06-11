import { Logo } from "../Logo";
import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa"
import { Link } from "react-router-dom";
import "./footer.css"

export default function Footer (){
    
    const styleIcon = { color: "white", fontSize: "1.5em"}
    const styleTitle = {textDecoration: 'none', color: '#C93D8D',  fontWeight: 'bold'}
    const styleItem = {textDecoration: 'none', color : 'white'}

    return (
        <div>
            <footer>
                <div class="container Footer-List">
                    <div class="row">
                        <div class="col">
                            <ul class="Logo">
                            <Logo/>
                            </ul>
                            <ul>
                                <Link to="/Explore" style={styleTitle}><li>Explore</li></Link>
                                <Link to="/Explore" style={styleItem}><li>Digital Arts</li></Link>
                                <Link to="/Explore" style={styleItem}><li>Photography</li></Link>
                                <Link to="/Explore" style={styleItem}><li>Music</li></Link>
                            </ul>

                            <ul>
                                <Link to="/Login" style={styleTitle}><li>Account</li></Link>
                                <Link to="/Login" style={styleItem}><li>Login</li></Link>
                                <Link to="/Register" style={styleItem}><li>Register</li></Link>
                            </ul>

                            <ul>
                                <Link to="/Login" style={styleTitle}><li>Stats</li></Link>
                                <Link to="/Login" style={styleItem}><li>Rangking</li></Link>
                                <Link to="#" style={styleItem}><li>Activity</li></Link>
                            </ul>

                            <ul>
                                <Link to="/Login" style={styleTitle}><li>Activity</li></Link>
                                <Link to="/Login" style={styleItem}><li>About Us</li></Link>
                                <Link to="/Login" style={styleItem}><li>Help</li></Link>
                                <Link to="/Login" style={styleItem}><li>Terms of Services</li></Link>
                                <Link to="/Login" style={styleItem}><li>Privacy Policy</li></Link>
                            </ul>

                            <ul>
                                <li style={styleTitle}>Contact</li>
                                <li style={styleItem}>(022) 123 456</li>
                                <li style={styleItem}>Hello@nftcollection.com</li>
                                <li>
                                    <FaFacebook style={styleIcon}/>
                                    <FaTwitter style={styleIcon}/>
                                    <FaYoutube style={styleIcon}/>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <hr style={styleItem}/>
                <div class="pb-3 d-flex justify-content-center">
                <a style={styleItem}>© Copyright 2022 MiniProject Muchlisaryn</a>
                </div>
                
            </footer>
        </div>
    )
}