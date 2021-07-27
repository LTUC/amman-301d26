import React from 'react';

import jafarPicture from './assets/jafar.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class Child extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfCookiesEaten: 0
    };
  }

  eatCookie = () => {
    // console.log(this.state.numberOfCookiesEaten);
    this.setState({
      numberOfCookiesEaten: this.state.numberOfCookiesEaten + 1
    });
    // this.props.giveCookie("example of data being passed");
    this.props.giveCookie({
      data: 'one'
    });
  }

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={jafarPicture} />
          <Card.Body>
            <Card.Title>Hello my name is {this.props.name}</Card.Title>
            <Card.Text>
              Number Of cookies eaten {this.state.numberOfCookiesEaten}
            </Card.Text>
            <Button onClick={this.eatCookie} variant="primary">👋 Give {this.props.name} a cookie 🍪</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Child;