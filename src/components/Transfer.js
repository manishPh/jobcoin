import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Transfer = ({ sendAmount, balance }) => {
    return (
        <section className='jobcoin-send widget'>
            <header>
                <h3>Send Jobcoin</h3>
            </header>
            <Formik
                initialValues={{ address: null, amount: null }}
                validate={(values) => {
                    const errors = {};
                    if (!values.address) {
                        errors.address = 'Address is required';
                    }
                    if (/^[0-9]+\.?[0-9]*$/.test(values.amount)) {
                        if (parseFloat(values.amount) > parseFloat(balance)) {
                            errors.amount = 'Amount should be <= balance';
                        }
                    } else {
                        errors.amount = 'Enter valid amount';
                    }
                    return errors;
                }}
                onSubmit={({ address, amount }, { setSubmitting }) => {
                    sendAmount(address, amount);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, errors }) => {
                    return (
                        <Form>
                            <label htmlFor='address'>Destination Address</label>
                            <Field type='text' name='address' />
                            <ErrorMessage
                                name='address'
                                render={(msg) => (
                                    <div className='error'>
                                        <i>{msg}</i>
                                    </div>
                                )}
                            />
                            <label htmlFor='amount'>Amount to Send</label>
                            <Field type='text' name='amount' />
                            <ErrorMessage
                                name='amount'
                                render={(msg) => (
                                    <div className='error'>
                                        <i>{msg}</i>
                                    </div>
                                )}
                            />
                            <button type='submit' disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </section>
    );
};

export default Transfer;
