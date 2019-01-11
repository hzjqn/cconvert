let initialState = {
    fetched: false,
    rates: {},
    baseCurrency: "USD",
    convertTo: "ARS",
    amount: 0,
    result: 0
}

const SWAP_CURRENCIES = "SWAP_CURRENCIES";
const UPDATE_RATES = "UPDATE_RATES";
const UPDATE_BASE_CURRENCY = "UPDATE_BASE_CURRENCY";
const UPDATE_CONVERSION_CURRENCY = "UPDATE_CONVERSION_CURRENCY";
const UPDATE_AMOUNT = "UPDATE_AMOUNT";
const UPDATE_CONVERSION_RESULT = "UPDATE_CONVERSION_RESULT";

const rootReducer = (state, action) => {
    if (state === undefined){
        state = initialState
    }

    switch (action.type){
        case SWAP_CURRENCIES:
            return {
                ...state,
                baseCurrency: state.convertTo,
                convertTo: state.baseCurrency,
                amount: state.result,
                result: state.amount
            }

        case UPDATE_RATES:
            return {
                ...state,
                fetched: true,
                rates: action.rates
            }

        case UPDATE_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.currency
            }

        case UPDATE_CONVERSION_CURRENCY:
            return {
                ... state,
                convertTo: action.currency
            }

        case UPDATE_AMOUNT:
            return {
                ... state,
                amount: action.amount
            }

        case UPDATE_CONVERSION_RESULT:
            return {
                ... state, 
                result: action.result
            }
        
        default: {
            return state
        }
    }
}

export default rootReducer;