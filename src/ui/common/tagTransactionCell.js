import React, { Component } from 'react'

import { Tooltip, Modal, Button } from 'antd'

export default class tagTransactionCell extends Component {
		state = {
			isOut: this.props.isOut
		};


         info=()=> {
         	Modal.info({
         		title: 'This is a notification message',
         		content: (
         			<div>
         				<p>some messages...some messages...</p>
         				<p>some messages...some messages...</p>
         			</div>
         		),
         		onOk() {},
         	})
         }


         render() {
         	let rs = this.state.isOut ? <div><b className="out label-address">OUT</b></div> : <div><b className="in label-address"> IN</b></div>
         	return (
         		<div >
         			<Tooltip placement="topLeft" title="click me get original information">
         				<a onClick={this.info}>
         					{rs}
         				</a>
         			</Tooltip>
         		</div>
         	)
         }
}
