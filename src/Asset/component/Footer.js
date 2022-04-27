import { Logo } from "./Logo";
import FacebookLogo from '../img/facebook-logo.png'
import TwitterLogo from '../img/twitter-logo.png'
import YoutubeLogo from '../img/youtube-logo.png'
import { Link } from "react-router-dom";

export default function Footer (){
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
                                <li class="title-footer">Explore</li>
                                <li>Digital Arts</li>
                                <li>Photography</li>
                                <li>Music</li>
                            </ul>

                            <ul>
                                <li class="title-footer">Account</li>
                                <Link to="/Login" style={{textDecoration: 'none'}} ><li>Login</li></Link>
                                <li>Register</li>
                            </ul>

                            <ul>
                                <li class="title-footer">Statst</li>
                                <li>Ranking</li>
                                <li>Activity</li>
                            </ul>

                            <ul>
                                <li class="title-footer">Company</li>
                                <li>About Us</li>
                                <li>Help</li>
                                <li>Terms of Services</li>
                                <li>Privacy Policy</li>
                            </ul>

                            <ul>
                                <li class="title-footer">Contact</li>
                                <li>(022)123 456</li>
                                <li>Hello@nfteverywhere.com</li>
                                <li class="sosmed">
                                    <a><img src={FacebookLogo}/></a>
                                    <a><img src={TwitterLogo}/></a>
                                    <a><img src={YoutubeLogo}/></a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </div>
    )
}