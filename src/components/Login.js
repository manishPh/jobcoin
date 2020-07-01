import React from 'react';
import { Formik, Form, Field } from 'formik';

const Login = ({ login }) => {
    return (
        <section className='login-main'>
            <div className='jobcoin-logo'>
                <img src='./gemini_logo1.png' alt='Jobcoin Logo' />
            </div>
            <div className='jobcoin-login widget'>
                <header>
                    <h3>Welcome! Sign In With Your Jobcoin Address</h3>
                </header>
                <Formik
                    initialValues={{ address: null }}
                    validate={({ address } = {}) => {
                        return !address ? { address: 'Required' } : {};
                    }}
                    onSubmit={({ address }, { setSubmitting }) => {
                        login(address);
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <label htmlFor='address'>Jobcoin Address</label>
                            <Field type='text' name='address' />
                            <button type='submit' disabled={isSubmitting}>
                                Sign In
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
};

export default Login;
