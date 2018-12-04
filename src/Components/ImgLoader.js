import React, { Component,Fragment } from 'react'
import Loader from './Loader';

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
    const {img} = this.props
        return (
            <Fragment>
            
              <ImgBody loader = {Loader} loaded = {isLoaded} medium = {true}>
             <img onLoad = {this.handleLoad} src= {img}   alt="pretty kitty"/>
            </ImgBody>
                
            </Fragment>
        )
  }
}
