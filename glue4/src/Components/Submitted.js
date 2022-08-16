import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class Submitted extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
    }
  }

  handleClose = () => {
    this.setState({show: false})
  }

  render() {
    return (
      <>
        <Modal show={this.props.isSubmitted} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form Successfully Submitted!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}