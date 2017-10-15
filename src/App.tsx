import * as React from 'react';
import './App.css';

import ShoppingListContainer from './components/ShoppingListContainer';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Shopping List</h2>
        </div>
        <ShoppingListContainer />
      </div>
    );
  }
}

export default App;
