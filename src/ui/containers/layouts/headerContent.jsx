
import React from 'react'
// import { Accounts as UserAccounts } from 'meteor/accounts-base'

import { Row, Col, Button } from 'antd'
import logo from "../../../source/img/blockeeper_Blue.png"
// import TransactionsFilterContainer from '../containers/transactionsFilter'
import SwitchLanguageSettings from '../switchLanguageSettings'

/**
 * Header row layout for control of content.
 *
 */
const Layout = () => {
	return (
		<div>
			<div className="inputSearch ">
				<Row>
					<Col offset={1} span={2}>
						<div>
						<img src={logo} alt="logo" className="logo" />
						</div>
					</Col>
					<Col offset={12} span={4} className="hearder-user-name">
						<i>
						Welcome<b>  </b>
						</i>
					</Col>
					<Col offset={0} span={2} style={{float: 'right'}}>
						<Button
							type="primary"
							// onClick={console.log('this is logout')}
							style={{ width: '100px', margin: '3px' }}>
							Log out
						</Button>
					</Col>
					<Col offset={0} span={2} style={{float: 'right'}}>
						<SwitchLanguageSettings/>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Layout
