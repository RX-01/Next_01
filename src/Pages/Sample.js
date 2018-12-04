import React from "react";
import { ProjectBody,ProjectHeader,HeaderBackground,HeaderDetail,ProjectDetails,ProjectCard,ProjectCardImg,ProjectFooter,ProjectTitle } from "../Components/sampleStyle";
import topography from '../Files/topography.svg'

const ToTop = ()=> {
  document.querySelector('.Project_Header').scrollIntoView({ 
    behavior: 'smooth' 
  });
}


const Sample = ({location}) => {
  const {title,caption,label,gallery} = location.state.sampleId;
  
  return (
    <ProjectBody>
    <ProjectHeader className = 'Project_Header'>
      <HeaderBackground backImg = {topography} backColor = {label.color}/>
      <HeaderDetail>
        <ProjectTitle textColor = {label.color}> {title} </ProjectTitle>
      </HeaderDetail>  
    </ProjectHeader>
    <ProjectDetails>

    {gallery.map((item, index) => {
      return (
        <ProjectCard key = {index}>
          <ProjectCardImg  src={item} alt="hello" />
        </ProjectCard>
      );
    })}
    <ProjectFooter backColor = {label.color}  onClick = {ToTop}>
    <h1>Back To Top</h1>
 </ProjectFooter>
   </ProjectDetails>

  </ProjectBody>
  );
};

export default Sample;