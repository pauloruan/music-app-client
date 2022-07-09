import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 4rem;
  width: 100%;
  padding: 0 3rem;
  background-color: var(--background);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const SpanHeaderContainer = styled.span`
  color: var(--primary);
  font-size: 2rem;
  font-weight: bold;
  padding-right: 0.1rem;
`;

export const styleLink = {
  textDecoration: 'none',
  color: 'var(--text)',
  fontSize: '2rem',
  fontWeight: 'bold',
};
