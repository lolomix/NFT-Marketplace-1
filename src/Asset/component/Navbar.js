import React from "react"
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import "./style.css"


function Navbar () {
        return (
            <div>
                <div class="nabar-background">
                <nav class="navbar navbar-expand-sm fixed-top container">
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
                      <a class=" btn-solid-login"><Link to="/login" style={{textDecoration: 'none'}}>Login</Link></a>
                      </div>
                     </div>
                </nav>
                </div>
            </div>
        )
    }

export default Navbar;