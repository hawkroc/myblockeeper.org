import { combineReducers } from 'redux'
import usersReducer from '../reducers/userReducer'
import transactionReducer from './trancationsReducer'



/**
 * Root redux reducer provided to createStore.
 * 
 */
const rootReducer = combineReducers({
  users: usersReducer,
  transaction:transactionReducer
})



export default rootReducer
