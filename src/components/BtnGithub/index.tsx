import React from 'react';
import BtnGithubContainer from './style';

export default function BtnGithub({ children }: any): React.FunctionComponentElement<{}> {
  return (
    <BtnGithubContainer
      type="button"
    >
      {children}
    </BtnGithubContainer>
  );
}
