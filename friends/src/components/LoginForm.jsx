import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialFriendForm = {
    username: '',
    password: '',
  };

function LoginForm(props){
    const {login} = props;
    
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