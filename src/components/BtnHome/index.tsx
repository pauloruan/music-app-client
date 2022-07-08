import React from 'react';
import { Link } from 'react-router-dom';
import BtnHomeContainer from './style';

export default function BtnHome(): React.FunctionComponentElement<{}> {
  return (
    <BtnHomeContainer
      type="button"
    >
      <Link
        style={{ textDecoration: 'none', color: '#24292e', fontSize: '1rem' }}
        to="/register"
      >
        start listening
      </Link>
    </BtnHomeContainer>
  );
}
