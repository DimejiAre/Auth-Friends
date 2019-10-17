import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import withAuth from '../axios';
import './scss/FriendForm.scss';

const initialFriendForm = {
    "name": '',
    "age": '',
    "email": '',
}

function FriendForm(props) {

    const { setFriends } = props;

    const submit = (formValues, actions) => {
        const params = {
            name: formValues.name,
            age: Number(formValues.age),
            email: formValues.email
        }
        withAuth().post('http://localhost:5000/api/friends', params)
            .then(res => {
                setFriends(res.data)
            })
            .catch(error => {
                alert(error.message)
            })

        actions.resetForm();
    }


    return (
        <Formik
            initialValues={initialFriendForm}
            onSubmit={submit}
            render={props => {
                return (
                    <Form className='friend-form'>
                        <h4>Add Friend</h4>
                        <label>
                            Name:
                        <Field name='name' type='text' placeholder='name' />
                            <ErrorMessage name='name' component='div' />
                        </label>
                        <label>
                            Age:
                        <Field name='age' type='text' placeholder='age' />
                            <ErrorMessage name='age' component='div' />
                        </label>
                        <label>
                            Email:
                        <Field name='email' type='text' placeholder='email' />
                            <ErrorMessage name='email' component='div' />
                        </label>
                        <button type='submit'>Enter</button>
                    </Form>
                )
            }} />
    )
}

export default FriendForm;

