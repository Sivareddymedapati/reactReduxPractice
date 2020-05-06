import cakeReducer from '../redux/cake/cakeReducer'
import iceCreamReducer from '../redux/iceCream/iceCreamReducers'
import userReducer from '../redux/user/userReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
})

export default rootReducer