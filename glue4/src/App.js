import React, { Component } from 'react'
import './index.css'

import Input from './Components/Input'
import Toasted from './Components/Toasted'
import Filter from './Components/Filter'

import jsonData from './Components/data.json'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isSubmitted: false,
    }
  }

  updateState = () => {
    this.setState({isSubmitted: true})
    
  }

  falseState = () => {
    this.setState({isSubmitted: false})
    
  }

  render() {
    return (
      <>
        
        <Input updateState={this.updateState}/>
        <Filter data={jsonData}/>
        <Toasted isSubmitted={this.state.isSubmitted} falseState={this.falseState}/>
      </>
    )
  }
}