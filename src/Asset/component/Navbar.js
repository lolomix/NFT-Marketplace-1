import React from "react"
import "./style.css"


function Navbar () {
        return (
            <div>
                <nav class="navbar fixed-top">
                     <a class="logo" href="#"><span>NFT</span>  Collection</a>     
                     <div class="d-flex justify-content-end nav">
                      <a class=" nav-item nav-link" href="#" >Home</a>
                      <a class=" nav-item nav-link" href="#" >Explore</a>
                      <a class=" nav-item nav-link" href="#" >Stats</a>
                      <a class=" nav-item nav-link" href="#"  >Help</a>
                      <a class=" btn-solid-login" href="#" >Login</a>
                     </div>
                </nav>
            </div>
        )
    }

export default Navbar;