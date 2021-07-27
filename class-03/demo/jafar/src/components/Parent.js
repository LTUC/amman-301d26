import React from 'react';

import Child from './Child';
import Card from 'react-bootstrap/Card';

class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cookiesJar: 10
    }
  }

  giveCookie = (argsExample) => {
    console.log('argsExample', argsExample);
    this.setState({ cookiesJar: this.state.cookiesJar - 1 });
  }

  render() {
    return (
      <div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>I am the parent of Jafar</Card.Title>
              <Card.Text>
                Number Of cookies In my Jar 🍪 {this.state.cookiesJar}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Child
          name="Jafar"
          giveCookie={this.giveCookie}
        />
      </div>
    )
  }
}

export default Parent;