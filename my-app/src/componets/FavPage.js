import axios from 'axios';
import React, { Component } from 'react'
import FavPageCard from './FavPageCard'
import {Container,Row,Col }from 'react-bootstrap/'
import FavPageModal from './FavPageModal'

export class FavPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            displayArray:[],
            show:false,
            name:"",
            url:"",
            id:-1,
        }
    }


componentDidMount=() =>{
    const URL=`${process.env.REACT_APP_URL}/display`;
    axios.get(URL) 
    .then((reslut)=>{
        this.setState({
            displayArray:reslut.data
        })
    })
    .catch((err)=>{
        console.log("try once again",err)
    })

}

/////////////////////////delete by id /////////////
deleteFun=(id)=>{
    const URL=`${process.env.REACT_APP_URL}/delete/${id}`;
    axios.delete(URL) 
    .then((reslut)=>{
        this.setState({
            displayArray:reslut.data
        })
    })
    .catch((err)=>{
        console.log("try once again",err)
    })

}

/////////////////////////close showfun////
showFun=async(obj)=>{
    await this.setState({
        show:true,
        name:obj.name,
        url:obj.url,
        id:obj._id,
    })

}

closeHandler=()=>{
    this.setState({
        show:false,
    })
}
////////update using put has two part////

updatFun=async (event)=>{
    event.preventDefault();
    const obj={
        id:this.state.id,
        name:event.target.value,
        url:event.target.img.value,
    }

    const URL=`${process.env.REACT_APP_URL}/update`;
    axios.put(URL,obj) 
    .then((reslut)=>{
        this.setState({
            displayArray:reslut.data,
            show:false,

        })
    })
    .catch((err)=>{
        console.log("try once again",err)
    })

}

    render() {
        return (
            <Container>
            <Row >

                {this.state.displayArray.map((item,idx)=>{
                    return (

                        <Col key={idx}> 
                        <FavPageCard 
                        item={item}
                        deleteFun={this.deleteFun}
                        showFun={this.showFun}
                        />
                        
                        </Col>
                    )
                })}
           
            </Row>

            <FavPageModal 
            name={this.state.name}
            url={this.state.url}
            show={this.state.show}
            closeHandler={this.closeHandler}
            updatFun={this.updatFun}
            
            />
          </Container>
        )
    }
}

export default FavPage
