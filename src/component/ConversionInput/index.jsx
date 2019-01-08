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
        return (<div className="ConversionInput input">
            <h2>{this.props.label}</h2>
            <div className="input-case">
                <CurrencySelector selected={this.props.currency} currencies={this.props.currencies} onChange={this.handleConversionCurrencyChange}/>
                <input type="number" value={this.props.amount} disabled/>
            </div>
        </div>)
    }
}
export default ConversionInput;