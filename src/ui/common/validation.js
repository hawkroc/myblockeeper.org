
import React, { Component } from 'react'
import Recaptcha from 'react-recaptcha';
const sitekey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
export default class validationComponent extends Component {
    // specifying your onload callback function

 callback = () => {
    console.log('Done!!!!');
  };
  
   verifyCallback = (response) => {
    console.log('verifyCallback!!!!');
    console.log(response);
  };
  
   expiredCallback = () => {
    console.log(`Recaptcha expired`);
  };
  render() {
    return (
      <div>
          <Recaptcha
          sitekey={sitekey}
          verifyCallback={this.verifyCallback}
          onloadCallback={this.callback}
          expiredCallback={this.expiredCallback}
        />
      </div>
    )
  }
}
