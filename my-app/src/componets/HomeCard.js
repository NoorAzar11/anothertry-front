import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'

export class HomeCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.item.url} />
            <Card.Body>
              <Card.Title>{this.props.item.name}</Card.Title>
              <Card.Text>
              
              </Card.Text>
              <Button variant="primary" onClick={()=>this.props.addTofav(this.props.item)}> added to fav </Button>
            </Card.Body>
          </Card>
        )
    }
}

export default HomeCard
