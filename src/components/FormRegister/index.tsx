import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import BtnGithub from '../BtnGithub';
import BtnGoogle from '../BtnGoogle';
import {
  FormRegisterContainer,
  FormRegisterTitle,
  FormRegisterSubTitle,
  FormRegisterInput,
  FormRegisterButton,
} from './style';

export default function FormRegister(): React.FunctionComponentElement<{}> {
  return (
    <FormRegisterContainer action="">
      <FormRegisterTitle>Welcome</FormRegisterTitle>
      <FormRegisterSubTitle>Let&apos;s create your account!</FormRegisterSubTitle>
      <FormRegisterInput type="text" placeholder="Name" />
      <FormRegisterInput type="email" placeholder="Email" />
      <FormRegisterInput type="password" placeholder="Password" />
      <FormRegisterInput type="password" placeholder="Confirm Password" />
      <FormRegisterButton type="submit">Register</FormRegisterButton>
      <BtnGithub>
        <FaGithub size={18} />
        <span>Register with Github</span>
      </BtnGithub>
      <BtnGoogle>
        <FcGoogle size={18} />
        <span>Register with Google</span>
      </BtnGoogle>
    </FormRegisterContainer>
  );
}
