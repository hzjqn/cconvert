import React, { Component } from 'react';
import './actions/index';
import Converter from './component/Converter';
import './App.sass';
import logo from './logo.svg'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <main>
          <header>
              <figure className="iso">
                  <img src={logo} alt="cConvert Logo"/>
              </figure>
              <h1 className="logo">cConvert</h1>
          </header>
          <Converter/>
        </main>
        <footer>
          Made using React.js and Redux
        </footer>
      </React.Fragment>
    )
  }
}

export default App;
