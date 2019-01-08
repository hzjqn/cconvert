import React, {Component} from 'react';

class CurrencySelector extends Component
{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    options(){
        let options = [];
        let ops = Object.keys(this.props.currencies);
        for (let i = 0; i < ops.length; i++) {
            options.push(<option key={i} value={ops[i]}>{ops[i]}</option>);
        }
        return options;
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render(){
        return (
            <select value={this.props.selected} onChange={this.handleChange} name="currencies" id="currenciesSelect">
                {this.options()}
            </select>
        )
    }
}

export default CurrencySelector;
