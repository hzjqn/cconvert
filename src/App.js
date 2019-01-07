import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Card from './component/Card';
import BaseInput from './component/BaseInput';
import Button from './component/Button';
// import logo from './logo.svg';
import './App.sass';

class App extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.swapCurrencies();
  }

  render() {
    const { input, output } = this.props; 

    return (
      <div className="App">
        <div className="container">
          <div className="input">
            <h3>Currency</h3>
            {input.currency}
            <h3>Amount</h3>
            {input.amount}
          </div>
          <button onClick={this.handleClick}></button>
          <div className="output">
            <h3>Currency</h3>
            {output.currency}
            <h3>Amount</h3>
            {output.amount}
          </div>
        </div>
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    input: state.input,
    output: state.output
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    swapCurrencies: () => {
      dispatch({
        type: "SWAP_CURRENCIES"
      });
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(App);
