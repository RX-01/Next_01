import React, { Component } from 'react'
import Loaded from '../Files/Loaded.svg'
import {ProjectCard,ProjectCardImg,ProjectCardDetails} from "../Components/sampleStyle";
export default class ImgLoader extends Component {

  constructor (props) {
    super(props)
    this.state = {
        isLoaded: false
    }
}


handleLoad = (e)=> {
    console.log('loaded')
    this.setState((prevState) => ({
        isLoaded: !prevState.isLoaded,
    }))
}
  render() {
    const {isLoaded} = this.state
    const {source, desc} = this.props
        return (
        
            <ProjectCard  backImg = {isLoaded ? 'none' : Loaded}>
               <ProjectCardImg onLoad = {this.handleLoad} active = {!isLoaded} src={source} alt="hello"/>
            </ProjectCard>
        )
  }
}

// <ProjectCardDetails><h3>{Hello}</h3></ProjectCardDetails>