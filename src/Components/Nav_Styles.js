import styled from "styled-components";
import { Link } from "@reach/router";


export const Nav = styled.div`
  background: white;
  grid-row: 1 / 2;
  grid-column: 1 /-1;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  border-bottom: 2px solid #E40218;
 
`;

export const NavLogo = styled.div`
  background: white;
  /* grid-column: 2/4; */
  grid-column: 6/10;
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 5px;

  @media all and (min-width: 768px) and (max-width: 1024px) {
    grid-column: 6/10;
}

@media all and (min-width: 480px) and (max-width: 768px) {
  grid-column: 6/10;
}

@media all and (max-width: 480px) { 
  grid-column: 6/10;
}
`;

export const NavImg = styled.img`
   max-width: 84px;
  height: auto;
  object-fit: scale-down;
`;

export const NavLinks = styled.div`
   grid-column: 10 / -2;
  display: none;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;



@media all and (min-width: 768px) and (max-width: 1024px) {
  /* display: none; */
}

@media all and (min-width: 480px) and (max-width: 768px) {
  display: none;
}

@media all and (max-width: 480px) { 
  display: none;
}
`;



export const NavLink = styled(Link)`
  cursor: hand;
  color: #E40218;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  font-size: 1.4em;
  :hover {
    color: teal;
  }
  &:active {
    color: darkcyan;
  }
`;

