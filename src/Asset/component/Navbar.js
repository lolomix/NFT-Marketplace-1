import React from "react"
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import "./style.css"
import FacebookLogo from '../img/facebook-logo.png'
import TwitterLogo from '../img/twitter-logo.png'
import YoutubeLogo from '../img/youtube-logo.png'



function Navbar () {
        return (
            <div>
                <div class="nabar-background">
                <div class="container pt-3 navbar-wrapper text-light"> 
                    <div class="row">
                        <div class="col">
                            <a>Dashboard</a>
                        </div>
                        <div class="content-end d-flex justify-content-end col">
                            <a>Hak Kekayaan Intelektual</a>
                            <a>Bantuan</a>
                            </div>
                    </div>
                </div>
                <hr class="text-light"/>
                <nav class="navbar navbar-expand-sm container">
                <Logo/>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span class="navbar-toggler-icon"></span>
                    </button>

                     <div class="collapse navbar-collapse d-flex justify-content-end nav " id="navbarNavAltMarkup">
                      <div class="navbar-nav">
                      <a class=" nav-item nav-link"><Link to="/Explore"  style={{textDecoration: 'none'}}>Explore</Link></a>
                      <a class=" nav-item nav-link" href="#" >Stats</a>
                      <a class=" nav-item nav-link" href="#" >Help</a>
                      <a class=" nav-item btn-solid-login"><Link to="/login" style={{textDecoration: 'none'}}>Login</Link></a>
                      </div>
                     </div>
                </nav>
                </div>
            </div>
        )
    }

export default Navbar;