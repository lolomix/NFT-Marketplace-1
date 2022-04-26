import React from "react"
import { Logo } from "./Logo";
import "./style.css"


function Navbar () {
        return (
            <div>
                <nav class="navbar navbar-expand-sm fixed-top container">
                     <Logo/>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                    </button>  
                     <div class="collapse navbar-collapse d-flex justify-content-end nav" id="navbarNavAltMarkup">
                      <div class="navbar-nav">
                      <a class=" nav-item nav-link" href="#" >Home</a>
                      <a class=" nav-item nav-link" href="#" >Explore</a>
                      <a class=" nav-item nav-link" href="#" >Stats</a>
                      <a class=" nav-item nav-link" href="#" >Help</a>
                      <a class=" btn-solid-login">Login</a>
                      </div>
                     </div>
                </nav>
            </div>
        )
    }

export default Navbar;