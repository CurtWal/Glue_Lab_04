import React, { Component } from 'react'

import {Card, Form, Button} from 'react-bootstrap'

export default class Filter extends Component {
    constructor(props){
        super(props)
        this.state = {
            card: this.props.data
        }
    }
    handleChange = (e) =>{
      e.preventDefault();
      const filteredArr = this.props.data.fliter((obj) =>{
        if(e.target.value === ''){
          return obj
        }
        else if(obj.username.toLowerCase().startsWith(e.target.value.toLowerCase())){
          return obj
        }
      })
      this.setState({
        card: filteredArr
      })
    }
    render() {
    return (
        <>
        <Form>
            <Form.Group>
            <Form.Label>Search by Username </Form.Label>
            <Form.Control type='text' placeholder='&#x1F50D;Search...' onChange={this.handleChange}></Form.Control>
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>

        {this.state.card.map((obj) => {
            return <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{obj.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Username: {obj.username}</Card.Subtitle>
                <Card.Text>Email: {obj.email}<br/> City: {obj.address.city}
                </Card.Text>
            </Card.Body>
        </Card>
        })}
        </>
    )
    }
}