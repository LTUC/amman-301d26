import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class JafarForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newColor: ''
    }
  }

  // Method Number 1 
  // submittedColorForm = (event) => {
  //   event.preventDefault();
  //   const color = event.target.favColor.value;
  //   this.props.updateFavoriteColor(color);
  // }


  // Method number 2

  // More steps, but guaranteed to pass the data completely
  updatingTheState = (event) => {
    this.setState({
      newColor: event.target.value
    });
  }

  submittedColorForm = (event) => {
    event.preventDefault();
    this.props.updateFavoriteColor(this.state.newColor);
  }

  render() {
    return (
      <div>

        <Form onSubmit={(event) => this.submittedColorForm(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Favorite Color</Form.Label>
            <Form.Control onChange={(event => this.updatingTheState(event))} name="favColor" type="text" placeholder="Enter Favorite Color" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default JafarForm;
