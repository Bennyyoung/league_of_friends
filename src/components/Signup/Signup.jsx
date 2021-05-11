import './signup.module.css';
import { fb } from 'service';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { FormField } from 'components';
import { useHistory } from 'react-router-dom';
import { defaultValues, validationSchema } from './formikConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
const eye = <FontAwesomeIcon icon={faEye} />;

export const Signup = () => {
  const history = useHistory();
  const [serverError, setServerError] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const signup = ({ email, userName, password }, { setSubmitting }) => {
    fb.auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        if (res?.user?.uid) {
          fetch('/api/createUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userName,
              userId: res.user.uid,
            }),
          })
            .then(() => {
              // Send verification email
              fb.auth.sendSignInLinkToEmail();
              alert('Email sent');
            })
            .then(() => {
              fb.firestore
                .collection('chatUsers')
                .doc(res.user.uid)
                .set({ userName, avatar: '' });
            });
        } else {
          setServerError(
            "We're having trouble signing you up. Please try again.",
          );
        }
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          setServerError('An account with this email already exist');
        } else {
          setServerError(
            "We're having trouble signing you up. Please try again.",
          );
        }
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="auth-form">
      <h1 style={{ color: 'white' }}>Signup</h1>
      <Formik
        onSubmit={signup}
        validateOnMount={true}
        initialValues={{ defaultValues }}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField name="userName" label="Username" id="signinput1" />
            <FormField
              name="email"
              label="Email"
              id="signinput2"
              type="email"
            />

            <div className="pass-wrapper">
              <FormField
                name="password"
                label="Password"
                type={passwordShown ? 'text' : 'password'}
              />
              <i onClick={togglePasswordVisibility}>{eye}</i>
              <FormField
                name="verifyPassword"
                label="Verify Password"
                type={passwordShown ? 'text' : 'password'}
              />
              <i id="eye" onClick={togglePasswordVisibility}>
                {eye}
              </i>
            </div>

            <div className="auth-link-container">
              Already have an account?{' '}
              <span className="auth-link" onClick={() => history.push('login')}>
                Log In!
              </span>
            </div>

            <button disabled={isSubmitting || !isValid} type="submit">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>

      {!!serverError && <div className="error">{serverError}</div>}
    </div>
  );
};
