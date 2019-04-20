import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: var(--primary-light);
`;

const Item = styled.li`
  display: inline;
  margin: 0 10px;
`;

export default () => {
  return (
    <Nav>
      <ul>
        <Item>Profile</Item>
        <Item>Skills</Item>
      </ul>
    </Nav>
  );
};
