import React, { Component } from "react";
import { Provider } from 'react-redux'
import RootContainer from "./ui/containers/rootContainer";
import store from '../src/redux/store'

class App extends Component {
  render() {
    return (


<Provider store={store}>
			<RootContainer/>
		</Provider>

    );
  }
}

export default App;
