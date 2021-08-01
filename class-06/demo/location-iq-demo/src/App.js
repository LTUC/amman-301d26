import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {

  /**
   * 
   * TODO: 
   * 1. Create a form that the user will be using to input the location name [x]
   * 2. Create a function that will be taking the location from the user when the user submits the form [x]
   * 3. Send that request over to location IQ [x]
   * 4. Save the location information in a state and then display the information for the user on the browser[x]
   */

  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
    }
  }

  submitForm = async (e) => {
    e.preventDefault();
    const location = e.target.locationName.value;
    // console.log('user Input Location: ', location);
    const response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${location}&format=json`);

    console.log('our axios response', response.data[0]);

    this.setState({
      locationData: response.data[0]
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>
            Location Name:
          </label>
          <input name="locationName" type="text" placeholder="Enter the location name you want to search" />
          <input type="submit" value="search Location" />
        </form>
        <div>
          <h1>
            Location information
          </h1>
          {
            // conditional render 
            // like ternary operator without the else :
            // It takes the condition, and executes whatever is after the && key
            this.state.locationData.display_name &&
            <p>
              {this.state.locationData.display_name}
            </p>
          }
        </div>
      </div>
    )
  }
}

export default App
