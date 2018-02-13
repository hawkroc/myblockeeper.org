import * as actionTypes from '../actions/actionTypes'
import en from '../../source/language/en'
const initialState = {
	address: '0x56bbc706b8916ade2cd77bb08cc5b5c044a2f10d',
	language: null,
	languageConfig: en,
	isLogin: true,
	token: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN_KEY:
			return Object.assign({}, state, { address: action.payload, isLogin: true })

		default:
			return state
	}
}
