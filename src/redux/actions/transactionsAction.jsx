import * as actionTypes from './actionTypes'
import {GetExchange,GetBalance,GetTranactions} from '../../util/fetchJson'

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
			dispatch(setBalance(response))
		})
	}
}

export const  setTranactions = (value) => ({
  type: actionTypes.SETTRANSACTIONS,
  payload: value
})


export const fetchTranactions=(address)=>{
	return (dispatch) => {
		GetTranactions(address).then((response) => {
			dispatch(setTranactions(response.data.result))
		})
	}
}

export const setTxTimestampFilter=(time)=>{
type:null
payload:null

}