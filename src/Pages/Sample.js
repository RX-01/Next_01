import React from "react";
import { ProjectBody,ProjectHeader,HeaderBackground,HeaderDetail,ProjectDetails } from "../Components/sampleStyle";
import topography from '../Files/topography.svg'
const Sample = ({location}) => {
  const {title,caption,label,background,gallery} = location.state.sampleId
  return (
    <ProjectBody>
    <ProjectHeader>
      <HeaderBackground style={{backgroundImage: `url(${topography})`, backgroundColor: `${label.color}`}}>
      
      </HeaderBackground>
      <HeaderDetail>

      </HeaderDetail>  
    </ProjectHeader>
    <projectDetails>

   </projectDetails>

  </ProjectBody>
  );
};

export default Sample;