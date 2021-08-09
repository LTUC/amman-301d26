import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export class MyCats extends Component {

  /**TODO:
   * 
   * 1. once the component is loaded, get the cats data from the backend for this user
   * 2. first get the user email in this component from auth0
   * 3. send an axios request to the back end with the query params containing the user email as following {email: value}
   */

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
      <div>
        <div>
          <h1>My Cats! 🐈</h1>
        </div>
        {
          this.state.cats.length &&
          <div>
            {
              this.state.cats.map(cat => {
                return (
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cat.img} />
                    <Card.Body>
                      <Card.Title>{cat.name}</Card.Title>
                      <Card.Text>
                        {cat.breed}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
              })
            }
          </div>
        }
      </div>
    )
  };
}

export default withAuth0(MyCats);
