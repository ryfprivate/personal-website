import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const Wrap = styled.div`
  height: 91vh;
  background-color: ${props =>
    props.dark ? 'var(--primary-dark)' : 'var(--primary-light)'};
  color: ${props =>
    props.dark ? 'var(--primary-light)' : 'var(--primary-dark)'};};
`;

const Header = styled.h2`
  margin: 0;
`;
export default ({ name, header, children, dark }) => {
  return (
    <Element name={name}>
      <Wrap dark={dark}>
        <Header>{header}</Header>
        {children}
      </Wrap>
    </Element>
  );
};
