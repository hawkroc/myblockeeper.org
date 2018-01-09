import { Form, Icon, Input, Button, Card } from 'antd'
// import Recaptcha from 'react-recaptcha';
import ValidationComponent from '../common/validation'
import React from 'react'
import logo from '../../source/img/blockeeper_Blue.png'
import '../../App.css'
import { sanitizeKeyString } from '../../util/inputTransformationHelpers'
import settings from '../../source/settings/application.json'
const FormItem = Form.Item
// https://github.com/meteor/meteor/issues/8645
window.Buffer = window.Buffer || require('buffer').Buffer
const Signing = require('ethereumjs-util')
class LoginForm extends React.Component {
  handleSubmit = e => {
  	e.preventDefault()

  	this.props.form.validateFields((err, values) => {
  		if (!err) {
  			this.props.loginAndSetAddress(this.getAddressFromKey(values.password))
  		}
  	})
  };
  onloadCallback=()=>{
  	console.log('this is onloadCallback')
  }

  getAddressFromKey = (key) => {
  	// Pull the public key from the signed message.
  	let messageBuffer = new Buffer(settings.public.login_key, 'hex')
  	let keyBuffer = new Buffer(key, 'hex')

  	let { v, r, s } = Signing.ecsign(messageBuffer, keyBuffer)

  	const signaturePublicKey = Signing.ecrecover(
  		new Buffer(settings.public.login_key, 'hex'),
  		v,
  		new Buffer(r, 'hex'),
  		new Buffer(s, 'hex')
  	)

  	const trimmedAddress = Signing.publicToAddress(signaturePublicKey).toString('hex').toLowerCase()

  	return trimmedAddress
  };

  /**
 *
 *  check the private key
 *
 * @memberof LoginForm
 */
  checkPrivateKey = (rule, value, callback) => {
  	if (value) {
  		if (sanitizeKeyString(value)) {
  			callback()
  		} else {
  			callback('please check your key!')
  		}
  	} else {
  		callback('Please input your Key!')
  	}
  };

  render() {
  	const { getFieldDecorator } = this.props.form
  	return (
  		<div>
  			<div className="App">
  				<header>
  					{/* <img src={logo} alt="logo" /> */}
  				</header>
  			</div>
  			<Card
  				className="login-card"
  				bordered="true"
  			>
  				<Form onSubmit={this.handleSubmit} className="login-form">
  					<FormItem>
  						{getFieldDecorator('password', {
  							rules: [
  								{
  									validator: this.checkPrivateKey
  								}
  							]
  						})(
  							<Input
  								prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
  								type="password"
  								placeholder="Key"
  							/>
  						)}
  					</FormItem>
  					<FormItem>
  						<Button type="primary" htmlType="submit" className="loginButton">
              Log in
  						</Button>
  					</FormItem>
  					<FormItem className="">
  						<a className="loginNotice" href="">
              Don't have a wallet?You can get one!
              You also can use metamask to login!
  						</a>
  					</FormItem>
  					<FormItem className="validation">
  						<ValidationComponent />
  					</FormItem>
  				</Form>
  			</Card>
  		</div>
  	)
  }
}
const Login = Form.create()(LoginForm)
export default Login
