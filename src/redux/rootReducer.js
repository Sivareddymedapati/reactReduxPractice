import cakeReducer from '../redux/cake/cakeReducer'
import iceCreamReducer from '../redux/iceCream/iceCreamReducers'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

export default rootReducer