import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Content from './components/Content';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Welcome.css';
import MyCats from './components/MyCats';

class Profile extends Component {
  render() {
    // console.log(this.props);
    const { user } = this.props.auth0;
    return (

      <div className="App justify-content-center">
        <Container >
          <Row >
            <Col xs={12} md={12}>
              <Image src={user.picture} roundedCircle />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>Hello {user.name}</Col>
            <Col xs={6} md={6}>{user.email}</Col>
          </Row>
          <Row>
            <Col md={12}>
              <Content />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <MyCats />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withAuth0(Profile);