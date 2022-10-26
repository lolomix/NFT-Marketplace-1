import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { TbAlignRight } from "react-icons/tb";
import "./Navbar.css";
import Search from "../../atoms/inputSearch";
import Button from "../../atoms/Buttons";
import { Logo } from "../../atoms/Logo";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "600" : "normal",
      color: isActive ? "#C93D8D" : "white",
      backgroundColor: isActive ? "white" : "",
      borderRadius: isActive ? "10px" : "",
    };
  };

  const [bgScrol, setBgScrol] = useState(false);

  useEffect(() => {
    changeBgNavbar();
    window.addEventListener("scroll", changeBgNavbar);
  });

  const changeBgNavbar = () => {
    if (window.scrollY >= 1) {
      setBgScrol(true);
    } else {
      setBgScrol(false);
    }
  };
  return (
    <>
      <div
        id="navbar"
        className={`  ${
          bgScrol ? " navbar active position-fixed   " : "navbar"
        }`}
      >
        <nav className="p-2 navbar-expand-sm container container-fluid ">
          <Logo />
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <TbAlignRight size={25} />
          </Button>
          <div
            className="collapse navbar-collapse justify-content-end nav  "
            id="navbarSupportedContent"
          >
            <Search />
            <div className="navbar-nav d-flex align-items-center">
              <NavLink
                className={`nav-item nav-link`}
                to="/Explore"
                style={navLinkStyles}
              >
                Explore
              </NavLink>
              <NavLink
                className={`nav-item nav-link`}
                to="/Stats"
                style={navLinkStyles}
              >
                Stats
              </NavLink>
              <NavLink
                className={`nav-item nav-link`}
                to="/Help"
                style={navLinkStyles}
              >
                Help
              </NavLink>
              <NavLink className="ps-3 Login" to="/Login">
                <BiUserCircle size={40} />
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
