import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 4rem;
  background-color: var(--background);

  h1 {
    color: var(--text);
    font-size: 2rem;
  }

  span {
    color: var(--primary);
    font-size: 2rem;
  }
`;

export default HeaderContainer;
