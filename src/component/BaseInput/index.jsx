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
        this.handleAmountChange = this.handleAmountChange.bind(this);
    }

    componentDidUpdate(){
        if(this.state.currencyOptions !== this.props.currencyOptions){
            this.setState({
                currencyOptions: this.props.currencyOptions,
                amount: this.state.amount,
                baseCurrency: this.state.baseCurrency
            })
        }
    }

    componentDidMount(){
        this.setState({
            currencyOptions: this.props.currencyOptions,
            amount: this.state.amount,
            baseCurrency: this.state.baseCurrency
        });
    }

    handleCurrencyChange(event){
        this.setState({
            currencyOptions: this.state.currencyOptions,
            amount: this.state.amount,
            baseCurrency: event.target.value
        })
    }

    handleAmountChange(event){
        this.setState({
            currencyOptions: this.state.currencyOptions,
            amount: event.target.value,
            baseCurrency: this.state.baseCurrency
        })
    }

    render() {
        if(this.props.skeleton === true){
            return  (
            <div className="case-input skeleton">
            </div>
            )
        } else {
            let op = Object.keys(this.state.currencyOptions)
            let ops = [];
            for(let i = 0; i < op.length; i++){
                ops.push(<option key={i} value={op[i]}>{op[i]}</option>)
            }
            return (
            <div className="case-input">
                <select value="USD" name="baseCurrency" id="baseCurrencySelect" onChange={this.handleCurrencyChange}>
                    {ops}
                </select>
                <input type="number" value={this.state.amount} onChange={this.handleAmountChange}/>
            </div>
            )
        }

    }


} 