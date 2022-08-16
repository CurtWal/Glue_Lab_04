import React, { Component } from 'react'

import { Card, Form } from 'react-bootstrap'

export default class Filter extends Component {
  constructor(props) {
    super(props)
    // set a state for the data
    this.state = {
      card: this.props.data
    }
  }

  handleChange = (e) => {
    const filteredArr = this.props.data.filter((user) => {
      let userInput = e.target.value;
      // if user input if empty don't filter
      if (userInput === '') {
        // return obj if search is empty
        return user
        // filter for the username when if the user type in lowercase then return the filtered username to them
      } else if (user.username.toLowerCase().startsWith(e.target.value.toLowerCase())) {
        return user
      }
    }) //set the state to filteredArr
    this.setState({ card: filteredArr })
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group>
            <Form.Label>Search by Username </Form.Label>
            <Form.Control type='text' placeholder='🔎 Search' onChange={this.handleChange}></Form.Control>
          </Form.Group>
        </Form>

        {this.state.card.map((user) => {
          return <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Username: {user.username}</Card.Subtitle>
              <Card.Text>Email: {user.email}<br /> City: {user.address.city}
              </Card.Text>
            </Card.Body>
          </Card>
        })}
      </>
    )
  }
}