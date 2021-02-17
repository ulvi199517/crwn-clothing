import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 20px 5px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;
export const Divider = styled.span`
  font-size: large;
  text-transform: uppercase;
  font-weight: bold;
  display: block;
  text-align: center;
  margin: 5px 0;
`

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;