import * as actionTypes from './actionTypes'
import {GetExchange,GetBalance} from '../../util/fetchJson'

export const  setExchange = (rate) => ({
  type: actionTypes.SETEXCHANGE,
  payload: rate

})


export const  setBalance = (value) => ({
  type: actionTypes.SETBALANCE,
  payload: value
})

export const fetchEtherExchangeRate = (currency) => {
	return (dispatch) => {
		GetExchange().then((response) => {
			dispatch(setExchange(response.USD))
		})
	}
}

export const fetchEtherBalance = (address) => {
	return (dispatch) => {
		GetBalance(address).then((response) => {
		    console.log('response'+JSON.stringify(response))
			dispatch(setBalance(response))
		})
	}
}