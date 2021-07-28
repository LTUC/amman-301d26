import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class JafarForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formTitle: 'Jafars'
    }
  }

  submittedColorForm = (event) => {
    event.preventDefault();
    const color = event.target.favColor.value;
    this.props.updateFavoriteColor(color);
  }

  submittedTitleForm = (event) => {
    event.preventDefault();
    const title = event.target.newTitle.value;
    this.setState({
      formTitle: title
    });
  }

  render() {
    return (
      <div>

        <Form onSubmit={(event) => this.submittedColorForm(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Favorite Color</Form.Label>
            <Form.Control name="favColor" type="text" placeholder="Enter Favorite Color" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <h1>
          {this.state.formTitle} Form
        </h1>
        <Form onSubmit={(event) => this.submittedTitleForm(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Form Title</Form.Label>
            <Form.Control name="newTitle" type="text" placeholder="Enter Form new Title" />
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
