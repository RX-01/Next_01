import React from "react";
import { ProjectBody,ProjectHeader,HeaderBackground,HeaderDetail,ProjectDetails,ProjectFooter,ProjectTitle,ProjectSubTitle } from "../Components/sampleStyle";
import topography from '../Files/topography.svg'
// import Loaded from '../Files/Loaded.svg'
import ImgLoader from "../Components/ImgLoader";
// import Data from "../Data";

// import '~sal.js/sal.css';



const ToTop = ()=> {
  document.querySelector('.Project_Header').scrollIntoView({ 
    behavior: 'smooth' 
  });
}


const Sample = ({location}) => {
  const {title,label,gallery,description} = location.state.sampleId;
  // const {}
  // const result = Data.filter(item => item.slug == sampleId);

  return (
    <ProjectBody>
    <ProjectHeader className = 'Project_Header'>
      <HeaderBackground backImg = {topography} backColor = {label.color}/>
      <HeaderDetail>
        <ProjectTitle textColor = {label.color}> {title} </ProjectTitle>
        <ProjectSubTitle>{description}</ProjectSubTitle>
      </HeaderDetail> 

    </ProjectHeader>
    <ProjectDetails>

    {gallery.map((item, index) => {
      return (
        <ImgLoader source = {item}  desc = {description} key = {index}/>
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

// <ProjectCard key = {index} backImg = {Loaded}>
// <ProjectCardImg  src={item} alt="hello" />     
// </ProjectCard>