import React from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderContainer,
  SpanHeaderContainer,
  styleLink,
} from './style';

export default function Header(): React.FunctionComponentElement<{}> {
  return (
    <HeaderContainer>
      <Link style={styleLink} to="/">
        app
        <SpanHeaderContainer>.</SpanHeaderContainer>
        Music
      </Link>
    </HeaderContainer>
  );
}
