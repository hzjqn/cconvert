export const swapCurrencies = () => {
    return {
        type: "SWAP_CURRENCIES"
    }
}
  
export const updateRates = (rates) => { 
    return {
        type: "UPDATE_RATES",
        rates
    }
}  
export const updateAmount = (amount) => {
    return {
        type: "UPDATE_AMOUNT",
        amount
    }
}  
export const updateBaseCurrency = (currency) => {
    return {
        type: "UPDATE_BASE_CURRENCY",
        currency
    }
}  
export const updateConversionCurrency = (currency) => {
    return {
        type: "UPDATE_CONVERSION_CURRENCY",
        currency
    }
}  
export const updateConversionResult = (result) => {
    return {
        type: "UPDATE_CONVERSION_RESULT",
        result
    }
}