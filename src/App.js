import React, {Component} from 'react';
import './App.css';
import Router from './components/Router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
