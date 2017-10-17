import * as actionTypes from "../actions/actionTypes"

const initialState = {
    address:"dsfsdfdsfdsfsdfsdf",
    language:null,
    token:null
}

export default (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.LOGIN_KEY:
    return Object.assign({}, state, { address: action.payload })

  default:
    return state
  }
}
