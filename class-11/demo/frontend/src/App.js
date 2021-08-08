import React, { Component } from 'react'
import Header from './components/Header'
import Profile from './Screens/Profile'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Profile />
      </div>
    )
  }
}

export default App;
