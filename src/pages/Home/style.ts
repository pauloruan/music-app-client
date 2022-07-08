import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background-color: var(--background);
  padding: 1.5rem;
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
  }
`;

export const HomeTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--background);
  padding: 3rem;
  margin: 0 auto;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 80%;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: bolder;
  margin: 0.5rem 0;
  color: var(--primary);
  text-align: flex-start;
  text-transform: capitalize;
  letter-spacing: 0.1rem;

  @media only screen and (max-width: 768px) and (max-width: 1080px) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HomeText = styled.p`
  font-size: 1.4rem;
  margin: 0.5rem;
  color: var(--text);
  text-align: start;
  margin: 0.5rem 0;

  @media only screen and (max-width: 768px) and (max-width: 1080px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const IlustrationHomeContainer = styled.img`
  width: 30%;
  height: 50%;
  margin: 0.5rem;

  @media only screen and (max-width: 768px) and (max-width: 1080px) {
    width: 30%;
    height: 40%;
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
