import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ButtonLogin from "../ButtonLogin";
import { Logo } from "../Logo";
import SearchBar from "./SearchBar/SearchBar";
import "./Navbar.css";

function Navbar () {

    const [bgScrol, setBgScrol] = useState(false)
    const style = {textDecoration: 'none'}
    
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
                <nav class="navbar navbar-expand-sm container ">
                <Logo/>
                <div class="collapse navbar-collapse justify-content-end nav" id="navbarNavAltMarkup">
                     <SearchBar/>
                      <div class="navbar-nav">
                      <div class="nav-item nav-link"><Link to="/Explore"  style={style}>Explore</Link></div>
                      <div class="nav-item nav-link"><Link to="/" style={style}>Stats</Link></div>
                      <div class="nav-item nav-link"><Link to="/Help" style={style}>Help</Link></div>
                      <ButtonLogin/>
                      </div>
                     </div>
                </nav>
                </div>
            </div>
        )
    }

export default Navbar;