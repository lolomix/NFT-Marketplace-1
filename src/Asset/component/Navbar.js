import React from "react"
import "./style.css"


function Navbar () {
        return (
            <div>
                <nav class="navbar d-flex">
                     <a class="logo"><span>NFT</span>  Collection</a>     
                     <div class="d-flex justify-content-end">
                      <a class=" nav-item nav-link">Home</a>
                      <a class=" nav-item nav-link" > Explore</a>
                      <a class=" nav-item nav-link" > Stats</a>
                      <a class=" nav-item nav-link" > Help</a>
                      <a class=" nav-item nav-link login">Login</a>
                     </div>
                </nav>
            </div>
        )
    }

export default Navbar;