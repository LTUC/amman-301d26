import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

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
    const catId = this.state.catId;
    const body = {
      cat_name: this.state.catName,
      cat_breed: this.state.catBreed,
      cat_img: this.state.catImage,
    };

    axios.put(`${process.env.REACT_APP_SERVER}/cat/${catId}`, body).then((axiosResponse) => {
      console.log('updated Cat Data:  ', axiosResponse.data);

      // once we get the new updated data from axios from the backend, we need to reflect it on the frontend without refreshing

      // we will use the map function to loop through the array of cat that we have. find the the cat that got updated by its ID and 
      // update the data for that cat

      const updatedCatArr = this.props.catsArr.map(cat => {

        if (cat._id === catId) {
          cat.cat_name = axiosResponse.data.cat_name;
          cat.cat_breed = axiosResponse.data.cat_breed;
          cat.cat_img = axiosResponse.data.cat_img;

          return cat;
        }
        return cat;

      });
      this.props.updateCats(updatedCatArr);



      this.props.handelDisplayModal({}); // to  close the modal and reset the object of the cat to be updated
    }).catch(error => alert(error))
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

export default UpdateFormModal;
