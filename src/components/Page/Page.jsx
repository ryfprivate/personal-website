import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const Wrap = styled.div`
  height: 91vh;
  background: ${props =>
    props.dark ? 'var(--primary-dark)' : 'var(--primary-light)'};
  color: ${props =>
    props.dark ? 'var(--primary-light)' : 'var(--primary-dark)'};};
`;

const Header = styled.h2`
  margin: 0;
`;
class Page extends React.Component {
  render() {
    const { name, header, children, dark } = this.props;

    return (
      <Wrap dark={dark}>
        <Element name={name}>
          <Header>{header}</Header>
          {children}
        </Element>
      </Wrap>
    );
  }
}

export default Page;
