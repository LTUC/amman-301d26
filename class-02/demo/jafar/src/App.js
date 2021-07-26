import React from 'react';

import Parent from './components/Parent';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Jafar Cookie Stand 🍪
        </h1>

        {/* Create a new instance of the parent component */}
        <Parent />
      </div>
    )
  }
}

export default App;