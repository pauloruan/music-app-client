import React from 'react';
import GlobalStyle from './styles/GlobalStyle';

export default function App(): React.FunctionComponentElement<{}> {
  return (
    <div>
      <GlobalStyle />
      <h1>Hello World</h1>
    </div>
  );
}
