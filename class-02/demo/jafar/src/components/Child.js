import React from 'react';

import jafarPicture from './assets/jafar.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class Child extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfCookiesEaten: 0
        };
    }

    giveCookie = () => {
        console.log(this.state.numberOfCookiesEaten);
        this.setState({
            numberOfCookiesEaten: this.state.numberOfCookiesEaten + 1
        });
    }

    render() {
        return (
            <div>
                <h3>Hello my name is {this.props.name}</h3>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={jafarPicture} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Number Of cookies eaten {this.state.numberOfCookiesEaten}
                        </Card.Text>
                        <Button onClick={this.giveCookie} variant="primary">👋 Give {this.props.name} a cookie 🍪</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Child;