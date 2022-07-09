import React from 'react';
import Header from '../../components/Header';
import { RegisterContainer } from './style';

export default function Register(): React.FunctionComponentElement<{}> {
  return (
    <RegisterContainer>
      <Header />
      <h1>Register</h1>
    </RegisterContainer>
  );
}
