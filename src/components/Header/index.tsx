import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import BtnGithub from '../BtnGithub';
import BtnGoogle from '../BtnGoogle';

import {
  HeaderContainer,
  SpanHeaderContainer,
  ButtonsContainer,
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
      <ButtonsContainer>
        <BtnGithub>
          <FaGithub size={18} />
          <span>Login with Github</span>
        </BtnGithub>
        <BtnGoogle>
          <FcGoogle size={18} />
          <span>Login with Google</span>
        </BtnGoogle>
      </ButtonsContainer>
    </HeaderContainer>
  );
}
