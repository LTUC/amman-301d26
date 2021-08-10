import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class MyCats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: []
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

  render() {
    return (
      <>
        <br />
        <h1>My Cats! 🐱</h1>
        <br />
        {
          this.state.cats.length &&
          <Row>
            {
              this.state.cats.map(cat => {
                return (
                  <Col md={6}>
                    <Card
                      style={{ width: '18rem' }}
                    >
                      <Card.Img variant="top" src={cat.img} />
                      <Card.Body>
                        <Card.Title>{cat.name}</Card.Title>
                        <Card.Text>
                          {cat.breed} 🐈
                        </Card.Text>
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
