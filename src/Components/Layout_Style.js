import styled, { css } from "styled-components";
import { Router } from "@reach/router";


export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  color: grey;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  font-family: "Montserrat", sans-serif;
`;

export const Container_Router = styled(Router)`
   background: white;
  grid-row: 2 / -1;
  grid-column: 1 /-1;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-gap: 10px;
`;



export const Profile_Gallery = styled.div`
  margin-top: 15px;
  background: white;
  grid-column: 2 / -2;
  grid-gap: 10px;
  overflow: scroll;
  display: grid;

  @media all and (min-width: 1366px) {

    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));

  }

  @media all and (min-width: 1280px) and (max-width: 1366px) {
 
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
 
}

  @media all and (min-width: 1024px) and (max-width: 1280px) { 
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    
  }
 
  @media all and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(428px, 1fr));
   }
    
  @media all and (min-width: 480px) and (max-width: 768px) {

   }
    
  @media all and (max-width: 480px) { 

  }
`;

export const Card = styled.div`
  border-radius: 2px;
  justify-items: center;
  align-items: center;
  display: grid;
  background-color: ${props => props.backColor || "palevioletred"};
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  :hover  {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background-color:white !important; 
}

  @media all and (min-width: 1366px) {

  max-height: 880px;

}

@media all and (min-width: 1280px) and (max-width: 1366px) {

  /* background: silver; */
  max-height: 480px;

}

@media all and (min-width: 1024px) and (max-width: 1280px) { 

   /* background: grey; */
    max-height: 480px;

}

@media all and (min-width: 768px) and (max-width: 1024px) {
  /* background: red; */
    min-height: 320px;
    max-height: 480px;
}

@media all and (min-width: 480px) and (max-width: 768px) {
  /* background: pink; */
    max-height: 320px;
}

@media all and (max-width: 480px) { 
    min-height: 300px;
}

`;

export const Thumb = styled.div`
  max-width: 400px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  grid-row: 1 / -1;
  grid-column: 1 /-1;
  cursor:pointer;

`;


export const Thumb_Overlay = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  grid-row: 1 / -1;
  grid-column: 1 /-1;
  opacity: .01;
`;

export const Thumb_Img = styled.img`
  grid-row: 1 / -1;
  grid-column: 1 /-1;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);

  :hover {
  filter: grayscale(0%);
  }
  
`;










