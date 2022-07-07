import React from 'react';
import BtnGoogleContainer from './style';

export default function BtnGoogle({ children }: any): React.FunctionComponentElement<{}> {
  return (
    <BtnGoogleContainer
      type="button"
    >
      {children}
    </BtnGoogleContainer>
  );
}
