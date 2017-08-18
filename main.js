import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './reducers'
import AppContainer from './containers/AppContainer';

let store = createStore(appReducer)

class App extends React.Component {
  render() {
      return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        ); 
  }
}
 
ReactDOM.render(<App/>, document.getElementById('app'));