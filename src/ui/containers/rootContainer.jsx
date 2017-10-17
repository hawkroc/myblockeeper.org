import React from "react";
import { LocaleProvider } from 'antd'
import { connect } from "react-redux";
import Login from "../components/login"

class RootContainer extends React.Component {


  render() {
    const {isLogin,language} = this.props;

    return (
        <LocaleProvider locale={language}>
     <Login/>
      </LocaleProvider>
    );
  }
}

const mapStateToProps = state => {
  // TODO:
  console.log('this.state'+JSON.stringify(state))
  let address= state.users.address
  let isLogin=false
  let language='english'

  return {isLogin,language}


};

const mapDispatchToProps = (dispatch, state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
