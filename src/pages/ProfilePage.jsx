import React from 'react';
import styled from 'styled-components';
import text from './text';

const Wrap = styled.div`
  background: var(--primary-light);
  color: var(--primary-dark);
`;

export default () => {
  return (
    <Wrap>
      <h2>ProfilePage</h2>
      <p>{text}</p>
    </Wrap>
  );
};
