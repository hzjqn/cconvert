import React, { Component } from 'react';
import CurrencySelector from '../CurrencySelector'

class ConversionInput extends Component 
{ 

    constructor(props){ 
        super(props);
        this.handleConversionCurrencyChange = this.handleConversionCurrencyChange.bind(this);
    }


    handleConversionCurrencyChange(newCurrency) {
        this.props.onConversionCurrencyChange(newCurrency);
    }

    render () { 
        return (<div className="BaseInput">
            <CurrencySelector selected={this.props.currency} currencies={this.props.currencies} onChange={this.handleConversionCurrencyChange}/>
            <span>{this.props.amount}</span>
        </div>)
    }
}
export default ConversionInput;