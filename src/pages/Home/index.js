import React, { useEffect } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import { FormGroup } from './styles';

const initialValues = { email: 'admin@admin.com', password: '123' };

export default function Home() {
  useEffect(() => {
    console.log(initialValues);
  }, []);

  function validate(values) {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    console.log('validate', values, errors);
    return errors;
  }

  function onSubmit(values, { setSubmitting }) {
    console.log('onSubmit', values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  }

  return (
    <div>
      <h1>Anywhere in your app!</h1>

      <Formik
        initialValues={{ ...initialValues }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({
          isSubmitting,
          isValid,
        }) => (
          <Form>
            <FormGroup>
              <label htmlFor="email">
                <span>E-mail</span>

                <Field type="email" name="email" />
              </label>

              <ErrorMessage name="email" component="div" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="password">
                <span>Password</span>

                <Field type="password" name="password" />
              </label>

              <ErrorMessage name="password" component="div" />
            </FormGroup>

            <button type="submit" disabled={isSubmitting || !isValid}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
