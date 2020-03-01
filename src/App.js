import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { userActions } from './_actions/user.action';

function App(props) {
  const handle = event => {
    event.preventDefault();
    console.log(props.user);
    props.dispatch(userActions.login({email: 'thefallenmerc@gmail.com', password: 'password'}));
  }
  return (
    <div className="App">
      <button onClick={handle} >Try</button>
    </div>
  );
}

export default connect(state => ({ user: state.user }))(App);
