import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import BtnGithub from '../BtnGithub';
import BtnGoogle from '../BtnGoogle';

import {
  HeaderContainer,
  SpanHeaderContainer,
  TitleHeaderContainer,
  ButtonsContainer,
} from './style';

export default function Header(): React.FunctionComponentElement<{}> {
  return (
    <HeaderContainer>
      <TitleHeaderContainer>
        app
        <SpanHeaderContainer>.</SpanHeaderContainer>
        Music
      </TitleHeaderContainer>
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
