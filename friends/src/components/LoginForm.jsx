import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import './scss/LoginForm.scss';

function LoginForm(props) {

  const { loginForm, login, loginInputChange } = props;

  const submit = e => {
    e.preventDefault();
    login(loginForm, props);
  }

  return (
    <form className='login-form'>
      <label>
        Username:
      </label>
      <input value={loginForm.username} onChange={loginInputChange} name='username' type='text' placeholder='username' />
      <label>
        Password:
      </label>
      <input value={loginForm.password} onChange={loginInputChange} name='password' type='password' placeholder='Password' />

      <button type='submit' onClick={submit}>Login</button>
    </form>
  )
}

export default connect(
  state => state,
  actionCreators
)(LoginForm);