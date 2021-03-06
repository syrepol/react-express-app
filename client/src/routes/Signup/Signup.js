import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { t_signup } from 'redux/thunks';

import styles from './Signup.module.css';


const mapDispatchToProps = {
  signup: t_signup
}

export const _Signup = ({ signup }) => {
  return (
    <div className={styles.signupPage}>
      <div className="container">
        <div className={styles.signupPageInner}>
          <Formik
            initialValues={{ name: '', password: '' }}
            onSubmit={(values) => signup(values)}
            validationSchema={Yup.object().shape({
              name: Yup.string().required('Required'),
              password: Yup.string().required('Required')
            })}
          >
            {(props) => {
              const { values, errors, touched, handleChange, handleBlur, handleSubmit } = props;

              return (
                <form onSubmit={handleSubmit}>
                  <div className="regular-input-wrapper">
                    <label className="regular-input-wrapper__label" htmlFor="name">Name</label>
                    <br />
                    <Input
                      id='name'
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.name && touched.name}
                      fluid
                    />
                    {errors.name && touched.name && (
                      <span className="regular-input-wrapper__error">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="regular-input-wrapper">
                    <label className="regular-input-wrapper__label" htmlFor="password">Password</label>
                    <br />
                    <Input
                      id='password'
                      type='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.password && touched.password}
                      fluid
                    />
                    {errors.password && touched.password && (
                      <span className="regular-input-wrapper__error">
                        {errors.password}
                      </span>
                    )}
                  </div>

                  <div className={styles.formActions}>
                    <Button
                      type="submit"
                      content="Signup"
                      fluid
                      positive
                    />
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export const Signup = connect(null, mapDispatchToProps)(_Signup);

