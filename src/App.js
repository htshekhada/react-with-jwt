import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/">Home</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/product-list">Product List</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/add-product">New Product</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/about">About</Link>

        </div>
        <p className="App-intro">
          To get started.
        </p>
        {this.props.children}

      </div>
    );
  }
}

export default App;


//<img src={logo} className="App-logo" alt="logo" />
