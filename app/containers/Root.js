import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { Router } from 'react-router-dom'
import history from './history'

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  }
}
