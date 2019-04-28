import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const Wrap = styled.div`
  @media only screen and (min-width: 768px) {
    padding: 1em 8em;
  }
  ${props => props.background}
`;

export default ({ name, background, children }) => {
  return (
    <Element name={name}>
      <Wrap background={background}>{children}</Wrap>
    </Element>
  );
};
