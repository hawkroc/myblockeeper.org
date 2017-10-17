import actionTypes from './actionTypes'
export const loginAction = (address) => ({
  type: actionTypes.LOGIN_KEY,
  payload: address
})

