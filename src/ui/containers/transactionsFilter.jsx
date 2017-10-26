import React from 'react'
import { connect } from 'react-redux'

import TimespanSelectorComponent from '../common/timespanSelector'
import { setTxTimestampFilter } from '../../redux/actions/transactionsAction'

const View = ({
	onTimespanSelected
}) => {
	return (
		<div>
			<TimespanSelectorComponent {...{onTimespanSelected}} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTimespanSelected: (dates) => {
			dispatch(setTxTimestampFilter({'from': dates[0], 'to': dates[1]}))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps, null,
	// For ANTD sub-component locale updates
	{ pure: false }
)(View)
