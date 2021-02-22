import { createStore, combineReducers } from 'redux'


const reducers = combineReducers({
    numbers: function (state, action) {
        switch (action.type) {
            case 'MIN_NUM_UPDATED':
                return {
                    ...state,
                    min: action.payload
                }
            case 'MAX_NUM_UPDATED':
                return {
                    ...state,
                    max: action.payload
                }
            default:
                return {
                    min: 5,
                    max: 35
                }
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig