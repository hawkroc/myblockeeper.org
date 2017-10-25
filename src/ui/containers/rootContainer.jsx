import React from "react";
import { LocaleProvider } from "antd";
import { connect } from "react-redux";
import Login from "../components/login";
import { loginAction } from "../../redux/actions/userAction";
import HeaderContentLayout from "./layouts/headerContent"
import BodyContentLayout from "./layouts/bodyContent"
class RootContainer extends React.Component {
  render() {
    const { isLogin, language,languageConfig, loginAndSetAddress } = this.props;

    return (
      <LocaleProvider>
        {
          isLogin ? (
        
        
						<div className="list">
							<HeaderContentLayout />
							<BodyContentLayout {...{  language ,languageConfig}}/>  
						</div>    

        ) : (
          <div>
            <Login {...{ loginAndSetAddress }} />
          </div>
        )}
      </LocaleProvider>
    );
  }
}

const mapStateToProps = state => {
  // TODO:
  console.log("this.state" + JSON.stringify(state));
  let address = state.users.address;
  let isLogin = state.users.isLogin;
  let language =state.users.language;
  let languageConfig=state.users.languageConfig

  return { isLogin, language,languageConfig };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    loginAndSetAddress: address => {
      dispatch(loginAction(address));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
