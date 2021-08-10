import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class FormModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handelDisplayModal}>
          <Modal.Header>
            <Modal.Title>Add Cat</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.handelSubmitForm(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Cat Name</Form.Label>
                <Form.Control name="catName" type="text" placeholder="Enter the cats name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Cat Breed</Form.Label>
                <Form.Control name="catBreed" type="text" placeholder="Enter the cats breed" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Cat Image</Form.Label>
                <Form.Control name="catImage" type="text" placeholder="Enter the image URL" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Cat
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handelDisplayModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default FormModal
