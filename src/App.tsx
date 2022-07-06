import React from 'react';
import RoutesApp from './routes';
import GlobalStyle from './styles/GlobalStyle';

export default function App(): React.FunctionComponentElement<{}> {
  return (
    <div>
      <GlobalStyle />
      <RoutesApp />
    </div>
  );
}
