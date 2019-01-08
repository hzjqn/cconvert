import React, { Component } from 'react';
import CurrencySelector from '../CurrencySelector'

class BaseInput extends Component 
{ 

    constructor(props){ 
        super(props);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleBaseCurrencyChange = this.handleBaseCurrencyChange.bind(this);
    }

    handleAmountChange(event) {
        this.props.onAmountChange(event.target.value);
    }

    handleBaseCurrencyChange(newCurrency) {
        this.props.onBaseCurrencyChange(newCurrency);
    }

    render () { 
        return (<div className="BaseInput input-case">
            <CurrencySelector selected={this.props.currency} currencies={this.props.currencies} onChange={this.handleBaseCurrencyChange}/>
            <input type="number" value={this.props.amount} onChange={this.handleAmountChange}/>
        </div>)
    }
}
export default BaseInput;