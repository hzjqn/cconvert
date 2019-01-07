import React, { Component } from 'react';
import './actions/index';
import Converter from './component/Converter';
import './App.sass';

class App extends Component {

  render() {
    return (
    <Converter/>
    )
  }
}

export default App;
