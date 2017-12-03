import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App.js';


describe('Core::Buttons::LinkButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  })
  it('renders base elements',()=>{
     let test='hello jest'
     console.log('test'+JSON.stringify(test))

  })

  it('triggers different things after clicking on it')
})
