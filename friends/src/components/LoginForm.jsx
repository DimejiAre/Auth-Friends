import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './scss/LoginForm.scss';

const initialLoginForm = {
  username: '',
  password: '',
};

function LoginForm(props) {

  const login = (formValue, actions) => {
    const params = {
      username: formValue.username,
      password: formValue.password
    }
    axios.post('http://localhost:5000/api/login', params)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/friends')
      })
      .catch(error => {
        alert(error.message);
      })
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialLoginForm}
      onSubmit={login}
      render={props => {
        return (
          <Form className='login-form'>
            <label>
              Username:
                        </label>
            <Field name='username' type='text' placeholder='username' />
            <ErrorMessage name='name' component='div' />

            <label>
              Password:
                        </label>
            <Field name='password' type='password' placeholder='Password' />
            <ErrorMessage name='password' component='div' />

            <button type='submit'>Login</button>
          </Form>
        )
      }} />
  )
}

export default LoginForm;