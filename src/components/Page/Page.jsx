import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const Wrap = styled.div`
  background: var(--primary-dark);
  color: var(--primary-light);
`;

export default ({ children }) => {
  return (
    <Element>
      <Wrap>{children}</Wrap>
    </Element>
  );
};
