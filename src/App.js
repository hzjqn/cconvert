import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './component/Card';
import BaseInput from './component/BaseInput';
import Button from './component/Button';
import logo from './logo.svg';
import './App.sass';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
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
  }

  componentDidMount(){
    this.setState({
      conversionRates: {},
      input: this.state.input,
      output: this.state.output
    });
    
    this.getConversionRates();
  }

  getConversionRates(){
    const Ajax = new XMLHttpRequest();
    Ajax.onreadystatechange = () => {
      if(Ajax.readyState === 4 && Ajax.status === 200){
        console.log(JSON.parse(Ajax.response).rates)
        this.setState({
          conversionRates: JSON.parse(Ajax.response).rates,
          input: this.state.input,
          output: this.state.output
        })
      }
    }

    Ajax.open("GET", "https://openexchangerates.org/api/latest.json?app_id=0047685b53464ad6b30b648429bf1919");

    Ajax.send()
  }

  swap(){
    console.log('swap')
  }

  updateBaseInput(amount, currency) {
    console.log('updated base input', this.state);
    if (this.state.input.amount != amount){
      this.setState({
        input: {
          currency: currency,
          amount: amount
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <BaseInput currencyOptions={this.state.conversionRates} onChange={this.updateBaseInput.bind(this)}/>
          <Button text="swap" onClick={this.swap}/> 
          <Card label={this.state.output.currency} text={this.state.output.amount}/>
        </div>
      </div>
    );
  }
}

export default App;
