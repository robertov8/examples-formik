import React, { useEffect } from 'react';
import { Formik } from 'formik';
// import PropTypes from 'prop-types';

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
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="email">
                <span>E-mail</span>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  autoComplete="new-password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>

              <span>{errors.email && touched.email && errors.email}</span>
            </FormGroup>

            <FormGroup>
              <label htmlFor="password">
                <span>Password</span>

                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  autoComplete="new-password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>

              <span>{errors.password && touched.password && errors.password}</span>
            </FormGroup>

            <button type="submit" disabled={isSubmitting || !isValid}>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

// Index.propTypes = {};
