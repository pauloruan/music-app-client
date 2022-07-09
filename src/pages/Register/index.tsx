import React from 'react';
import Header from '../../components/Header';
import FormRegister from '../../components/FormRegister';
import RegisterContainer from './style';

export default function Register(): React.FunctionComponentElement<{}> {
  return (
    <RegisterContainer>
      <Header />
      <FormRegister />
    </RegisterContainer>
  );
}
