import axios from 'axios';
import React, { Component } from 'react'
import {Container,Row,Col }from 'react-bootstrap/'
import HomeCard from './HomeCard'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            gameArray:[],
        }
    }

    componentDidMount=()=> {
        const URL=`${process.env.REACT_APP_URL}/getdata`;
        axios.get(URL)
        .then((reslut)=>{
            // console.log(reslut.data)
            this.setState({
                gameArray:reslut.data


            })
        })
        .catch((err)=>{
            console.log("eee",err)
        })
    }

    ////////////////add data to db using post 
addTofav=(obj)=>{
    const URl=`${process.env.REACT_APP_URL}/addTofav`;
    axios.post(URl,obj)
    .then((reslut)=>{
       console.log(reslut.data)

    })
    .catch((err)=>{
        console.log("eee",err)
    })
    
}

    render() {
        return (
            <Container>
  <Row >
      {this.state.gameArray.map((item,idx)=>{
          return (

              <Col key={idx}>
                  <HomeCard  
                  item={item}
                  addTofav={this.addTofav}
                  />
              
              </Col>
          )
      })}
 
  </Row>
</Container>
        )
    }
}

export default Home
