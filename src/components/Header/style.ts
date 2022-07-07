import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 4rem;
  width: 100%;
  background-color: var(--background);
`;

export const SpanHeaderContainer = styled.span`
  color: var(--primary);
  font-size: 2rem;
  font-weight: bold;
`;

export const TitleHeaderContainer = styled.h1`
  color: var(--text);
  font-size: 2rem;
  font-weight: bold;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
`;
