let initialState = {
    input: {
        currency: "USD",
        amount: 1
    },
    output: {
        currency: "ARS",
        amount: 1
    }
}
const rootReducer = (state, action) => {
    if (state === undefined){
        state = initialState
    }

    if (action.type === "SWAP_CURRENCIES") {
        console.log('swapped currencies')
        state = {
            input: state.output,
            output: state.input
        }
    }
    console.log(state,action);

    return state;
}

export default rootReducer;