import styled from 'styled-components';

export const FormRegisterContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 50%;
  height: 80%;
  padding: 0.5rem;
  background-color: var(--shape);
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);

  @media (max-width: 768px) {
    padding: 0.3rem;
  }
`;

export const FormRegisterTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: var(--text);
  margin: 0.5rem;
  text-align: center;
`;

export const FormRegisterSubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--text);
  margin: 0.5rem;
  text-align: center;
`;

export const FormRegisterInput = styled.input`
  width: 80%;
  height: 3rem;
  box-sizing: border-box;
  outline: 0;
  border-radius: 0.5rem;
  border: 1px solid var(--text);
  border: 0;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--text);
  background-color: var(--background);
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: var(--secondary);
  }
`;

export const FormRegisterButton = styled.button`
  height: 3rem;
  display: inline-block;
  padding: 0.3rem 1.2rem;
  margin: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--primary);
  background-color: var(--background);
  text-align:center;
  transition: all 0.2s;
  cursor:pointer;

  &:hover{
    background-color: var(--primary);
    color: var(--background);
  }

  @media all and (max-width: 30em) {
    display: block;
    margin: 0.2em auto;
  }
`;
