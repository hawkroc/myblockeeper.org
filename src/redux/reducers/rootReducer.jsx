import { combineReducers } from 'redux'
import usersReducer from '../reducers/userReducer'



/**
 * Root redux reducer provided to createStore.
 * 
 */
const rootReducer = combineReducers({
  users: usersReducer
})



export default rootReducer
