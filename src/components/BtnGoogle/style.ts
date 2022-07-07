import styled from 'styled-components';

const BtnGoogleContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: #fff;
  color: #24292e;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  span {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: #24292e;
  }

  @media only screen and (max-width: 768px) and (max-width: 1080px) {
    span {
      display: none;
      padding: 0.1rem 0.2rem;
      font-size: 0.5rem;
    }
  }
  `;

export default BtnGoogleContainer;
