import React, {Component} from 'react';
import { connect } from 'react-redux';
import { swapCurrencies, updateRates, updateAmount, updateBaseCurrency, updateConversionCurrency, updateConversionResult } from '../../actions';
import BaseInput from '../BaseInput';
import ConversionInput from '../ConversionInput';
import logo from '../../logo.svg'

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

        this.props.updateConversionResult(Number(amount * (1/baseCurrency) * convertTo).toFixed(4));
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
        const { fetched, rates, baseCurrency, result, convertTo } = this.props;
        if(fetched === true){
            return (
                <main>
                    <header>
                        <figure className="iso">
                            <img src={logo} alt="cConvert Logo"/>
                        </figure>
                        <h1 className="logo">cConvert</h1>
                    </header>
                    <BaseInput currency={baseCurrency} currencies={rates} amount={this.props.amount} onAmountChange={this.props.updateAmount} onBaseCurrencyChange={this.props.updateBaseCurrency}/>
                    <button onClick={this.handleClick.bind(this)}><i className="material-icons">swap_vertical</i></button>
                    <ConversionInput currency={convertTo} currencies={rates} amount={result} onConversionCurrencyChange={this.props.updateConversionCurrency}/>
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
        updateConversionCurrency: (newCurrency) => {
            dispatch(updateConversionCurrency(newCurrency));
        },
        updateConversionResult: (newResult) => {
            dispatch(updateConversionResult(newResult));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Converter)