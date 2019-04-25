import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const Wrap = styled.div`
  height: 100vh;
  padding: 1em 4.5em;
  ${props => props.background}
`;

export default ({ name, background, children }) => {
  return (
    <Element name={name}>
      <Wrap background={background}>{children}</Wrap>
    </Element>
  );
};
