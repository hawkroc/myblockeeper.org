import React from 'react'
import { Tabs } from 'antd'
import TransactionsViewer from '../transactionsViewer'
// import VirtualizedExample from '../VirtualizedExample'
const { TabPane } = Tabs
// import TransactionsReporting from '../containers/transactionsReporting'
// import ApplicationSettings from '../containers/applicationSettings'
// import UsersSettings from '../containers/usersSettings'

/**
 * Body row layout for display of content.
 *
 */
const Layout = ({ language, languageConfig }) => {
	return (
	   <div>
			<Tabs defaultActiveKey="0" >
				<TabPane tab={languageConfig.Transactions_title} key="0">
					{<TransactionsViewer />}
				</TabPane>
				<TabPane tab={languageConfig.Reporting_title} key="1">
					{/* <TransactionsReporting {...{ languageConfig }} /> */}
				</TabPane>

				<TabPane tab={languageConfig.Settings_title} key="2">
					{/* <TransactionsReporting {...{ languageConfig }} /> */}
				</TabPane>


				<TabPane tab={languageConfig.Settings_title} key="3">
					{/* { <VirtualizedExample /> } */}
				</TabPane>
			</Tabs>
		</div>
	)
}


export default Layout
