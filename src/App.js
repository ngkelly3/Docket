import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <Header/>
      </div>
    );
  }
}

export default App;
