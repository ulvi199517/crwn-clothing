import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import {FaFacebook, FaGoogle, FaEnvelope, FaGithub} from 'react-icons/fa';
import CustomButton from '../custom-button/custom-button.component';

import {
    emailSignInStart, 
    googleSignInStart, 
    facebookSignInStart, 
    githubSignInStart
  } from '../../redux/user/user.actions';
import {connect} from 'react-redux';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  Divider
} from './sign-in.styles';

const SignIn = ({emailSignInStart,googleSignInStart, facebookSignInStart, githubSignInStart}) => {
  const [userCredentials, setCredentials] = useState({
      email: '', 
      password: ''
  });
  const {email, password} = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };
  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'><FaEnvelope style={{marginRight: '10px'}}/> Sign in </CustomButton>
            <Divider>or</Divider>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn><FaGoogle style={{marginRight: '10px'}}/> Sign in with Google</CustomButton>
            <CustomButton type='button' onClick={facebookSignInStart} isFacebookSignIn><FaFacebook style={{marginRight: '10px'}}/> Sign in with Facebook</CustomButton>
            <CustomButton type='button' onClick={githubSignInStart} isGithubSignIn><FaGithub style={{marginRight: '10px'}}/> Sign in with Github</CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  
}
const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  facebookSignInStart: () => dispatch(facebookSignInStart()),
  githubSignInStart: () => dispatch(githubSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});
export default connect(null, mapDispatchToProps)(SignIn);