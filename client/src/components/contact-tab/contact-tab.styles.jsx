import styled from 'styled-components';

export const ContactImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
`;

export const ContactImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  
  width: 80vh;
  height: 40vh;
`;

export const ContactImageText = styled.h2`
  font-size: 28px;
  color: #f0b105;
`;
