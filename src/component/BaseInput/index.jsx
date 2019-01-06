import React, {Component} from 'react'

export default class BaseInput extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            currencyOptions: this.props.currencyOptions,
            amount: 0,
            baseCurrency: 'USD'
        };
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    }

    handleCurrencyChange(event){
        this.setState({
            amount: this.state.amount,
            baseCurrency: event.target.value
        })
    }

    handleAmountChange(event){
        this.setState({
            amount: event.target.value,
            baseCurrency: this.state.baseCurrency
        })
    }

    options() {
        let ops = [];
        for (let i = 0; i < this.state.currencyOptions.length; i++) {
            const op = this.state.currencyOptions[i];
            ops.push(<option value={Object.keys(op)[0]}>{Object.keys(op)[0]}</option>);
        }
        return ops;
    }

    render() {
        console.log(this.state.currencyOptions);
        return (
            <div className="input-case">
                <select onChange={this.handleCurrencyChange} name="baseCurrency" id="baseCurrencySelect" defaultValue={"USD"}>
                    {this.options()}
                </select>
                <input type="number" name="amount" id="amountInput" value={this.state.amount} onChange={this.handleAmountChange}/>
            </div>
        )
    }


} 