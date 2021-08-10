import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class UpdateFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catName: this.props.catObject.cat_name,
      catBreed: this.props.catObject.cat_breed,
      catImage: this.props.catObject.cat_img,
      catId: this.props.catObject._id,
    }
  }

  handelNameChange = (e) => this.setState({ catName: e.target.value });
  handelBreedChange = (e) => this.setState({ catBreed: e.target.value });
  handelImageChange = (e) => this.setState({ catImage: e.target.value });

  handelSubmitForm = ((e) => {
    e.preventDefault();
    const catObject = {
      catId: this.state.catId,
      catName: this.state.catName,
      catBreed: this.state.catBreed,
      catImage: this.state.catImage,

    };
    this.props.handelUpdateCatForm(catObject);
  });

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handelDisplayModal}>
          <Modal.Header>
            <Modal.Title>Update Cat</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.handelSubmitForm(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Cat Name</Form.Label>
                <Form.Control onChange={(e) => this.handelNameChange(e)} value={this.state.catName} type="text" placeholder="Enter the cats name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cat Breed</Form.Label>
                <Form.Control onChange={(e) => this.handelBreedChange(e)} value={this.state.catBreed} type="text" placeholder="Enter the cats breed" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cat Image</Form.Label>
                <Form.Control onChange={(e) => this.handelImageChange(e)} value={this.state.catImage} type="text" placeholder="Enter the image URL" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Cat
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

export default UpdateFormModal
