import * as actionTypes from "../actions/actionTypes"
import en from '../../source/language/en'
const initialState = {
    address:'0x8a09ac6c94ef8f109602a83cb9ec48208b60158b',
    language:null,
    languageConfig:en,
    isLogin:true,
    token:null
}

export default (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.LOGIN_KEY:
    return Object.assign({}, state, { address: action.payload,isLogin:true })

  default:
    return state
  }
}
