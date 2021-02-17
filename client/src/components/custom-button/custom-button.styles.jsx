import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: white;
    color: #4285f4;
    border: 1px solid #4285f4;
  }
`;
const facebookSignInStyles = css`
    background-color: #013ea0;
    color: white;

  &:hover {
    background-color: white;
    border: 1px solid #013ea0;
    color: #013ea0;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } else if(props.isFacebookSignIn){
    return facebookSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  ${getButtonStyles}

  &:disabled{
      cursor: not-allowed;
      pointer-events: all;
        &:hover {
        background-color: #a1a1a1;
        color: white;
        border: 1px solid white;
        }
    }

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media screen and (max-width: 800px){
    &:disabled{
      cursor: not-allowed;
      pointer-events: all;
      background-color: #a1a1a1;
      color: white;
      border: 1px solid white;
    }
  }
`;