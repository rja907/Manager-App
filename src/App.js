import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBX_s3wBU-fMBfSl8PtWjdhw7w4ZzVbTck',
      authDomain: 'manager-53112.firebaseapp.com',
      databaseURL: 'https://manager-53112.firebaseio.com',
      projectId: 'manager-53112',
      storageBucket: '',
      messagingSenderId: '17935734120'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
