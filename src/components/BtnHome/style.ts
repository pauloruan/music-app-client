import styled from 'styled-components';

const BtnHomeContainer = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 5rem;
  font-size: 1.2rem;
  font-weight: bolder;
  padding-inline: 0.7rem;
  padding-block: 0.7rem;
  margin: 0.5rem 0;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: var(--primary);
  }
`;

export default BtnHomeContainer;
