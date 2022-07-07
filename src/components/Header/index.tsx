import React from 'react';
import { FaGithub } from 'react-icons/fa';
import BtnGithub from '../BtnGithub';
import HeaderContainer from './style';

export default function Header(): React.FunctionComponentElement<{}> {
  return (
    <HeaderContainer>
      <h1>
        pr
        <span>.</span>
        Music
      </h1>
      <BtnGithub>
        <FaGithub
          size={18}
        />
        <span>Login with Github</span>
      </BtnGithub>
    </HeaderContainer>
  );
}
