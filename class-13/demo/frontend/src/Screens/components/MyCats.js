import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormModal from './FormModal';

export class MyCats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      displayModal: false
    };
  }

  // component did mount is a react lifecycle component that is invoked/ executed once the component mounted / loaded
  componentDidMount = () => {
    const userEmail = this.props.auth0.user.email;

    // we are sending an axios promise to our backend endpoint
    axios.get(`${process.env.REACT_APP_SERVER}/cats?email=${userEmail}`).then((axiosResponse) => { // .then access the data when the promise is resolved
      // console.log(axiosResponse.data); // to access the axios response data you need to target the .data property
      this.setState({
        cats: axiosResponse.data
      });
    }).catch(error => alert(error)); // will execute if the promise was rejected, basically something going wrong
  };

  /**
   * display Modal function that updates the state to display the formModal
   */
  handelDisplayModal = () => {
    this.setState({ displayModal: !this.state.displayModal });
  }

  /**
   * Handel the submission of the form
   */
  handelSubmitForm = (e) => {

    e.preventDefault();
    this.handelDisplayModal(); // hide the modal after form submission
    console.log('name: ', e.target.catName.value);
    console.log('breed: ', e.target.catBreed.value);
    console.log('Image: ', e.target.catImage.value);
  }
  render() {
    return (
      <>
        <br />
        <h1>My Cats! 🐱</h1>
        <br />
        {/* Button used to activate the modal */}
        <Button variant="secondary" onClick={() => this.handelDisplayModal()}>Add a Cat</Button>

        {/* The form Modal */}
        <FormModal
          show={this.state.displayModal}
          handelDisplayModal={this.handelDisplayModal}
          handelSubmitForm={this.handelSubmitForm}
        />
        <br />
        <br />
        {
          this.state.cats.length &&
          <Row>
            {
              this.state.cats.map((cat, idx) => {
                return (
                  <Col md={6} key={idx}>
                    <Card
                      style={{ width: '18rem' }}
                    >
                      <Card.Img variant="top" src={cat.cat_img} />
                      <Card.Body>
                        <Card.Title>{cat.cat_name}</Card.Title>
                        <Card.Text>
                          {cat.cat_breed} 🐈
                        </Card.Text>
                        <Button variant="outline-danger">Delete Cat</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        }
      </>
    )
  };
}

export default withAuth0(MyCats);
