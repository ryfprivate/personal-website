import React from 'react';
import styled from 'styled-components';
import text from './text';

const Wrap = styled.div`
  background: var(--primary-dark);
  color: var(--primary-light);
`;

export default () => {
  return (
    <Wrap>
      <h2>HomePage</h2>
      <p>{text}</p>
    </Wrap>
  );
};
