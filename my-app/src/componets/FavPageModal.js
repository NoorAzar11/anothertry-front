import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import {Form,Button} from 'react-bootstrap/'

export class FavPageModal extends Component {
    render() {

        return (

            <Modal show={this.props.show}  onHide={this.props.closeHandler}>
            <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Update Modal </Modal.Title>
            </Modal.Header>
          
            <Modal.Body>


            <Form  onSubmit={this.props.updatFun}>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Update Name </Form.Label>
    <Form.Control type="text" defaultValue={this.props.name} name="name" />
    <Form.Text className="text-muted">
   
    </Form.Text>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Update image </Form.Label>
    <Form.Control type="text" defaultValue={this.props.url} name="img"/>
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
 
  <Button variant="secondary" type="submit">Update </Button>

  </Form>
            </Modal.Body>
          
            <Modal.Footer>
            
              <Button variant="primary" onClick={this.props.closeHandler}> close </Button>
            </Modal.Footer>
          </Modal.Dialog>

          </Modal>
        )
    }
}

export default FavPageModal
