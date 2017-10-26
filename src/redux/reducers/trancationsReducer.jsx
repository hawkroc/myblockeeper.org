import * as actionTypes from "../actions/actionTypes"

const initialState = {
   transactions:null,
    exchange:null,
    balance:null
}

export default (state = initialState, action) => {

  switch (action.type) {

  case actionTypes.SETEXCHANGE:
 
    return Object.assign({}, state, { exchange: action.payload})


    case actionTypes.SETBALANCE:
    return Object.assign({}, state, { balance: action.payload})
     
    case actionTypes.SETTRANSACTIONS:
    return Object.assign({}, state, { transactions: action.payload})

  default:
    return state
  }
}
