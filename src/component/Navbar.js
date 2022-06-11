import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ButtonLogin from "./ButtonLogin";
import { Logo } from "./Logo";
import SearchBar from "./SearchBar/SearchBar";
import "./style.css";

function Navbar () {

    const [bgScrol, setBgScrol] = useState(false)
    
    useEffect(() => {
        changeBgNavbar()
        window.addEventListener("scroll", changeBgNavbar)
    })

    const changeBgNavbar = () => {
        if (window.scrollY >= 1) {
            setBgScrol(true);
        } else{
            setBgScrol(false);
        }
    }
        return (
            <div>
                <div id="navbar" className={bgScrol ? ' navbar active ' : 'navbar'}>
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
                      <a class=" nav-item nav-link"><Link to="/Help" style={{textDecoration: 'none'}}>Help</Link></a>
                      <SearchBar/>
                      <ButtonLogin/>
                      {/* <Link to="/login" style={{textDecoration: 'none'} } class=" nav-item btn-solid-login"><a>Login</a></Link> */}
                      </div>
                     </div>
                </nav>
                </div>
            </div>
        )
    }

export default Navbar;