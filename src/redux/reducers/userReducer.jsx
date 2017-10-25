import * as actionTypes from "../actions/actionTypes"
import en from '../../source/language/en'
const initialState = {
    address:"",
    language:null,
    languageConfig:en,
    isLogin:false,
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
