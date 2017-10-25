import * as actionTypes from './actionTypes'

export const  loginAction = (address) => ({
  type: actionTypes.LOGIN_KEY,
  payload: address
})


export const  setLanguage = (lg) => ({
  type: actionTypes.SETLANGUAGE,
  payload: lg
})
