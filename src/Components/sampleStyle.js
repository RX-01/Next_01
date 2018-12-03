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

export const HrojectDetails = styled.div`
  display: grid;
  grid-column: 2 / -2;
  background: white;
  border-radius: 2.5px;
  display: grid;
  grid-gap: 25px;
`;










