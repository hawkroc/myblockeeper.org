import * as actionTypes from "../actions/actionTypes"

const initialState = {
    exchange:null,
    balance:null
}

export default (state = initialState, action) => {
  console.log('action '+JSON.stringify(action ))
  switch (action.type) {

  case actionTypes.SETEXCHANGE:
 
    return Object.assign({}, state, { exchange: action.payload})


    case actionTypes.SETBALANCE:
    return Object.assign({}, state, { balance: action.payload})


  default:
    return state
  }
}
