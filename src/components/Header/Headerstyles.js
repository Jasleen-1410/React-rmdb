import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  padding: 20px 0;
  margin: 0 auto;

  animation: animateImage 1s;

  @keyframes animateImage {
    from {
      opacity: 0;
      left: -30px;
    }
    to {
      opacity: 1;
      left: 0px;
    }
  }
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
