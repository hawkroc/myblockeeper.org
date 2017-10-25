// import { Meteor } from 'meteor/meteor'
import React from 'react'
import { connect } from 'react-redux'

import { Row, Col } from 'antd'

// import TransactionsGridComponent from '../components/transactions/transactionsGrid'
// import TransactionsExportComponent from '../components/transactions/transactionsExport'
// import TransactionsFilterContainer from '../containers/transactionsFilter'
// import RefreshTimerComponent from '../components/refreshTimer'

// import coreDefinitions from '../../modules/core/definitions'
// import taxationDefinitions from '../../modules/taxation/definitions'
// import taxationTransformers from '../../modules/taxation/transformers'
// import labellingDefinitions from '../../modules/transaction-labelling/definitions'
// import labellingTransformers from '../../modules/transaction-labelling/transformers'

import { fetchEtherExchangeRate,fetchEtherBalance } from '../../redux/actions/transactionsAction'


class TransactionsViewer extends React.Component {
	componentDidMount() {
		this.props.fetchExchangeRate()
		this.props.fetchBalance(this.props.address)
	}

	render() {
		const {
			balance,
			address,
			usdExchangeRate,
			languageConfig
		} = this.props
		return (
			<div>
				<Row>
					<Col span={4}> 
						{/* <TransactionsExportComponent {...{ transactions, transactionKeyDefs }} /> */}
					</Col>
					<Col offset={5} span={6}>
						{/* <TransactionsFilterContainer /> */}
					</Col>
				
						<Col offset={3} span={5}>
						<div className="exchange">
							<span style={{ color: 'black', fontStyle: 'italic' }}>
								{languageConfig.Current}:
							</span>{'  '}  
							1 ETH = {usdExchangeRate} USD
						</div>
					</Col>
				</Row>
				{/* <TransactionsGridComponent
					{...{
						transactions,
						usdExchangeRate,
						activeProfile,

						addressDisplayTransformer,
						valueExchangeTransformer
					}}
				/> */}
				<Row>
				<Col span={4} offset={1}>
					{/* <RefreshTimerComponent /> */}
				</Col>
				</Row>
			</div>
		)
	}
}

const mapStateToProps = state => {
		let languageConfig= state.users.languageConfig
let usdExchangeRate =state.transaction.exchange
let address =state.users.address
let balance=state.transaction.balance
return {
	balance ,address,languageConfig,usdExchangeRate
}

}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchExchangeRate: () => {
			dispatch(fetchEtherExchangeRate("usd"))
		},
		fetchBalance: (address) => {
			dispatch(fetchEtherBalance(address))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsViewer)
