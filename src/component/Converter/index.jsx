import React, {Component} from 'react';
import { connect } from 'react-redux';
import { swapCurrencies, updateRates, updateAmount, updateBaseCurrency, updateConversionResult } from '../../actions';
import BaseInput from '../BaseInput';

class Converter extends Component
{
    componentDidMount() {
        this.getApiData();
    }

    componentDidUpdate(){
        this.convert();
    }

    convert() {
        let baseCurrency = this.props.rates[this.props.baseCurrency];
        const convertTo = this.props.rates[this.props.convertTo];
        const amount = this.props.amount;

        this.props.updateConversionResult(amount * (1/baseCurrency) * convertTo);
    }

    getApiData(){
        fetch('https://openexchangerates.org/api/latest.json?app_id=0047685b53464ad6b30b648429bf1919')
        .then((res) => res.json())
        .then((json) => {
            let rates = json.rates;
            this.props.updateRates(rates);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleClick(){ 
        this.props.swapCurrencies();
    }

    render() {
        const { fetched, rates, baseCurrency } = this.props;
        if(fetched === true){
            console.log(rates)
            return (
                <main>
                    <BaseInput currency={baseCurrency} currencies={rates} amount={this.props.amount} onAmountChange={this.props.updateAmount} onBaseCurrencyChange={this.props.updateBaseCurrency}/>
                    <button onClick={this.handleClick.bind(this)}>SWAP</button>
                    <div>
                        <h3>Result</h3>
                        <span>{this.props.convertTo} : {this.props.result}</span>                    
                    </div>
                </main>
            );
        } else {
            return (
                <main>
                    loading
                </main>
            )
        }
    }
    
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        swapCurrencies: () => {
            dispatch(swapCurrencies());
        },
        updateRates: (rates) => {
            dispatch(updateRates(rates));
        },
        updateAmount: (newAmount) => {
            dispatch(updateAmount(newAmount));
        },
        updateBaseCurrency: (newCurrency) => {
            dispatch(updateBaseCurrency(newCurrency));
        },
        updateConversionResult: (newResult) => {
            dispatch(updateConversionResult(newResult));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Converter)