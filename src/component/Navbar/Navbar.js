import React, { useEffect, useState } from "react"
import { NavLink} from "react-router-dom";
import ButtonLogin from "../ButtonLogin";
import { BiUserCircle} from "react-icons/bi"
import { Logo } from "../Logo";
import SearchBar from "./SearchBar/SearchBar";
import "./Navbar.css";

const Navbar = () => {
    
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? '600' : 'normal',
            color: isActive ? '#C93D8D' : '',
            backgroundColor: isActive ? 'white' : '',
            borderRadius: isActive ? '10px' : ''
        }
    }

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
                <div id="navbar" className={bgScrol ? ' navbar active  ' : 'navbar'}>
                <nav class=" navbar navbar-expand-sm container">
                <Logo/>
                <div class="collapse navbar-collapse justify-content-end nav " id="navbarNavAltMarkup">
                     <SearchBar/>
                      <div class="navbar-nav d-flex align-items-center">
                      <NavLink className={`nav-item nav-link`} to="/Explore" style={navLinkStyles}>Explore</NavLink>
                      <NavLink  className={`nav-item nav-link`} to="/Stats" style={navLinkStyles}>Stats</NavLink>
                      <NavLink  className={`nav-item nav-link`} to="/Help" style={navLinkStyles}>Help</NavLink>
                      <NavLink  className="ps-3 Login" to="/Login"><BiUserCircle size={40}/></NavLink>
                      </div>
                     </div>
                </nav>
                </div>
            </div>
        )
    }
export default Navbar