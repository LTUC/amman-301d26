import React from 'react';

import jafarPicture from './assets/jafar.jpg';

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
                <img src={jafarPicture} alt={this.props.name} />
                <br />
                <button onClick={this.giveCookie} >👋 Give {this.props.name} a cookie 🍪</button>
                <br />
                <span>
                    Number Of cookies eaten {this.state.numberOfCookiesEaten}
                </span>
            </div>
        )
    }
}

export default Child;