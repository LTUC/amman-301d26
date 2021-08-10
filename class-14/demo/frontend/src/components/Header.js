import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export class Header extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar bg="dark" variant="dark" sticky="top" >
        <Container>
          <Navbar.Brand href="#home">🐈 Cat Owners 🐱</Navbar.Brand>
          <Nav activeKey="/">
            {isAuthenticated ?
              <>
                <Nav.Item>
                  <Nav.Link >
                    <LogoutButton />
                  </Nav.Link>
                </Nav.Item>
              </>
              :
              <Nav.Item>
                <Nav.Link >
                  <LoginButton />
                </Nav.Link>
              </Nav.Item>
            }
          </Nav>
        </Container>
      </Navbar>

    )
  }
}

export default withAuth0(Header);
