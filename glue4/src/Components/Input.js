import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'



export default class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateState()
    this.setState({
      firstName: '', 
      lastName: '', 
      email: '', 
      password: ''})
  }

  render() {
    const {firstName, lastName, email, password} = this.state;

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>First Name: </Form.Label>
            <Form.Control type='text' placeholder='First Name' value={firstName} onChange={e => this.setState({firstName: e.target.value})}></Form.Control>
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Last Name: </Form.Label>
            <Form.Control type='text' placeholder='Last Name' value={lastName} onChange={e => this.setState({lastName: e.target.value})}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control type='email' placeholder='Email' value={email} onChange={e => this.setState({email: e.target.value})}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control type='password' placeholder='password' value={password} onChange={e => this.setState({password: e.target.value})}></Form.Control>
          </Form.Group>
          
          <Button variant='primary' type='submit'>Submit</Button>
        </Form>
      </>
    )
  }
}