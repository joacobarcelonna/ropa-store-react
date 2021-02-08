import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';

import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from '../forms/FormInput';
import Button from './../forms/Button';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const SignIn = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push('/');
    }
    // eslint-disable-next-line
  }, [currentUser]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  }

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }

  const configAuthWrapper = {
    headline: 'Ingresar'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>

          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Contraseña"
            handleChange={e => setPassword(e.target.value)}
          />

          <Button type="submit">
            Ingresar
            </Button>

          <div className="socialSignin">
            <div className="row">
              <Button onClick={handleGoogleSignIn}>
                Ingresar con Google
              </Button>
            </div>
          </div>

          <div className="links">
            <Link to="/recovery">
                Recuperar Contraseña
              </Link>
          </div>

        </form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;