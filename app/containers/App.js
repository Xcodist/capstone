import React, { Component, PropTypes } from 'react';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
//import Header from '../components/Header';
import style from './App.css';
import { Login, Signup } from '../components/auth-form';
import Footer from '../components/Footer';

// @connect(
//   state => ({
//     todos: state.todos
//   }),
//   dispatch => ({
//     actions: bindActionCreators(TodoActions, dispatch)
//   })
// )
export default class App extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {

    return (
      <div className={style.normal}>
        {/* <Header addTodo={actions.addTodo} /> */}
        <Signup />
        <Login />
        <Footer />
      </div>
    );
  }
}
