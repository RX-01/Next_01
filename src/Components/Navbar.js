import React from "react";
import { Nav, NavLogo, NavLinks, NavLink, NavImg } from "./Nav_Styles";
import Love_Fav from '../Files/Logo_Fav.png'
import Loader from "./Loader";
// import topography from '../Files/topography.svg'


function Navbar() {
  return (
    <Nav>
      <NavLogo>
        <NavLink to="/">
          <NavImg src = {Love_Fav} alt = 'Shalom Creates'/>
        </NavLink>
      </NavLogo>

      <NavLinks>
        <NavLink to="contact">contact</NavLink>
        <NavLink to="about">about</NavLink>
      </NavLinks>
    </Nav>
  );
}



export default Navbar;

// <Nav_Img src = {Love_Fav} alt = 'Shalom Creates'/>