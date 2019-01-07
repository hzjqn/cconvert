let initialState = {
    fetched: false,
    rates: {},
    baseCurrency: "USD",
    convertTo: "ARS",
    amount: 0,
    result: 0
}   

const rootReducer = (state, action) => {
    if (state === undefined){
        state = initialState
    }

    if(action.type === "SWAP_CURRENCIES"){
        return {
            ...state,
            baseCurrency: state.convertTo,
            convertTo: state.baseCurrency
        }
    }

    if(action.type === "UPDATE_RATES"){
        return {
            ...state,
            fetched: true,
            rates: action.rates
        }
    }

    if(action.type === "UPDATE_BASE_CURRENCY"){
        return {
            ...state,
            baseCurrency: action.currency
        }
    }

    if(action.type === "UPDATE_AMOUNT"){
        return {
            ...state,
            amount: action.amount
        }
    }
    

    if(action.type === "UPDATE_CONVERSION_RESULT"){
        return {
            ...state,
            result: action.result
        }
    }
    return state;
}

export default rootReducer;