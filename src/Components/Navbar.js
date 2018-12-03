import React from "react";
import { Nav, Nav_Logo, Nav_Links, Nav_Link, Nav_Img } from "./Nav_Styles";
import Love_Fav from '../Files/Logo_Fav.png'
// import topography from '../Files/topography.svg'


function Navbar() {
  return (
    <Nav>
      <Nav_Logo>
        <Nav_Link to="/">
          <Nav_Img src = {Love_Fav} alt = 'Shalom Creates'/>
        </Nav_Link>
      </Nav_Logo>

      <Nav_Links>
        <Nav_Link to="contact">contact</Nav_Link>
        <Nav_Link to="about">about</Nav_Link>
      </Nav_Links>
    </Nav>
  );
}



export default Navbar;

// <Nav_Img src = {Love_Fav} alt = 'Shalom Creates'/>