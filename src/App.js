import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Card from './component/Card';
import BaseInput from './component/BaseInput';
import Button from './component/Button';
// import logo from './logo.svg';
import './App.sass';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      fetched: false,
      conversionRates: '',
      input: {
        currency: "USD",
        amount: 0
      },
      output: {
        currency: "ARS",
        amount: 0
      }
    }
    this.updateBaseInput = this.updateBaseInput.bind(this);
  }

  componentDidMount(){
    this.getConversionRates();
  }

  getConversionRates(){
    fetch('https://openexchangerates.org/api/latest.json?app_id=0047685b53464ad6b30b648429bf1919')
      .then((res) => {
      return res.json();
      })
      .then((json) => {
        this.setState({
          fetched: true,
          conversionRates: json.rates,
          input: this.state.input,
          output: this.state.input
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  swap(){
    console.log('swap');
  }

  updateBaseInput(amount, currency) {
    console.log('updated base input', this.state);
    if (this.state.input.amount !== amount){
      this.setState({
        input: {
          currency: currency,
          amount: amount
        }
      });
    }
  }

  render() {
    let baseInput;
    if(this.state.fetched){
      baseInput = <BaseInput skeleton={false} currencyOptions={this.state.conversionRates} onChange={this.updateBaseInput}/>
    } else {
      baseInput = <BaseInput skeleton={true} currencyOptions={{}}/>
    }

    return (
      <div className="App">
        <div className="container">
          { baseInput }
          <Button text="swap" onClick={this.swap}/> 
          <Card label={this.state.output.currency} text={this.state.output.amount}/>
        </div>
      </div>
    );
  }
}

export default App;
