import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {

  /**
   * 
   * TODO:  Class 06 
   * 1. Create a form that the user will be using to input the location name [x]
   * 2. Create a function that will be taking the location from the user when the user submits the form [x]
   * 3. Send that request over to location IQ [x]
   * 4. Save the location information in a state and then display the information for the user on the browser[x]
   */


  /**
   * TODO : Class 07
   * 1. Once the user clicks on search location, get the shopping list items from the backend server. 
   * 2. Display the data on the UI after the shopping list Items have been retrieved from our API Server
   * display the items as a list of items. ul/li
   */

  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      shoppingListItem: []
    }
  }

  submitForm = async (e) => {
    e.preventDefault();

    const location = e.target.locationName.value;
    // console.log('user Input Location: ', location);
    const response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${location}&format=json`);


    const shoppingListResponse = await axios.get(`http://localhost:8080/shopping-list`);



    console.log('our axios response', response.data[0]);

    this.setState({
      locationData: response.data[0],
      shoppingListItem: shoppingListResponse.data
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
            <div>
              <p>
                {this.state.locationData.display_name}
              </p>

              <ul>
                {
                  this.state.shoppingListItem.map((value) => {
                    return (<li key={value}>
                      {value}
                    </li>);
                  })
                }
              </ul>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default App
