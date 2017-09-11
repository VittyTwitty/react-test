import React, {Component} from 'react';
import './App.css';
import {Link} from "react-router";
import Header from "./containers/Header";
import Footer from "./containers/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
