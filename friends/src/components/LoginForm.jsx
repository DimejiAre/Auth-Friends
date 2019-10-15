import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialFriendForm = {
    username: '',
    password: '',
  };

function LoginForm(props){

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
        initialValues={initialFriendForm}
        onSubmit={login}
        render={props => {
            return (
                <Form>
                    <label>
                        username
                        <Field name='username' type='text' placeholder='username'/>
                        <ErrorMessage name='name' component='div'/>
                    </label>
                    <label>
                        Password
                        <Field name='password' type='password' placeholder='Password'/>
                        <ErrorMessage name='password' component='div' />
                    </label>
                    <button type='submit'>Login</button>
                </Form>
            )
        }}/>
    )
}

export default LoginForm;