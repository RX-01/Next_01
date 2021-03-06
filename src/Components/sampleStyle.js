import styled from "styled-components";


export const ProjectBody = styled.div`
  margin-top: 5px;
  background: white;
  grid-column: 2 / -2;
  grid-gap: 25px;
  overflow: scroll;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  display: grid;
`;

export const ProjectHeader = styled.div`
  grid-column: 1 / -1;
  height: 45vh;
  background: white;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;


export const HeaderBackground = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -3;
  max-height: 360px;
  background-repeat: repeat;
  background-position: top; 
  background-color: ${props => props.backColor || "palevioletred"};
  background-image: url(${props => props.backImg});
`;

export const HeaderBackgroundImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;  
`;

export const HeaderDetail = styled.div`
  grid-column: 2 / -2;
  grid-row: 5 / -1;
  background: white;
  border-radius: 2.5px;
  box-shadow: 0 10px 6px -6px #D9D9D9;
  z-index: 1;
  padding: 15px; 
`;

export const ProjectSubTitle = styled.h3`
  font-size: 1.25em;
  color: #595959;
  font-weight: 500;
  text-align: center;

      @media all and (min-width: 1366px) {

max-height: 880px;

}

@media all and (min-width: 1280px) and (max-width: 1366px) {
  /* font-size: 4.35em; */
/* background: silver; */


}

@media all and (min-width: 1024px) and (max-width: 1280px) { 

 /* background: grey; */
 /* font-size: 4em; */

}

@media all and (min-width: 768px) and (max-width: 1024px) {
/* background: red; */
font-size: 1em;
}

@media all and (min-width: 480px) and (max-width: 768px) {
/* background: pink; */
font-size: 1em;
}

@media all and (max-width: 480px) { 
  font-size: .5em;
}
`;


export const ProjectTitle = styled.h1`
  font-size: 4em;
  font-weight: 700;
  color: ${props => props.textColor || "palevioletred"};
  filter: contrast(50%) saturate(500%);
  text-align: center;
  margin: 10px;

    @media all and (min-width: 1366px) {

max-height: 880px;

}

@media all and (min-width: 1280px) and (max-width: 1366px) {
  font-size: 3em;
/* background: silver; */


}

@media all and (min-width: 1024px) and (max-width: 1280px) { 

 /* background: grey; */
 font-size: 4em;

}

@media all and (min-width: 768px) and (max-width: 1024px) {
/* background: red; */
font-size: 3em;
}

@media all and (min-width: 480px) and (max-width: 768px) {
/* background: pink; */
font-size: 1.5em;
}

@media all and (max-width: 480px) { 
  font-size: 1.5em;
}
`;


export const ProjectDetails = styled.div`
  display: grid;
  grid-column: 2 / -2;
  background: white;
  border-radius: 2.5px;
  display: grid;
  grid-gap: 25px;
`;

export const ProjectCard = styled.div`
  display: grid;
  grid-template-rows: 1fr,auto;
  border-radius: 2.5px;
  justify-items: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  /* background-image: url(${props => props.active ? 'darkred' : 'limegreen'}); */
  
  background-image: url(${props => props.backImg});
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 2s cubic-bezier(.25,.8,.25,1);
  padding: 10px;
 

@media all and (min-width: 1366px) {

      /* min-width:1280px;
      min-height:720px; */

}

@media all and (min-width: 1280px) and (max-width: 1366px) {

/* background: silver; */


}

@media all and (min-width: 1024px) and (max-width: 1280px) { 

 /* background: grey; */


}

@media all and (min-width: 768px) and (max-width: 1024px) {
/* background: red; */

}

@media all and (min-width: 480px) and (max-width: 768px) {
/* background: pink; */

}

@media all and (max-width: 480px) { 
  /* min-width:270px;
  min-height:420px; */
}
`;

// export const ProjectCardLoad = styled.div`
//     grid-row: 1 / -1;
//     background-color:  ${props => props.backColor || "grey"};;
//     /* z-index: 15; */
//     width:100%;
//     height:100%;
//     min-height:300px;
//     min-width:300px;
// `;

export const ProjectCardImg = styled.img`
 grid-column: 1 / -1;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  visibility: ${props => props.active ? 'hidden' : 'visible'};
  transition: visibility 2s ease-in-out;
`;



export const ProjectCardDetails = styled.div`
  margin: 5px;
  background-color:WhiteSmoke;
  width: 98%;
  border-radius: 2.5px;
  padding: 5px;
  font-size: 1.5em;
  color: #595959;
  font-weight: 500;
`;

export const ProjectFooter = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 15px;
  color: white;
  margin: 5px;
  background-color: ${props => props.backColor || "palevioletred"};
  cursor:pointer;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  :hover {

  color: #595959;

}
`;










