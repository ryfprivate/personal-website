import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: inline;
  margin: 0 10px;
`;

export default () => {
  return (
    <nav>
      <ul>
        <Item>Profile</Item>
        <Item>Skills</Item>
      </ul>
    </nav>
  );
};
